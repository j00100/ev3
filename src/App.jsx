import Formulario from './componentes/Formulario.jsx';
import NavBar from './componentes/NavBar.jsx';
import TablaApi from './componentes/TablaApi.jsx';
import TablaCrud from './componentes/TablaCrud.jsx';

function App() {
    return (
        <div>
            <NavBar />
            
            <main className = "container my-4">

              {vista_actual === 'crud' &&(
                <>
                  <Formulario />
                  <TablaCrud />
                </>
              )}

              {vista_actual === 'api' &&(
              
                <TablaApi />
              
              )}

            </main>
  
        </div>
    );
}