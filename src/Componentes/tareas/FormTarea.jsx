import React, {useContext,useState} from 'react'
import ProyectoContext from '../../context/Proyectos/proyectoContext';
import TareaContext from '../../context/Tareas/tareaContext';
import Error from '../error/Error';

const FormTarea = () => {

    const {proyectoActual} = useContext(ProyectoContext);
    const {agregarTarea,errorTarea,mostrarError} = useContext(TareaContext);

    const [tarea,guardarTarea] = useState({
        id:'',
        nombre:'',
        idproyecto: ''
    })

    const {nombre} = tarea;
    const nuevaTarea = e => {
        e.preventDefault();

        if(nombre === ''){
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
    }

    const actualizarState = ({target:{name,value}}) => {

        guardarTarea({
            ...tarea,
            [name]:value
        })
    }
    return ( 
        proyectoActual ?

        <div className="formulario">
            {
                errorTarea?
                    <Error mensaje="El nombre de la tarea es requerido" />: null
            }
            <form
                onSubmit={nuevaTarea}
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
                        value="Agregar tarea" 
                        type="submit" 
                        className="btn btn-primario btn-submit btn-block"
                    />
                </div>
            </form>
        </div>: null
     );
}
 
export default FormTarea;