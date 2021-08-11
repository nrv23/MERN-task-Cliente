import React,{useContext,useEffect} from 'react'
import authContext from '../../context/Auth/authContext';

const NavBar = () => {

    const auth =useContext(authContext);
    console.log(auth)
    useEffect(() => {
        auth.obtenerUsuarioAutenticado(); 
       
    }, [])

    return ( 
        <header className="app-header">
           
            {auth.usuario ?  <p className="nombre-usuario"> Hola <span>{auth.usuario.nombre}</span></p>: null}
            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={auth.cerrarSesion}
                >
                    Cerrar Sesión
                </button>
            </nav>
        </header>
     );
}
 
export default NavBar;