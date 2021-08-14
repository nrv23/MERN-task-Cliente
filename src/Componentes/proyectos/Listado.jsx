import React,{useContext,useEffect} from 'react'
import ProyectoContext from '../../context/Proyectos/proyectoContext';
import Proyecto from './Proyecto';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import alertaContext from '../../context/alertas/alertaContext';

const ListadoProyectos = () => {

    const {proyectos,obtenerProyectos} = useContext(ProyectoContext)
    const {alertaState,mostrarAlerta} =useContext(alertaContext)

    useEffect(() => {

        if(alertaState && alertaState.alerta) {
            mostrarAlerta(alertaState.alerta.msg,alertaState.alerta.categoria)
        }

        obtenerProyectos() // la funcion del state ya va venir cargada con la informacion
    },[alertaState]) // solo se va cargar cuando el componente se cargue el componente

    return ( 

        <ul className="listado-proyectos">
                        { alertaState.alerta  ?<div className={`alerta ${alertaState.alerta .categoria}`}>{alertaState.alerta .msg}</div>: null}
            {
                proyectos.length === 0 ? 
                    ( <li className="proyecto">No hay proyectos</li>)
                : 
                <TransitionGroup>
                    {
                        proyectos.map(proyecto => (
                            //cuando se iteran varios compoenntes dentro de un map, el primer componente hijo es el que lleva el 
                            // valor en el key
                            <CSSTransition
                                key={proyecto._id}
                                timeout={200}
                                classNames="proyecto"
                            >
                                <Proyecto 
                                    
                                    proyecto = {proyecto}
                                />
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
            }
    </ul>
     );
}
 
export default ListadoProyectos;