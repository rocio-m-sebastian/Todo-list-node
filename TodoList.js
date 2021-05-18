const Todo = require('./Todo.js');

module.exports = class TodoList{
	constructor(todos){
		this.todoList = todos;
	}

	crearTarea(id,texto,fechaInicio,fechaFin,usuario,estado){
		const tarea = new Todo(id, texto, fechaInicio, fechaFin, usuario, estado);
		this.todoList.push(tarea);
	}		

	mostrarTarea(id){
		for(let i in this.todoList){
			if(id === this.todoList[i].id){
				return this.todoList[i];
			}
		}
	}

	actualizarTarea(id, texto) {
		for(let i in this.todoList) {
			if(id === this.todoList[i].id) {
				this.todoList[i].texto = texto;
				return this.todoList[i];
			}
		}
	}
}
