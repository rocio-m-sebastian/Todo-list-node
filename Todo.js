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

	getId(){
		return this.id;
	}

	getTexto(){
		return this.texto;
	}

	getfechaInicio(){
		return this.fechaInicio;
	}

	getFechaFin(){
		return this.fechaFin;
	}

	getUsuario(){
		return this.usuario;
	}

	getEstado(){
		return this.estado;
	}	
}
