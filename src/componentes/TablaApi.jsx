function TablaApi(){


	return(

		<div className = "card shadow-sm mt-3">
			
			<div className = "card-header bg-dark text-white d-flex align-items-center">
				
			</div>
			
			<div className = "card-body">
				
				{cargando && (

						<div className = "text-center my-3">
							
							<div className = "spinner-border text-primary" role = "status">
							
								<span className = "visually-hidden">Cargando...</span>
							
							</div>
						
						</div>

					)}

				{error && (

					<div className = "alert alert-danger" role = "alert">Ocurrio un error al cargar desde la API</div>
				)}

				<div className = "table-responsive">
					<table className = "table table-hover align-middle">
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Tipo</th>
								<th>Edicion</th>
								<th>Rareza</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								
							</tr>
						</tbody>
					</table>
				</div>

			</div>
		
		</div>

	);

}