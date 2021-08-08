import React, { Fragment,useContext } from 'react'
import ProyectoContext from '../../context/Proyectos/proyectoContext';
import TareaContext from '../../context/Tareas/tareaContext';
import Tarea from './Tarea';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

const ListadoTareas = () => {

    const tareasProyecto = [];

    const {proyectoActual,eliminarProyecto} = useContext(ProyectoContext);
    const {tareaState} = useContext(TareaContext);
    console.log({tareaState})
    if(!proyectoActual) return <h2>Seleccione un proyecto</h2>;

    return (  

        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {
                   !tareaState || tareaState.length === 0 ? 
                       ( <li className="tarea">No hay tareas</li>)
                    :<TransitionGroup>
                       {
                            tareaState.map(tarea => (
                                
                                <CSSTransition
                                    key={tarea.id}
                                    timeout={200}
                                    classNames="tarea"
                                >
                                    
                                    <Tarea 
                                        
                                        tarea = {tarea}
                                    />
                                
                                </CSSTransition>
                            ))  
                        }
                    </TransitionGroup>
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