import React ,{useContext} from 'react'
import TareaContext from '../../context/Tareas/tareaContext';

const Tarea = ({tarea}) => {
    console.log({tarea})
    const {nombre,estado,_id,idproyecto} = tarea;
    const {eliminarTarea,obtenerTareasPorIdProyecto,modificarEstadoTarea,obtenerTareaActual} = useContext(TareaContext);

    const borrarTarea = () => {

        eliminarTarea(_id);
       // obtenerTareasPorIdProyecto(idproyecto);
    }

    const estadoTarea = obj => {

        if(obj.estado){
            obj.estado = false;
        } else {
            obj.estado = true;
            
        }

        modificarEstadoTarea(tarea);
       obtenerTareasPorIdProyecto(tarea.proyectoId)
    }
    return ( 

        <li className="tarea sombra">
            <p>{nombre}</p>

            <div className="estado">
                {estado? (
                    <button
                        type="button"
                        className="completo"
                        onClick={() => estadoTarea(tarea)}
                    >
                        Completo
                    </button>
                ): 
                
                (
                    <button
                        type="button"
                        className="incompleto"
                        onClick={() => estadoTarea(tarea)}
                    >
                        Incompleto
                    </button>
                )
                }
            </div>

            <div className="acciones">
                <button 
                    type="button"
                    className="btn btn-primario"
                    onClick={() => obtenerTareaActual(tarea._id)}
                >
                    Editar
                </button>

                <button 
                    onClick={borrarTarea }
                    type="button"
                    className="btn btn-secundario"
                >
                    Eliminar
                </button>
            </div>
        </li>

     );
}
 
export default Tarea;