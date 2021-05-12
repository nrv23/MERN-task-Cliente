import React,{useContext,useEffect} from 'react'
import ProyectoContext from '../../context/Proyectos/proyectoContext';
import Proyecto from './Proyecto';

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
                : proyectos.map(proyecto => (
                    <Proyecto 
                        key={proyecto.id}
                        proyecto = {proyecto}
                    />
                ))
            }
    </ul>
     );
}
 
export default ListadoProyectos;