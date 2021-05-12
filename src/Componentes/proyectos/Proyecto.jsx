import React,{useContext} from 'react'
import ProyectoContext from '../../context/Proyectos/proyectoContext';


const Proyecto = ({proyecto}) => {

    const {selecccionarProyecto} = useContext(ProyectoContext);

    return ( 

        <li> 
            <button
                type="button"
                className="btn btn-blank"
                onClick={()=>selecccionarProyecto(proyecto)}
            >{proyecto.nombre}</button> 
        </li>
     );
}
 
export default Proyecto;