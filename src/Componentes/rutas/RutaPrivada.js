// high order component es un componente que carga otro componente de forma condicional
import React, {useContext,useEffect} from 'react';
import { Route,Redirect } from 'react-router-dom';
import authContext from '../../context/Auth/authContext';

const RutaPrivada = ({component: Component, ...props}) => {

    const {autenticado,obtenerUsuarioAutenticado,cargando} = useContext(authContext);
    useEffect(() => {
        obtenerUsuarioAutenticado();    
    },[])
    return ( 

        <Route
            {...props} render = {props => !autenticado && !cargando? 
                <Redirect to ="/" />    
            : 
                <Component {...props} />
            }
        />
     );
}
 
export default RutaPrivada;