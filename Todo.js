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

		if (estado === 3) {
			this.estado = 'acabado';
		} else if (estado === 2) {
			this.estado = 'en ejecución'
		} else {
			this.estado = 'pendiente'
		}
	}
	
}
