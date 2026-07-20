function NavBar({vistaActual, setVistaActual}){

	return(


		<nav id = "nav" className = "navbar navbar-dark bg-dark mb-4">

			<div className = "container-fluid d-flex justify-content-between align-items-center">
			
				

				<div className = "d-flex gap-2">

					<button className = "{vistaActual} === 'crud' ? 'btn btn-primary' : 'btn btn-outline-light'" onClick = {() => setVistaActual('crud')}>
						CRUD
					</button>

					<button className = "{vistaActual} === 'api' ? 'btn btn-primary' : 'btn btn-outline-light'" onClick = {() => setVistaActual('api')}>
						Integracion API
					</button>
				
				</div>
			</div>

				
		</nav>

	);

}

export default NavBar;