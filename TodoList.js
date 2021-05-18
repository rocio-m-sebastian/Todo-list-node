const Todo = require('./Todo.js');

export class TodoList{
	todoList;

	constructor(todos){
		this.todoList = JSON.parse(todos);
	}

	crearTarea(id,texto,fechaInicio,fechaFin,usuario,estado){
		const tarea = new Todo(id, texto, fechaInicio, fechaFin, usuario, estado);
		todoList.array.push(tarea);
	}		

	mostrarTarea(id){
		for(let i in this.todoList){
			if(id === this.todoList[i].id){
				return this.todoList[i];
			}
		}
	}
}
