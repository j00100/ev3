const ALMACENAMIENTO = 'cartas_mtg';

export const obtenerCartasM = () =>{

	try{

		const data = localStorage.getItem(ALMACENAMIENTO);
		return data ? JSON.parse(data) : [];

	}catch(e){

		console.error("Error al leer localStorage: ", e);
		return []

	}

};

export const guardarCartasM = (cartas) => {

	try{

		localStorage.setItem(ALMACENAMIENTO, JSON.stringify(cartas));

	}catch(e){

		console.error("Error al almacenar en localStorage: ", e);
	}

}

export const guardarActualizar = (cartas, cartaForm, idEditar) =>{

	if(idEditar){

		return cartas.map((c) => (c.id === idEditar ? { ...cartaForm, id: c.id} : c));
	}

	return [...cartas, { ...cartaForm, id: crypto.randomUUID()}];

};

export const eliminarCartaId = (cartas, id) => {

	return cartas.filter((c) => c.id !== id);

};