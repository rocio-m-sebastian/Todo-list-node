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
		this.todos.forEach(function(item,index,array){
			if(id == item.id){
				console.log(item);
			}
		});
	}
	mostrarAllTarea(){
		return this.todos;
	}

	actualizarTarea(id, texto) {
		this.todos.forEach(function(item,index,array){
			if(id == item.id){
				item.texto = texto;
				console.log(item);
			}
		});
		this.guardarDB(this.todos);
	}

	borrarTarea(id){
		this.todos.forEach(function(item,index,array){
			if(id == item.id){
				array.splice(index,1);
				console.log("Tarea borrada!");
			}
		});
		this.guardarDB(this.todos);
	}

	guardarDB(td) {
		jsonUpdate(td);
	}

	cargarDB() {
		jsonReader("./data.json");
		return todoList;
	}
}
