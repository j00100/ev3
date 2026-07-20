import {useState, useEffect} from 'react';

function Formulario({onGuardar, cartaE, onCancelar}){

	const e_inicial = {

		tipo: '',
		nombre: '',
		edicion: '',
		n_copias: '1'
	}

	const [formData, setFormData] = useState(e_inicial);

	useEffect(()=>{

		if(cartaE){

			setFormData(cartaE);
		
		}else{

			setFormData(e_inicial);

		}

	}, [cartaE]);

	const handleChange = (e) => {

		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value

		});

	};

	const handleSubmit = (e) =>{

		e.preventDefault();
		onGuardar(formData);
		setFormData(e_inicial);

	}
	return(

		<div className="card">
			
			<div className="card-header">

				{cartaE ? "Editar Carta" : "Registrar Carta"}
			
			</div>
			<div className="card-body">
				<form onSubmit = {handleSubmit}>
					<div className = "row g-3">

						<div className = "col-md-6">

							<select name = "tipo" className="form-select" value = {formData.tipo} onChange = {handleChange} required>
						        
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
							<input name = "nombre" type="text" className = "form-control" placeholder = "Nombre Carta" value = {formData.nombre} onChange = {handleChange} required />
						</div>
						
						<div className = "col-md-6">
							<input name = "edicion" type="text" className = "form-control" placeholder = "Edicion" value = {formData.edicion} onChange = {handleChange}  required />
						</div>
						
						<div className = "col-md-6">
							<input name = "n_copias" type="number" className = "form-control" min = "1" max = "4" placeholder = "Cantidad de copias" value = {formData.n_copias} onChange = {handleChange}  required />
						</div>
					
					</div>

					<div className = "mt-3 d-flex justify-content-end">

						<button type = "submit" className = "btn btn-primary me-2">Guardar</button>
						<button type = "button" className = "btn btn-secondary" onClick = {onCancelar}>Cancelar</button>
					
					</div>
				
				</form>
			
			</div>
		
		</div>

	);

}

export default Formulario;