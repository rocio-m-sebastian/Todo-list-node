const TodoList = require('./TodoList.js');
const Todo = require('./Todo.js');

let lista = new TodoList();

lista.crearTarea("texto 2","15-05-2021","15-05-2021","usuario",1);
console.log(lista);

lista.actualizarTarea(1621413342510, 'nuevo texto tarea...');
console.log('lista modificada', lista);
