function FilaCrud({nombre, tipo, edicion, n_copias}){

	return(

		<tr>
			<td>{nombre}</td>
			<td>{tipo}</td>
			<td>{edicion}</td>
			<td>{n_copias}</td>
			<td>
				<div className = "d-flex gap-2">
					<button className = "btn btn-warning btn-sm"></button>
					<button className = "btn btn-danger btn-sm"></button>
				</div>
			</td>

		</tr>
	);


}

export default FilaCrud;