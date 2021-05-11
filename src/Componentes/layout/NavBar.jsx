import React from 'react'

const NavBar = (usuario) => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario"> Hola <span>Natanaiel</span></p>
            <nav className="nav-principal">
                <a href="#!">Cerrar</a>
            </nav>
        </header>
     );
}
 
export default NavBar;