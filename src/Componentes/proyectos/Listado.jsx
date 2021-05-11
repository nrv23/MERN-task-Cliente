import React from 'react'
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    const listaProyectos = [];

    return ( 

        <ul className="listado-proyectos">
            {
                listaProyectos.length === 0 ? 
                    ( <li className="proyecto">No hay proyectos</li>)
                : listaProyectos.map(proyecto => (
                    <Proyecto 
                        proyecto = {proyecto}
                    />
                ))
            }
    </ul>
     );
}
 
export default ListadoProyectos;