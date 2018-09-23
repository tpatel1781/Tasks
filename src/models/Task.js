const mongoose = require('mongoose');

// Creating the task schema
var TaskSchema = new mongoose.Schema({
	task_name: { type: String, required: true },
	description: { type: String, default: "" },
	priority: { type: Number, min: 1, max: 4 },
	completed: { type: Boolean, default: false },
	due_date: Date,
	last_updated: { type: Date, default: Date.now }
});

// Creates Task object
// mongoose.model creates the Task collection in the database, and returns an object that
// lets you interact with that collection
// In order to use this osbject globally, we use module.exports. So when import Tasks.js 
// elsewhere in the project, we can interact with the object that mongoose.model returns
module.exports = mongoose.model('Task', TaskSchema);