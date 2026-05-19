var express = require('express');
var router = express.Router();
var TaskSchema = require('../models/task');

router.get('/getTasks', async function(req, res, next) {
  try {
    const tasks = await TaskSchema.find({});
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(500).json({
      error: err.message || 'Error fetching tasks'
    });
  }
});

router.post('/addTask', async function(req, res, next) {
  if (req.body && req.body.name && req.body.description && req.body.duedate) {
    try {
      const task = new TaskSchema({
        name: req.body.name,
        description: req.body.description,
        duedate: new Date(req.body.duedate)
      });

      const response = await task.save();

      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({
        error: err.message || 'Error saving task'
      });
    }
  } else {
    return res.status(400).json({
      error: 'Missing required fields: name, description, duedate'
    });
  }
});

router.delete('/removeTask/:id', async function(req, res, next) {
  if (req.params && req.params.id) {
    try {
      await TaskSchema.findByIdAndDelete(req.params.id);

      return res.status(200).json({
        message: 'Task removed successfully'
      });
    } catch (err) {
      return res.status(500).json({
        error: err.message || 'Error removing task'
      });
    }
  } else {
    return res.status(400).json({
      error: 'Missing required fields: id'
    });
  }
});

module.exports = router;