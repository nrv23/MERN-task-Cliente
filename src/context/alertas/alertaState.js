import react, {useReducer} from 'react';
import alertaReducer from './alertaReducer';
import alertaContext from './alertaContext';
import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../../types';

const AlertaState = props => {


    const initialState = {
        alerta: null
    }

    const [state,dispatch] = useReducer(alertaReducer,initialState);

    const mostrarAlerta = (msg,categoria) => {

        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });

        //en la misma funcion a los 5 segundos ocultar la alerta
       setTimeout(() => {
        dispatch({
            type: OCULTAR_ALERTA,
        });
       }, 5000);
    }

    return (

        <alertaContext.Provider
        value={{
                alertaState: state,
                mostrarAlerta
            }}
        >
            {props.children} {/* Habilitar el context en toda la aplicacion */}
        </alertaContext.Provider>
    )
}

export default AlertaState;