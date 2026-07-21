function FilaCrud({carta, onEditar, onEliminar}){

	const {nombre, tipo, edicion, n_copias} = carta;

	return(

		<tr>
			<td>{nombre}</td>
			<td>{tipo}</td>
			<td>{edicion}</td>
			<td>{n_copias}</td>
			<td>
				<div className = "d-flex gap-2">
					<button className = "btn btn-warning btn-sm" onClick = {() => onEditar(carta)}>
					
						<i className = "bi bi-pencil-square me-1"></i>
						Editar
					
					</button>
					
					<button className = "btn btn-danger btn-sm" onClick = {() => onEliminar(carta.id)}>
						
						<i className = " bi bi-trash-fill me-1"></i>	
						Eliminar
					
					</button>
				</div>
			</td>

		</tr>
	);


}

export default FilaCrud;