import React, { Fragment,useContext } from 'react'
import ProyectoContext from '../../context/Proyectos/proyectoContext';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [];

    const {proyectoActual} = useContext(ProyectoContext);
    console.log(proyectoActual)
    if(!proyectoActual) return <h2>Seleccione un proyecto</h2>;

    return (  

        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {
                    tareasProyecto.length === 0 ? 
                       ( <li className="tarea">No hay tareas</li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea 
                            tarea = {tarea}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
    );
}
 
export default ListadoTareas;