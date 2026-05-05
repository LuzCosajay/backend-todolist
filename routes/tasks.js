var express = require('express');
var router = express.Router();

let tasks = [
  { id: 1, name: 'Task 1', description: 'Description for Task 1', duedate: '2024-07-01' },
  { id: 2, name: 'Task 2', description: 'Description for Task 2', duedate: '2024-07-02' }
];

// GET - obtener tareas
router.get('/getTasks', (req, res) => {
  res.json(tasks);
});

// POST - agregar tarea
router.post('/addTask', (req, res) => {
  const { name, description, duedate } = req.body;

  const newTask = {
    id: tasks.length + 1,
    name,
    description,
    duedate
  };

  tasks.push(newTask);
  res.json(newTask);
});

// DELETE - eliminar tarea
router.delete('/removeTask/:id', (req, res) => {
  const id = parseInt(req.params.id);

  tasks = tasks.filter(task => task.id !== id);

  res.json({ message: 'Task removed' });
});

module.exports = router;