const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  weight: Number,
  bmi: Number,
  caloriesBurned: Number,
  notes: String
});

const paymentSchema = new mongoose.Schema({
  amount: Number,
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'paid' },
  invoiceId: String
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'trainer', 'member'], default: 'member' },
  phone: String,
  assignedTrainer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subscriptionPlan: { type: mongoose.Schema.Types.ObjectId, ref: 'SubscriptionPlan' },
  subscriptionStatus: { type: String, enum: ['active', 'inactive', 'due'], default: 'inactive' },
  payments: [paymentSchema],
  progress: [progressSchema],
  workoutPlan: { type: String, default: '' },
  dietPlan: { type: String, default: '' },
  goals: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
