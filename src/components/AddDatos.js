import React, {Component} from 'react';

class AddDatos extends Component {

	constructor(props){
		super(props);
		this.state= {
	    	web:"",
	    	user:"",
	    	password:"",
	    	email:"",
	    	clave:"",
	    	observaciones:""
		};
		this.handleInput= this.handleInput.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this);
	}

	handleInput(e){
		const { value, name} = e.target;
		this.setState({
			[name]: value
		})
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.onAddDato(this.state);
    	this.setState({
	    	web:"",
	    	user:"",
	    	password:"",
	    	email:"",
	    	clave:"",
	    	observaciones:""
    	});
	}

	render(){
		return(
			<div className="container">
					<h2>Añadir datos</h2>
					<form className="card-body" onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label className="rotulo-1">Web</label>
							<input
								type="text"
					            name="web"
					            className="form-control"
					            onChange= { this.handleInput}
					            value= {this.state.web}
					            placeholder="Web"
							/>
						</div>
						<div className="form-group">
							<label className="rotulo-1">Usuario</label>
							<input
								type="text"
					            name="user"
					            className="form-control"
					            onChange= { this.handleInput}
					            value= {this.state.user}
					            placeholder="Usuario"
							/>
						</div>
						<div className="form-group">
						<label className="rotulo-1">Contraseña</label>
							<input
								type="text"
					            name="password"
					            className="form-control"
					            onChange= { this.handleInput}
					            value= {this.state.password}
					            placeholder="Password"
							/>
						</div>
						<div className="form-group">
						<label className="rotulo-1">Correo</label>
							<input
								type="text"
					            name="email"
					            className="form-control"
					            onChange= { this.handleInput}
					            value= {this.state.email}
					            placeholder="Email"
							/>
						</div>
						<div className="form-group">
						<label className="rotulo-1">Clave</label>
							<input
								type="text"
					            name="clave"
					            className="form-control"
					            onChange= { this.handleInput}
					            value= {this.state.clave}
					            placeholder="Clave"
							/>
						</div>
						<div className="form-group">
						<label className="rotulo-1">Observaciones</label>
							<input
								type="text"
					            name="observaciones"
					            className="form-control"
					            onChange= { this.handleInput}
					            value= {this.state.observaciones}
					            placeholder="Observaciones"
							/>
						</div>
						<button type="submit" className="btn-search">
            				SAVE
          				</button>
					</form>
			</div>
		);
	}
}

export default AddDatos;
