import React, {useContext} from 'react'
import ProyectoContext from '../../context/Proyectos/proyectoContext';

const FormTarea = () => {

    const {proyectoActual} = useContext(ProyectoContext);

    return ( 
        proyectoActual ?

        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="nombre"
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