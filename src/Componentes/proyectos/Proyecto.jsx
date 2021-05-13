import React,{useContext} from 'react'
import ProyectoContext from '../../context/Proyectos/proyectoContext';
import TareaContext from '../../context/Tareas/tareaContext';


const Proyecto = ({proyecto}) => {

    const {selecccionarProyecto} = useContext(ProyectoContext);
    const {obtenerTareasPorIdProyecto} = useContext(TareaContext);

    const cargaProyecto = proyecto => {
        selecccionarProyecto(proyecto);
        obtenerTareasPorIdProyecto(proyecto.id)
    }
    return ( 

        <li> 
            <button
                type="button"
                className="btn btn-blank"
                onClick={()=>cargaProyecto(proyecto)}
            >{proyecto.nombre}</button> 
        </li>
     );
}
 
export default Proyecto;