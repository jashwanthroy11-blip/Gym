const express = require('express');
const router = express.Router();
const WorkoutSession = require('../models/WorkoutSession');
const { protect } = require('../middleware/authMiddleware');

// Get active or recent workout session
router.get('/active', protect, async (req, res) => {
  try {
    const session = await WorkoutSession.findOne({ 
      member: req.user._id,
      completed: false
    }).sort({ date: -1 });
    
    if (!session) {
      return res.status(404).json({ message: 'No active session found' });
    }
    
    res.json(session);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new workout session (or generate via AI)
router.post('/', protect, async (req, res) => {
  try {
    const { name, type, exercises, durationMinutes, aiCoachNotes } = req.body;
    
    // Invalidate any currently active sessions for this user
    await WorkoutSession.updateMany(
      { member: req.user._id, completed: false },
      { $set: { completed: true } }
    );
    
    const session = new WorkoutSession({
      member: req.user._id,
      name: name || 'Custom Workout',
      type: type || 'custom',
      exercises: exercises || [],
      durationMinutes: durationMinutes || 0,
      aiCoachNotes: aiCoachNotes || ''
    });

    const savedSession = await session.save();
    res.status(201).json(savedSession);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Log a set for an exercise in a session
router.put('/:sessionId/exercises/:exerciseId/sets/:setId', protect, async (req, res) => {
  try {
    const { load, reps, status } = req.body;
    
    const session = await WorkoutSession.findOne({ _id: req.params.sessionId, member: req.user._id });
    if (!session) return res.status(404).json({ message: 'Session not found' });
    
    const exercise = session.exercises.id(req.params.exerciseId);
    if (!exercise) return res.status(404).json({ message: 'Exercise not found' });
    
    const set = exercise.sets.id(req.params.setId);
    if (!set) return res.status(404).json({ message: 'Set not found' });
    
    set.load = load !== undefined ? load : set.load;
    set.reps = reps !== undefined ? reps : set.reps;
    set.status = status !== undefined ? status : set.status;
    
    // Recalculate total volume
    let volume = 0;
    session.exercises.forEach(ex => {
      ex.sets.forEach(s => {
        if (s.status === 'completed' && s.load && s.reps) {
          volume += (s.load * s.reps);
        }
      });
    });
    session.totalVolume = volume;
    
    await session.save();
    res.json(session);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Complete a session
router.put('/:sessionId/complete', protect, async (req, res) => {
  try {
    const session = await WorkoutSession.findOne({ _id: req.params.sessionId, member: req.user._id });
    if (!session) return res.status(404).json({ message: 'Session not found' });
    
    session.completed = true;
    await session.save();
    
    // Update user streak (simplified logic)
    const user = req.user;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (!user.lastActiveDate || user.lastActiveDate < today) {
        user.weeklyStreak += 1;
        user.lastActiveDate = today;
        await user.save();
    }
    
    res.json(session);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
