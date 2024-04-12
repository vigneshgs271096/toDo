const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    due_date: { type: Date, required: false },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false },
    goal: { type: mongoose.Schema.Types.ObjectId, ref: 'Goal', required: false },
    repeat: { type: Boolean },
    count: { type: Number },
    completed: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
