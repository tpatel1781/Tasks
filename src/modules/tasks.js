const Task = require('../models/Task'); // Importing the mongoose object from the Task model

/**
 * Creates a task on the task collection
 * Should take in the following parameters inside req.body;
 *  task_name: String - name of the task
 * 	description: String - task description
 * 	priority: Number - Integer range 1-4 for task priority
 * 	due_date: Date - due date of the dask
 */
function createTask(req, res, next) {
	// TODO: validate inputs
	const name = req.body['task_name'];
	if (name && name.trim() == "") {
		res.status(500).json({ message: 'Name should have content'});
		return;
	}

	Task.create(req.body, function(err, task) {
		if (err) {
			res.status(500).json({ message: err });
		} else {
			// Return the created task object if nothing went wrong
			res.status(200).json({ task: task }); 
		}
	});
}

function getAllTasks(req, res, next) {
	Task.find({}, function(err, tasks) {
		if (err) {
			res.status(500).json({ message: err });
		} else {
			res.status(200).json({ tasks: tasks });
		}
	});
}

function updateTask(req, res, next) {
	Task.updateOne({ _id: req.body['id']}, req.body, function(err, updated_task) {
		if (err) {
			res.status(500).json({ message: err });
		} else {
			res.status(200).json({ message: "Success!" });
		}
	})
}

module.exports = {
	createTask: createTask,
	getAllTasks: getAllTasks,
	updateTask: updateTask,
}