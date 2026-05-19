var express = require('express');
var router = express.Router();
var GoalSchema = require('../models/goal');

router.get('/getGoals', async function(req, res, next) {
  try {
    const goals = await GoalSchema.find({});
    return res.status(200).json(goals);
  } catch (err) {
    return res.status(500).json({
      error: err.message || 'Error fetching goals'
    });
  }
});

router.post('/addGoal', async function(req, res, next) {
  if (req.body && req.body.name && req.body.description && req.body.duedate) {
    try {
      const goal = new GoalSchema({
        name: req.body.name,
        description: req.body.description,
        duedate: new Date(req.body.duedate)
      });

      const response = await goal.save();

      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({
        error: err.message || 'Error saving goal'
      });
    }
  } else {
    return res.status(400).json({
      error: 'Missing required fields: name, description, duedate'
    });
  }
});

router.delete('/removeGoal/:id', async function(req, res, next) {
  if (req.params && req.params.id) {
    try {
      await GoalSchema.findByIdAndDelete(req.params.id);

      return res.status(200).json({
        message: 'Goal removed successfully'
      });
    } catch (err) {
      return res.status(500).json({
        error: err.message || 'Error removing goal'
      });
    }
  } else {
    return res.status(400).json({
      error: 'Missing required fields: id'
    });
  }
});

module.exports = router;