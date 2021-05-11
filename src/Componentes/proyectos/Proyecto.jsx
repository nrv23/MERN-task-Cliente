import React from 'react'


const Proyecto = ({proyecto:{nombre,id}}) => {
    return ( 

        <li> 
            <button
                type="button"
                className="btn btn-blank"
            >{nombre}</button> 
        </li>
     );
}
 
export default Proyecto;