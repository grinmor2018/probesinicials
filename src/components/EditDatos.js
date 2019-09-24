import React, {Component} from 'react';

class EditDatos extends Component {

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
		this.posicion=0;
		this.handleInput= this.handleInput.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this);

	}

	handleRowSelection(e,i) {
    	this.setState({
	    	web:e.web,
	    	user:e.user,
	    	password:e.password,
	    	email:e.email,
	    	clave:e.clave,
	    	observaciones:e.observaciones
    	})
    	this.posicion = i;
	}
	handleInput(e){
		const { value, name} = e.target;
		this.setState({
			[name]: value
		})
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.onEditarDato(this.state);
		this.setState({
	    	web:"",
	    	user:"",
	    	password:"",
	    	email:"",
	    	clave:"",
	    	observaciones:""
		})
		this.posicion=0;
	}

	onChange(e) {
    	//this.setState({typed: e.target.value});
    	this.handleRowSelection.bind(this);
    }
  	onSubmit(e){
  		var mensaje;
		var opcion = window.confirm("Es correcto? "+ JSON.stringify(this.state.web+":"+this.state.user) + "??");
 		
 		e.preventDefault();
		if (opcion === true) {
  			this.props.onEditarDato(this.state,this.posicion);
        } else {
        	mensaje = alert("Has cancelado");

        }

  			
  	}

	render(){

		const data= this.props.data;

		return(
			<div className="container">
				<h2>Editar Datos</h2>
			    <table>
			    	<thead>
			     		<tr>
				          <th>#</th>
				          <th>Web</th>
				          <th>Usuario</th>
				          <th>Password</th>
				          <th>Email</th>
				          <th>Clave</th>
				          <th>Observaciones</th>
			     		</tr>
			     	</thead>
					<tbody>{data.map((row,i) => (
			            <tr key={i} onClick={this.handleRowSelection.bind(this,row,i)}>
			            	<td>{i+1}</td>
				            <td>{row.web}</td>
				            <td>{row.user}</td>
				            <td>{row.password}</td>
				            <td>{row.email}</td>
				            <td>{row.clave}</td>
				            <td>{row.observaciones}</td>
				        </tr>
			            )
			          )
			        }
			     	</tbody>
			    </table>
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
						<p></p>
						<form onSubmit={this.onSubmit.bind(this)}>
			    			<label>
	    					Web:
	    					<input 
	    						className="texto-variable"
	    						type="text" 
	    						name="name" 
	    						value= {this.state.web+": "+this.state.user+" "+this.state.password+" "+this.state.email+" "+this.state.clave+" "+this.state.observaciones}
	    						onChange={this.onChange.bind(this)} />
		  					</label>
		  					<p></p>
		  					<button type="submit" className="btn-search" >
		            				SAVE
		          			</button>
			    		</form>
			    </form>
   			</div>
			);
	}
}

	

export default EditDatos;
