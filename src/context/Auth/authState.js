import react,{useReducer} from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import clienteAxios from '../../config/axios';

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';


const AuthState = props => {

    const initialState = {
        token: localStorage.getItem("token"), // el token se va guardar en el state
        autenticado: null, // saber si el usuario va estar autenticado
        usuario: null, // informacion del usuario logueado
        mensaje: null
    }

    const [state,dispatch] = useReducer(authReducer,initialState);

    const registrarUsuario = async obj => {

        try {
            const {data} = await clienteAxios.post('/usuario',obj,{
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: data
            });
            
        } catch (error) {
            //console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria : 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    const obtenerUsuarioAutenticado = () => {
        
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario
            }}
        >
            {props.children}
        </authContext.Provider>
    )

}

export default AuthState;