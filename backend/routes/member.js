const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');
const permit = require('../middleware/roles');
const router = express.Router();

router.use(auth, permit('member'));

router.get('/profile', async (req, res, next) => {
  try {
    const member = await User.findById(req.user._id).populate('assignedTrainer subscriptionPlan');
    res.json(member);
  } catch (error) {
    next(error);
  }
});

router.get('/progress', async (req, res, next) => {
  try {
    const member = await User.findById(req.user._id);
    res.json(member.progress);
  } catch (error) {
    next(error);
  }
});

router.post('/progress', async (req, res, next) => {
  try {
    const member = await User.findById(req.user._id);
    member.progress.push(req.body);
    await member.save();
    res.status(201).json(member.progress);
  } catch (error) {
    next(error);
  }
});

router.get('/payments', async (req, res, next) => {
  try {
    const member = await User.findById(req.user._id);
    res.json(member.payments);
  } catch (error) {
    next(error);
  }
});

router.post('/payments', async (req, res, next) => {
  try {
    const member = await User.findById(req.user._id);
    member.payments.push(req.body);
    await member.save();
    res.status(201).json(member.payments);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
