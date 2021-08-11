import React,{useContext, useEffect} from 'react'
import authContext from '../../context/Auth/authContext';
import NavBar from '../layout/NavBar';
import Sidebar from '../layout/Sidebar';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';

//pagina principal
const Proyectos = () => {

    const {obtenerUsuarioAutenticado} =useContext(authContext);

    useEffect(() => {
        obtenerUsuarioAutenticado(); 
       
    }, [])

    return ( 
     
            
        <div className="contenedor-app">
            
            <Sidebar />
            <div className="seccion-principal">
                <NavBar
                    
                />
                <main>
                    <FormTarea/>
                    <div className="contenedor-tareas">
                        <ListadoTareas/>
                    </div>
                </main>
            </div>
        </div>
    
     );
}
 
export default Proyectos;