const Goal = require('../models/goals');

const createGoal = async (req, res) => {
    try {
        const { title, description, start_date, due_date } = req.body;
        const goal = await Goal.create({ title, description, start_date, due_date });
        res.status(201).json({ message: 'Goal created', goal });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getGoals = async (req, res) => {
    try {
        const goals = await Goal.find();
        res.json({ message: 'Goals retrieved', goals });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getGoalById = async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }
        res.json({ message: 'Goal retrieved', goal });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateGoal = async (req, res) => {
    try {
        const { title, description, start_date, due_date } = req.body;
        const goal = await Goal.findByIdAndUpdate(req.params.id, { title, description, start_date, due_date }, { new: true });
        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }
        res.json({ message: 'Goal updated', goal });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteGoal = async (req, res) => {
    try {
        const goal = await Goal.findByIdAndDelete(req.params.id);
        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }
        res.json({ message: 'Goal deleted', goal });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createGoal, getGoals, getGoalById, updateGoal, deleteGoal };
