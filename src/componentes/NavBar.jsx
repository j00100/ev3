function NavBar({vistaActual, setVistaActual}){

	return(


		<nav id = "nav" className = "navbar navbar-dark bg-dark mb-4">

			<div className = "container-fluid d-flex justify-content-between align-items-center">
			
				<span className = "navbar-brand d-flex align-items-center gap-2 fw-bold">

                    <i className = "bi bi-journals text-primary fs-4"></i> 
                    Gestor MTG
                
                </span>

				<div className = "d-flex gap-2">

					<button className = {vistaActual === 'crud' ? 'btn btn-primary' : 'btn btn-outline-light'} onClick = {() => setVistaActual('crud')}>
						<i className = "bi bi-collection-fill me-2"></i>
						CRUD
					</button>

					<button className = {vistaActual === 'api' ? 'btn btn-primary' : 'btn btn-outline-light'} onClick = {() => setVistaActual('api')}>
						
						<i className = "bi bi-globe me-2"></i>
						Integracion API
					</button>
				
				</div>
			</div>

				
		</nav>

	);

}

export default NavBar;