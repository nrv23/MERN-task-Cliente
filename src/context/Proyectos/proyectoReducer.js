//importar todos lso types para mapear el action.type y saber que se va ejecutar

import {
    FORMULARIO_PROYECTO

} from '../../types'


export default (state,action) => { // el reducer de context funciona igual al reducer de redux, toma un state y un action para despues 
    //enviarlos a state principal y que se ejeuicte la funcion

    //depediendo del type que envie, se usa el disptach para ejecutar lñas funciones dependiendo del case del switch del reducer
    switch(action.type){

        case FORMULARIO_PROYECTO:
            return {
                ...state, // siempre se debe retornar una copia actual del state
                formulario: true //edito la propiedad del state actual, en este caso paso a true el valor de la 
                //propiedad formulario
                // es como usar el target.name y target.value en un onchange de un formulario para ir actualizando el state
                // de un formulario
            }

            break;
        default:
            return state; // en el default siempre se retorna el state por si el switch no cumple ningun caso
    }
}