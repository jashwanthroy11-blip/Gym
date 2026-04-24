const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const SubscriptionPlan = require('../models/SubscriptionPlan');
const auth = require('../middleware/auth');
const permit = require('../middleware/roles');
const router = express.Router();

router.use(auth, permit('admin'));

router.get('/stats', async (req, res, next) => {
  try {
    const totalMembers = await User.countDocuments({ role: 'member' });
    const totalTrainers = await User.countDocuments({ role: 'trainer' });
    const activePlans = await User.countDocuments({ subscriptionStatus: 'active' });
    const revenueData = await User.aggregate([
      { $unwind: { path: '$payments', preserveNullAndEmptyArrays: true } },
      { $group: { _id: null, total: { $sum: '$payments.amount' } } }
    ]);
    res.json({ totalMembers, totalTrainers, activePlans, revenue: revenueData[0]?.total || 0 });
  } catch (error) {
    next(error);
  }
});

router.get('/members', async (req, res, next) => {
  try {
    const members = await User.find({ role: 'member' }).populate('assignedTrainer subscriptionPlan');
    res.json(members);
  } catch (error) {
    next(error);
  }
});

router.post('/members', async (req, res, next) => {
  try {
    const { name, email, password, phone, assignedTrainer, subscriptionPlan } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const created = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role: 'member',
      assignedTrainer,
      subscriptionPlan,
      subscriptionStatus: subscriptionPlan ? 'active' : 'inactive'
    });
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
});

router.put('/members/:id', async (req, res, next) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('assignedTrainer subscriptionPlan');
    res.json(updated);
  } catch (error) {
    next(error);
  }
});

router.delete('/members/:id', async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Member removed' });
  } catch (error) {
    next(error);
  }
});

router.get('/plans', async (req, res, next) => {
  try {
    const plans = await SubscriptionPlan.find();
    res.json(plans);
  } catch (error) {
    next(error);
  }
});

router.post('/plans', async (req, res, next) => {
  try {
    const plan = await SubscriptionPlan.create(req.body);
    res.status(201).json(plan);
  } catch (error) {
    next(error);
  }
});

router.put('/plans/:id', async (req, res, next) => {
  try {
    const plan = await SubscriptionPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(plan);
  } catch (error) {
    next(error);
  }
});

router.delete('/plans/:id', async (req, res, next) => {
  try {
    await SubscriptionPlan.findByIdAndDelete(req.params.id);
    res.json({ message: 'Subscription plan deleted' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
