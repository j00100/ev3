import {useState, useEffect} from 'react';

import Formulario from './componentes/Formulario.jsx';
import NavBar from './componentes/NavBar.jsx';
import TablaApi from './componentes/TablaApi.jsx';
import TablaCrud from './componentes/TablaCrud.jsx';
import {obtenerCartasM, guardarCartasM, guardarActualizar, eliminarCartaId} from './utilidades/Persistencia.jsx'
  
function App() {

  const [vistaActual, setVistaActual] = useState('crud')

  const [cartas, setCartas] = useState(obtenerCartasM);
  const [cartaE, setCartaE] = useState(null);

  useEffect(() => {

    guardarCartasM(cartas);

  }, [cartas]); 


  const handleGuardarCarta = (cartaForm) =>{

    setCartas(guardarActualizar(cartas, cartaForm, cartaE?.id));
    setCartaE(null);

  };

  const handleEliminarCarta = (id) => {

    setCartas(eliminarCartaId(cartas, id));

    if(cartaE?.id === id) setCartaE(null);

  };

    return (

        <div>
            <NavBar vistaActual = {vistaActual} setVistaActual = {setVistaActual}/>
            
            <main className = "container my-4">

              {vistaActual === 'crud' &&(
                <>
                  <Formulario onGuardar = {handleGuardarCarta} cartaE = {cartaE} onCancelar = {() => setCartaE(null)}/>
                  <TablaCrud cartas = {cartas} onEditar = {(carta) => setCartaE(carta)} onEliminar = {handleEliminarCarta}/>
                </>
              )}

              {vistaActual === 'api' &&(
              
                <TablaApi />
              
              )}

            </main>
  
        </div>
    );
}

export default App;