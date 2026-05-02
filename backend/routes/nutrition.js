const express = require('express');
const router = express.Router();
const MealLog = require('../models/MealLog');
const { protect } = require('../middleware/authMiddleware');

// Get all meals for the current day for the logged in user
router.get('/today', protect, async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const meals = await MealLog.find({
      member: req.user._id,
      date: { $gte: today, $lt: tomorrow }
    }).sort({ date: 1 });

    res.json(meals);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add a new meal log
router.post('/', protect, async (req, res) => {
  try {
    const { name, calories, protein, carbs, fats, time } = req.body;
    
    const newMeal = new MealLog({
      member: req.user._id,
      name,
      calories,
      protein: protein || 0,
      carbs: carbs || 0,
      fats: fats || 0,
      time: time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    const savedMeal = await newMeal.save();
    res.status(201).json(savedMeal);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// AI Meal Analyzer Mock Route (Since AI isn't connected to backend yet)
router.post('/analyze', protect, async (req, res) => {
  try {
    const { description } = req.body;
    // Mocking an AI response based on the description
    const response = {
      name: "Analyzed Meal",
      calories: 450,
      protein: 35,
      carbs: 40,
      fats: 15
    };
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
