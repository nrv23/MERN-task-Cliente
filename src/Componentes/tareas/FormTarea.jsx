import React from 'react'

const FormTarea = () => {
    return ( 
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
        </div>
     );
}
 
export default FormTarea;