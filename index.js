const TodoList = require('./TodoList.js');

const lista1 = [{ "id": 1,"texto": "texto tarea 1","fechaInicio": "15-05-2021","fechaFin": "15-05-2021","usuario": "Julia","estado": 1}, { "id": 2,"texto": "texto tarea 2","fechaInicio": "15-05-2021","fechaFin": "15-05-2021","usuario": "Carlos","estado": 1}];

const lista = new TodoList(lista1);

console.log(lista);
console.log(lista.todoList[0].id);

lista.crearTarea(3,"texto3","15-05-2021","15-05-2021","usuario",1);
console.log(lista);
console.log(lista.todoList[1]);

lista.actualizarTarea(3, 'nuevo texto tarea 3');
console.log('lista modificada', lista);
