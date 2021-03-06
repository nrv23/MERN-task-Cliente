import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

export default (state,action) => {
    switch(action.type){
       
        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO: 
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            }

        case REGISTRO_ERROR: 
            return {
                ...state,
                token: null,
                mensaje: action.payload,
                cargando: false
            }
        case LOGIN_ERROR:
            return {
                ...state,
                token: null,
                mensaje: action.payload,
                cargando: false
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                usuario: action.payload.usuario,
                autenticado: true,
                cargando: false
            }
        case CERRAR_SESION: 
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null
            }
        default:
            return state;
    }

}