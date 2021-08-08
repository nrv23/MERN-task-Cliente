import React, {useContext,useState,useEffect} from 'react'
import ProyectoContext from '../../context/Proyectos/proyectoContext';
import TareaContext from '../../context/Tareas/tareaContext';
import Error from '../error/Error';

const FormTarea = () => {

    const {proyectoActual} = useContext(ProyectoContext);
    const {agregarTarea,errorTarea,mostrarError,obtenerTareasPorIdProyecto,tareaActual,actualizarTarea,limpiarTareaSeleccionada} = useContext(TareaContext);

    const [tarea,guardarTarea] = useState({
        id:'',
        nombre:'',
        idproyecto: ''
    })

    const {nombre} = tarea;

    useEffect(() => {

        if(tareaActual){
            guardarTarea({
                id: tareaActual.id,
                nombre: tareaActual.nombre,
                idproyecto: tareaActual.idproyecto 
            })
        }
    },[tareaActual]);
    
    const nuevaTarea = e => {
        e.preventDefault();

        if(nombre.trim() === ''){
            mostrarError(true);
            return;
        }

        tarea.id = Date.now();
        tarea.idproyecto = proyectoActual.id;
        tarea.estado = false;
        
        agregarTarea(tarea);
        mostrarError(false);
        guardarTarea({
            id: '',
            nombre: '',
            idproyecto: ''
        })

        
        obtenerTareasPorIdProyecto(proyectoActual.id)
    }

    const actualizarState = ({target:{name,value}}) => {

        guardarTarea({
            ...tarea,
            [name]:value
        })
    }

    const actualizarRegistro = e => {
        
        e.preventDefault();
        console.log()
        actualizarTarea(tarea)
        obtenerTareasPorIdProyecto(proyectoActual.id)
        limpiarTareaSeleccionada();
        guardarTarea({
            id:'',
            nombre:'',
            idproyecto: ''
        })
    }
    return ( 
        proyectoActual ?

        <div className="formulario">
            
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
            {
                errorTarea?
                    <Error mensaje="El nombre de la tarea es requerido" />: null
            }
        </div>: null
     );
}
 
export default FormTarea;