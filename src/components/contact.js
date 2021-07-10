import React from "react";

const Contact = () => {
	return (
		<form className="container container-fluid mb-4">
			<div className="title my-4">
				<h1>¿Tienes dudas? Contáctanos</h1>
			</div>
			<div className="form-row mt-4">
				<div className="form-group col-md-8 my-4">
					<label>Nombre</label>
					<input type="name" className="form-control" id="inputname" />
				</div>
				<div className="form-group col-md-8 my-4">
					<label>Correo</label>
					<input type="mail" className="form-control" id="inputmail" />
				</div>
			</div>
			<div className="form-group col-md-8 my-4">
				<label>Teléfono</label>
				<input type="phone" className="form-control" id="inputphone" />
			</div>

			<div className="mb-3">
				<label>Mensaje</label>
				<textarea
					rows="5"
					className="form-control "
					id="validationTextarea"
					placeholder="Por favor ingresa tu mensaje en esta area."
				/>
			</div>
			<button type="submit" className="col-12 btn btn-primary">
				Enviar
			</button>
		</form>
	);
};


export default Contact;