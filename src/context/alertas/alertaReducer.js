
//se importan los types para que se compra con lo que viene en el action.type

import {

    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../../types';

export default (state,action) => {

    switch(action.type) {

        case MOSTRAR_ALERTA:

            return {

                alerta: action.payload // aqui se van a cargar todas las alertas cuando se intente agregar un usuario
            }

        
        case OCULTAR_ALERTA:

            return {

                alerta: null
            }


        default: 
            return state;
    }
}