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

    console.log("==Crear==\n");
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
    console.clear();
    console.log("update");
}

function borrarTarea(){
    console.clear();
    console.log("borrar");
}

function listarTareas(){
    console.clear();
    console.log("listars");
}

function listarUnaTarea(){
    console.clear();
    console.log("listar");
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