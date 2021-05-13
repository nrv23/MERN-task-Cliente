import React, { Fragment,useContext } from 'react'
import ProyectoContext from '../../context/Proyectos/proyectoContext';
import TareaContext from '../../context/Tareas/tareaContext';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [];

    const {proyectoActual,eliminarProyecto} = useContext(ProyectoContext);
    const {tareaState} = useContext(TareaContext);
 
    if(!proyectoActual) return <h2>Seleccione un proyecto</h2>;

    return (  

        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {
                   !tareaState || tareaState.length === 0 ? 
                       ( <li className="tarea">No hay tareas</li>)
                    : tareaState.map(tarea => (
                        <Tarea 
                            key={tarea.id}
                            tarea = {tarea}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={()=>eliminarProyecto(proyectoActual.id)}
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
    );
}
 
export default ListadoTareas;