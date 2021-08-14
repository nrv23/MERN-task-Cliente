import React, {useContext,useState,useEffect} from 'react'
import alertaContext from '../../context/alertas/alertaContext';
import ProyectoContext from '../../context/Proyectos/proyectoContext';
import TareaContext from '../../context/Tareas/tareaContext';
import Error from '../error/Error';

const FormTarea = () => {

    const {proyectoActual} = useContext(ProyectoContext);
    const {agregarTarea,errorTarea,mostrarError,obtenerTareasPorIdProyecto,tareaActual,actualizarTarea,limpiarTareaSeleccionada} = useContext(TareaContext);
    const {mostrarAlerta,alertaState} = useContext(alertaContext);
    const [tarea,guardarTarea] = useState({
        id:'',
        nombre:'',
        proyectoId: ''
    })

    const {nombre} = tarea;

    useEffect(() => {

        if(tareaActual){
            guardarTarea({
                _id: tareaActual._id,
                nombre: tareaActual.nombre,
                proyectoId: tareaActual.proyectoId 
            })
        }
    },[tareaActual]);
    
    const nuevaTarea = e => {
        e.preventDefault();

       
        if(nombre.trim() === '' ){
            mostrarAlerta('El nombre es requerido','alerta-error');
            return;
        }
        

       // tarea.id = Date.now();
        tarea.proyectoId = proyectoActual._id;
        //tarea.estado = false;
        
        agregarTarea(tarea);
        mostrarError(false);
        guardarTarea({
            _id: '',
            nombre: '',
            proyectoId: ''
        })
        limpiarTareaSeleccionada();
        
        obtenerTareasPorIdProyecto(proyectoActual._id)
    }

    const actualizarState = ({target:{name,value}}) => {

        guardarTarea({
            ...tarea,
            [name]:value
        })
    }

    const actualizarRegistro = e => {
        
        e.preventDefault();
        if(nombre.trim() === '' ){
            mostrarAlerta('El nombre es requerido','alerta-error');
            return;
        }
        actualizarTarea(tarea)
        obtenerTareasPorIdProyecto(proyectoActual._id)
        limpiarTareaSeleccionada();
        guardarTarea({
            _id:'',
            nombre:'',
            proyectoId: ''
        })
    }
    return ( 
        proyectoActual ?

        <div className="formulario">
            { alertaState.alerta  ?<div className={`alerta ${alertaState.alerta .categoria}`}>{alertaState.alerta .msg}</div>: null}
            <form
                onSubmit={tareaActual?actualizarRegistro :nuevaTarea}
            >
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="nombre"
                        value={nombre}
                        onChange={actualizarState}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        value={tareaActual? "Actualizar tarea": 'Agregar Tarea'} 
                        type="submit" 
                        className="btn btn-primario btn-submit btn-block"
                    />
                </div>
            </form>
        </div>: null
     );
}
 
export default FormTarea;