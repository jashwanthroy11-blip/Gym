const express = require('express');
const User = require('../models/User');
const WorkoutLog = require('../models/WorkoutLog');
const auth = require('../middleware/auth');
const permit = require('../middleware/roles');
const router = express.Router();

router.use(auth, permit('trainer'));

router.get('/members', async (req, res, next) => {
  try {
    const members = await User.find({ assignedTrainer: req.user._id });
    res.json(members);
  } catch (error) {
    next(error);
  }
});

router.post('/plans/:memberId', async (req, res, next) => {
  try {
    const { workoutPlan, dietPlan, goals } = req.body;
    const member = await User.findById(req.params.memberId);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    member.workoutPlan = workoutPlan;
    member.dietPlan = dietPlan;
    member.goals = goals;
    await member.save();
    res.json(member);
  } catch (error) {
    next(error);
  }
});

router.post('/progress/:memberId', async (req, res, next) => {
  try {
    const member = await User.findById(req.params.memberId);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    member.progress.push(req.body);
    await member.save();
    res.json(member.progress);
  } catch (error) {
    next(error);
  }
});

router.get('/logs', async (req, res, next) => {
  try {
    const logs = await WorkoutLog.find({ trainer: req.user._id }).populate('member');
    res.json(logs);
  } catch (error) {
    next(error);
  }
});

router.post('/logs', async (req, res, next) => {
  try {
    const log = await WorkoutLog.create({
      trainer: req.user._id,
      member: req.body.member,
      workout: req.body.workout,
      durationMinutes: req.body.durationMinutes,
      calories: req.body.calories,
      notes: req.body.notes
    });
    res.status(201).json(log);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
