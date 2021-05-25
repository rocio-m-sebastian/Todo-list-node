const Todo = require('./Todo.js');
const { jsonReader, jsonUpdate } = require('./dbFunctions');

module.exports = class TodoList{
	constructor(){
		this.todos = this.cargarDB();
	}

	crearTarea(texto,fechaInicio,fechaFin,usuario,estado){
		const tarea = new Todo(texto, fechaInicio, fechaFin, usuario, estado);
		this.todos.push(tarea);
		this.guardarDB(this.todos);
	}

	mostrarTarea(id){
		for(let i in this.todos){
			if(id === this.todos[i].id){
				console.log("existeix");
				return this.todos[i];
			}
		}
	}
	mostrarAllTarea(){
		return this.todos;
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

	borrarTarea(id){
		for(let i in this.todos){
			if(id === this.todos[i].id){
				this.todos.splice(i,1);
				this.guardarDB(this.todos);
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
