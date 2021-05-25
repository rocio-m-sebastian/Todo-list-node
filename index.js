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
        /*var name = prompt("Enter your name: ");
        console.log("Your name is " + name);
        if(name == "Arnau"){
            loopop = false;
        }*/
        menu();
        var opcion = prompt("Escoje una opción:");
        if(opcion == 0){
            loopOp = false;
            console.log("Adiós!");
        }else if(opcion > 5 || opcion < 0){
            console.clear();
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
    //const todo = new Todo();
    const prompt = require('prompt-sync')({sigint: true});

    console.log("==Crear una tarea==\n");
    var texto = prompt("Escribe el texto:");
    //todo.texto = texto;

    var fechaInicio = prompt("Escribe la fecha de inicio:");
    //todo.fechaInicio = fechaInicio;

    var fechaFin = prompt("Escribe la fecha de fin:");
    //todo.fechaFin = fechaFin;

    var usuario = prompt("Escribe el usuario:");
    //todo.usuario = usuario;

    var estado = prompt("Escribe el estado:");
    //todo.estado = estado;

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
    
    //console.log(todoList.mostrarTarea(id));
    todoList.borrarTarea(id);
}

function listarTareas(){
    //const prompt = require('prompt-sync')({sigint: true});

    console.log("==Listar tareas==\n");
    
    console.log(todoList.mostrarAllTarea());
}

function listarUnaTarea(){
    const prompt = require('prompt-sync')({sigint: true});

    console.log("==Listar una tarea==\n");
    var id = prompt("Escribe el id de la tarea a listar:");
    
    console.log(todoList.mostrarTarea(id));
}
readCosnole();
/*function fer(){
    var loopop = true;
    while(loopop){
        menu();
        const prompt = require('prompt-sync')({sigint: true});
        var name = prompt("Enter your name: ");
        console.log("Your name is " + name);
        if(name == "Arnau"){
            loopop = false;
        }
    }
}
fer();*/