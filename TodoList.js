const Todo = require('./Todo.js');
const { jsonReader, jsonUpdate } = require('./dbFunctions');

export default class TodoList{
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

	mostrarTarea(id){
		for(let i in this.todos){
			if(id === this.todos[i].id){
				return this.todos[i];
			}
		}
	}

	actualizarTarea(id, texto) {
		for(let i in this.todos) {
			if(id === this.todos[i].id) {
				this.todos[i].texto = texto;
				this.guardarDB(this.todos);
				return this.todos[i];
			}
		}
	}

	guardarDB(td) {
		jsonUpdate(td);
	}

	cargarDB() {
		jsonReader("./data.json");
		return todoList;
	}
}
