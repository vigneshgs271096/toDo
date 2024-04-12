const Task = require("../models/task");


const createTask = async (req, res) => {
    try {
        const { title, description, due_date, category, repeat, count , goal , completed} = req.body;
        console.log(completed,'//////////');

        // Create an object to store only the properties that are present in the request body
        const taskData = {};
        if (title) taskData.title = title;
        if (description) taskData.description = description;
        if (due_date) taskData.due_date = due_date;
        if (category) taskData.category = category;
        if (repeat) taskData.repeat = repeat;
        if (count) taskData.count = count;
        if (goal) taskData.goal = goal;
        if (completed) taskData.completed = completed;

        const task = await Task.create(taskData);
        res.status(201).json({ message: 'Task created', task });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}


const getTasks = async (req, res) => {
    try {
        // Define conditions object based on provided goal and category
        // const conditions = {};
        // if (goal) {
        //     conditions.goal = goal;
        // }
        // if (category) {
        //     conditions.category = category;
        // }
        const tasks = await Task.find({ completed: false }).sort({ due_date: 1 });;
        res.json({ message: 'Tasks retrieved', tasks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task retrieved', task });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const { title, description, due_date, category, repeat, count, goal, completed } = req.body;
        const updateFields = {};
        if (title) updateFields.title = title;
        if (description) updateFields.description = description;
        if (due_date) updateFields.due_date = due_date;
        if (category) updateFields.category = category;
        if (repeat) updateFields.repeat = repeat;
        if (count) updateFields.count = count;
        if (goal) updateFields.goal = goal;
        if (completed) updateFields.completed = completed;

        const task = await Task.findByIdAndUpdate(req.params.id, updateFields, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task updated', task });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted', task });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };