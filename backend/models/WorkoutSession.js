const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
  setNumber: { type: Number, required: true },
  load: { type: Number }, // weight in kg
  reps: { type: Number },
  status: { type: String, enum: ['completed', 'pending', 'skipped'], default: 'pending' }
});

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  focus: { type: String }, // e.g., 'Primary Compound', 'Upper Pec'
  targetSets: { type: Number },
  targetReps: { type: String }, // e.g., '8-12'
  sets: [setSchema]
});

const workoutSessionSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  name: { type: String, required: true }, // e.g., 'Push Day: Chest & Triceps'
  type: { type: String, enum: ['generated', 'custom'], default: 'custom' },
  durationMinutes: { type: Number, default: 0 },
  intensity: { type: Number, default: 0 }, // 1-10 scale
  totalVolume: { type: Number, default: 0 }, // calculated total kg moved
  exercises: [exerciseSchema],
  aiCoachNotes: { type: String }, // e.g., 'Based on your 48h recovery...'
  completed: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('WorkoutSession', workoutSessionSchema);
