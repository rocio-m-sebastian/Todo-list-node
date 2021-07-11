const Todo = require('./Todo');
const TodoList = require('./TodoList');

const todoList = new TodoList();

function menu (){
    console.log("-----MENU-----\n1.Crear tarea\n2.Actualizar tarea\n3.Borrar tarea\n4.Listar tareas\n5.Listar una tarea\n0.Salir")
}

function readCosnole(){
    var loopOp = true;
    while(loopOp){
        const prompt = require('prompt-sync')({sigint: true});
        menu();
        var opcion = prompt("Escoje una opción:");
        if(opcion == 0){
            loopOp = false;
            console.log("Adiós!");
        }else if(opcion > 5 || opcion < 0){
            console.log("No hay ninguna opcion con este número, vuelve a intentarlo!");
        }else{
            switch(opcion){
                case '1': crearTarea();
                    break;
                case '2': updateTarea();
                    break;
                case '3': borrarTarea();
                    break;
                case '4': listarTareas();
                    break;
                case '5': listarUnaTarea();
                    break;
            }
        }
    }
}

function crearTarea(){
    const prompt = require('prompt-sync')({sigint: true});

    console.log("==Crear una tarea==\n");
    var texto = prompt("Escribe el texto:");

    var fechaInicio = prompt("Escribe la fecha de inicio:");

    var fechaFin = prompt("Escribe la fecha de fin:");

    var usuario = prompt("Escribe el usuario:");

    var estado = prompt("Escribe el estado:");

    todoList.crearTarea(texto,fechaInicio,fechaFin,usuario,estado);
}

function updateTarea(){
    const prompt = require('prompt-sync')({sigint: true});

    console.log("==Actualizar tarea==\n");
    var id = prompt("Escribe el id de la tarea a actualizar:");

    var texto = prompt("Escribe el texto:");

    todoList.actualizarTarea(id,texto);
}

function borrarTarea(){
    const prompt = require('prompt-sync')({sigint: true});

    console.log("==Borrar una tarea==\n");
    var id = prompt("Escribe el id de la tarea a borrar:");
    
    todoList.borrarTarea(id);
}

function listarTareas(){

    console.log("==Listar tareas==\n");
    
    console.log(todoList.mostrarAllTarea());
}

function listarUnaTarea(){
    const prompt = require('prompt-sync')({sigint: true});

    console.log("==Listar una tarea==\n");
    var id = prompt("Escribe el id de la tarea a listar:");
    
    todoList.mostrarTarea(id);
}
readCosnole();