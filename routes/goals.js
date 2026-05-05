var express = require('express');
var router = express.Router();

let goals = [
  { id: 1, name: 'Goal 1', description: 'Description for Goal 1', duedate: '2024-08-01' },
  { id: 2, name: 'Goal 2', description: 'Description for Goal 2', duedate: '2024-08-02' }
];

router.get('/getGoals', (req, res) => {
  res.json(goals);
});

router.post('/addGoal', (req, res) => {
  const { name, description, duedate } = req.body;

  const newGoal = {
    id: Math.floor(Math.random() * 1000) + 1,
    name,
    description,
    duedate
  };

  goals.push(newGoal);
  res.json(newGoal);
});

router.delete('/removeGoal/:id', (req, res) => {
  const id = parseInt(req.params.id);

  goals = goals.filter(goal => goal.id !== id);

  res.json({ message: `Goal with id ${id} removed` });
});

module.exports = router;