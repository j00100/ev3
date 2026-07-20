import { useState, useEffect } from 'react';

function TablaApi() {

    const [cartasApi, setCartasApi] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const obtenerCartas = async () => {
            try {

                setCargando(true);
                setError(false);

                const res = await fetch("https://api.scryfall.com/cards/search?q=f%3Apremodern");

                if (!res.ok) {
                    throw new Error("Error en la peticion");
                }

                const data = await res.json();
                setCartasApi(data.data || []);

            } catch (e) {

                console.error(e);
                setError(true);

            } finally {

                setCargando(false);
            }
        };

        obtenerCartas();

    }, []);

    return (

        <div className="card shadow-sm mt-3">

            <div className="card-header bg-dark text-white d-flex align-items-center">
                Cartas Destacadas API
            </div>

            <div className="card-body">

                {cargando && (
                    <div className="text-center my-3">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger" role="alert">
                        Ocurrio un error al cargar desde la API
                    </div>
                )}

                {!cargando && !error && (
                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Tipo</th>
                                    <th>Edicion</th>
                                    <th>Rareza</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartasApi.map((carta) => (
                                    <tr key={carta.id}>
                                        <td>{carta.name}</td>
                                        <td>{carta.type_line}</td>
                                        <td>{carta.set_name}</td>
                                        <td className="text-capitalize">{carta.rarity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>

        </div>

    );

}

export default TablaApi;