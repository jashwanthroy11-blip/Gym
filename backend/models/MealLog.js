const mongoose = require('mongoose');

const mealLogSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: { type: Number, default: 0 },
  carbs: { type: Number, default: 0 },
  fats: { type: Number, default: 0 },
  time: { type: String } // e.g. "08:30 AM"
}, { timestamps: true });

module.exports = mongoose.model('MealLog', mealLogSchema);
