import React,{useContext,useEffect} from 'react'
import ProyectoContext from '../../context/Proyectos/proyectoContext';
import Proyecto from './Proyecto';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

const ListadoProyectos = () => {

    const {proyectos,obtenerProyectos} = useContext(ProyectoContext)
    

    useEffect(() => {
        obtenerProyectos() // la funcion del state ya va venir cargada con la informacion
    },[]) // solo se va cargar cuando el componente se cargue el componente

    return ( 

        <ul className="listado-proyectos">
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
                                key={proyecto.id}
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