import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import AddDatos from './components/AddDatos';
import BorrarDatos from './components/BorrarDatos';
import BuscarDatos from './components/BuscarDatos';
import EditDatos from './components/EditDatos';
import TablaDatos from './components/TablaDatos';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () => 
	<App>
		<Switch>
			<Route path="/" component={Home} />
			<Route path="AddDatos" 
				render={() => <AddDatos  
					data={this.state.data}
          			onAddDato={this.handleAddDatos} />}
			/>
			<Route path="BorrarDatos" 
				render={() => <BorrarDatos  
					data={this.state.data}
          			onBorrarDato={this.handleBorrarDatos} />}
			/>
			<Route path="BuscarDatos" 
				render={() => <BuscarDatos  
					filterText ={this.state.filterText} 
         			data={this.state.data}
          			filterUpdate={this.filterUpdate.bind(this)} />}
			/>
			<Route path="EditDatos" 
				render={() => <EditDatos  
					data={this.state.data}
          			onEditarDato={this.handleEditarDatos} />}
			/>
			<Route path="TablaDatos" 
				render={() => <AddDatos  
					data={this.state.data} 
					/>}
			/>
			<Route component={Page404} />
		</Switch>
	</App>

export default AppRoutes;
