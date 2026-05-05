# Backend - Semana 3

## Descripción
API con Node.js y Express para manejar tareas y metas. Permite consultar, agregar y eliminar registros.

## Tecnologías
- Node.js
- Express

## Endpoints

### Tasks
- GET /tasks/getTasks
- POST /tasks/addTask
- DELETE /tasks/removeTask/:id

### Goals
- GET /goals/getGoals
- POST /goals/addGoal
- DELETE /goals/removeGoal/:id

## Ejecución

```bash
npm install
npm start
```

Servidor en:
http://localhost:3000

## Notas
- Los endpoints requieren enviar un header de autorización (el mismo usado en clase).
- Los datos se manejan en memoria.