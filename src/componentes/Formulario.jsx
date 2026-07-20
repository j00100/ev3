function Formulario(){

	return(

		<div className="card">
			<div className="card-header">
				Registrar Carta
			</div>
			<div className="card-body">
				<form>
					<div className = "row g-3">

						<div className = "col-md-6">

							<select className="form-select" required>
						        
						        <option value="">Selecciona un tipo...</option>
						        <option value="Criatura">Criatura</option>
						        <option value="Instantaneo">Instantaneo</option>
						        <option value="Conjuro">Conjuro</option>
						        <option value="Encantamiento">Encantamiento</option>
						        <option value="Artefacto">Artefacto</option>
						        <option value="Tierra">Tierra</option>
						        <option value="Planeswalker">Planeswalker</option>
						    
						    </select>
						    
						</div>
						
						<div className = "col-md-6">
							<input type="text" className = "form-control" placeholder = "Nombre Carta" required />
						</div>
						
						<div className = "col-md-6">
							<input type="text" className = "form-control" placeholder = "Edicion" required />
						</div>
						
						<div className = "col-md-6">
							<input type="number" className = "form-control" min = "1" max = "4" placeholder = "Cantidad de copias" required />
						</div>
					
					</div>

					<div className = "mt-3 d-flex justify-content-end">

						<button type = "submit" className = "btn btn-primary me-2"></button>
						<button type = "button" className = "btn btn-secondary"></button>
					
					</div>
				
				</form>
			
			</div>
		
		</div>

	);

}

export default Formulario;