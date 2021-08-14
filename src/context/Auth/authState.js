import react,{useReducer} from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/Token';

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
        mensaje: null,
        cargando: true
    }

    const [state,dispatch] = useReducer(authReducer,initialState);

    const registrarUsuario = async obj => {

        try {
            const {data} = await clienteAxios.post('/usuario',obj,{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            localStorage.setItem("token", data.token);
            obtenerUsuarioAutenticado();
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

    const obtenerUsuarioAutenticado = async () => {
        try {

            const token = localStorage.getItem("token");

            if(token) {
                tokenAuth(token);
                /*
                const respuesta = await clienteAxios.get('/usuario/',{
                    headers: {
                        'x-auth-token': token
                    }
                })
                */

                const respuesta = await clienteAxios.get('/usuario/');
                dispatch({
                    type: OBTENER_USUARIO,
                    payload: respuesta.data
                })
            }
        } catch(err) {
            localStorage.removeItem("token");
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    const iniciarSesion = async datos => {

        try {

            const {data} = await clienteAxios.post('/login/',datos,{
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            localStorage.setItem("token", data.token);
            
            dispatch({
                type: LOGIN_EXITOSO
            });

            obtenerUsuarioAutenticado();
            
        } catch (error) {
            console.log(error)
            const alerta = {
                msg: error.response.data.msg,
                categoria : 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        dispatch({
            type: CERRAR_SESION
        })
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario,
                iniciarSesion,
                obtenerUsuarioAutenticado,
                cerrarSesion
            }}
        >
            {props.children}
        </authContext.Provider>
    )

}

export default AuthState;