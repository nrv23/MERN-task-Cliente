import React, { Fragment ,useState,useContext} from 'react'
import ProyectoContext from '../../context/Proyectos/proyectoContext';

const NuevoProyecto = () => {

    const proyectosContext = useContext(ProyectoContext); // esto consume el provider del context 
    const {formulario,mostrarFormulario} = proyectosContext; // extraer el valor de formulario del state del context de proyectos

    const [proyecto,guardarProyecto] = useState({

        nombre: '',
        id:''
    }); // va generar el nombre y el id del proyecto

    const actualizarState= ({target:{value,name}}) => {

        guardarProyecto({
            ...proyecto,
            [name]: value
        });
    }

    const {nombre} = proyecto;

    const registrar = e => {
        e.preventDefault();

        console.log("click");
    }

    return ( 
        <Fragment>

            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
            >
                Nuevo Proyecto
            </button>

            {
                formulario? 
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={registrar}
                >

                    <input 
                        type="text" 
                        name="nombre" 
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        value={nombre}
                        id=""
                        onChange={actualizarState}
                    />

                    <input type="submit" value="Agregar Proyecto" className="btn btn-primario btn-block"/>

                </form>
                : null
            }

        </Fragment>
     );
}
 
export default NuevoProyecto;