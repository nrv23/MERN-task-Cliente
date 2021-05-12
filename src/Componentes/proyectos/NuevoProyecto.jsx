import React, { Fragment ,useState,useContext} from 'react'
import ProyectoContext from '../../context/Proyectos/proyectoContext';
import Error from '../error/Error';

const NuevoProyecto = () => {

    const proyectosContext = useContext(ProyectoContext); // esto consume el provider del context 
    const {formulario,mostrarFormulario,agregarProyecto,errorForm,mostrarError} = proyectosContext; // extraer el valor de formulario del state del context de proyectos

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

        if(nombre.length === 0){
            mostrarError(true);
            console.log(errorForm)
            return ;
        }
        agregarProyecto(proyecto);
        guardarProyecto({
            nombre: '',
            id: ''
        })
        mostrarFormulario(false)
        mostrarError(false);
    }

    return ( 
        <Fragment>

            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario(true)}
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
            {
                errorForm? 
                    <Error mensaje='El nombre del proyecto es requerido' />
                : null
            }

        </Fragment>
     );
}
 
export default NuevoProyecto;