import React, { Fragment } from 'react'
import Tarea from './Tarea';
const ListadoTareas = ({nombreProyecto}) => {

    const tareasProyecto = [];

    return (  

        <Fragment>
            <h2>Proyecto: {nombreProyecto}</h2>

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