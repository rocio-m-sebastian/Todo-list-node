export class Todo {
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

	constructor(id, texto, fechaInicio, fechaFin, usuario, estado){
		this.id = id;
		this.texto = texto;
		this.fechaInicio = fechaInicio;
                this.fechaFin = fechaFin;
                this.usuario = usuario;
		this.estado = estado;
	}
	
}
