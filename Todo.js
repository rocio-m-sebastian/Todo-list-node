module.exports = class Todo {
	constructor(id, texto, fechaInicio, fechaFin, usuario, estado){
		this.id = id;
	constructor(texto, fechaInicio, fechaFin, usuario, estado){
		this.id = new Date().getTime();
		this.texto = texto;
		this.fechaInicio = fechaInicio;
		this.fechaFin = fechaFin;
		this.usuario = usuario;
		console.log('entra aquí');

		if (estado === 3) {
			this.estado = 'acabado';
		} else if (estado === 2) {
			this.estado = 'en ejecución'
		} else {
			console.log('entra aquí');
			this.estado = 'pendiente'
		}
	}
	
}
