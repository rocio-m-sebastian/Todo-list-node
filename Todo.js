export default class Todo {
	id;
	texto;
	fechaInicio;
	fechaFin;
	usuario;
	estado = {
		p: "Pendiente",
		e: "En ejecución",
		f: "Finalizada"
	}

	constructor(texto, fechaInicio, fechaFin, usuario, estado){
		this.id = new Date().getTime();
		this.texto = texto;
		this.fechaInicio = fechaInicio;
		this.fechaFin = fechaFin;
		this.usuario = usuario;
	}
	
}
