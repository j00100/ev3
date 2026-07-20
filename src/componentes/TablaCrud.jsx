import FilaCrud from './FilaCrud.jsx';

function TablaCrud({cartas, onEditar, onEliminar}){
	
	return(
		<div className = "table-responsive">
			<table className = "table table-hover table-striped align-middle">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Tipo</th>
						<th>Edicion</th>
						<th>Numero copias</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>

					{cartas.lenght === 0 ? (

						<tr>
							<td colspan = "5" className = "text-center text-muted">
								
								No hay cartas registradas

							</td>

						</tr>

						) : (

							cartas.map((carta) =>

								<FilaCrud key = {carta.id} carta = {carta} onEditar = {onEditar} onEliminar = {onEliminar} />
							)

						)
					}
					
				</tbody>
			</table>
		</div>

	);

}

export default TablaCrud;