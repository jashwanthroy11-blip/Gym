const mongoose = require('mongoose');

const workoutLogSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  workout: String,
  durationMinutes: Number,
  calories: Number,
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('WorkoutLog', workoutLogSchema);
