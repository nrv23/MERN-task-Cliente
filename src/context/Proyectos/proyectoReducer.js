//importar todos lso types para mapear el action.type y saber que se va ejecutar

import {
    FORMULARIO_PROYECTO,
    LISTADO_PROYECTOS,
    NUEVO_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types'


export default (state,action) => { // el reducer de context funciona igual al reducer de redux, toma un state y un action para despues 
    //enviarlos a state principal y que se ejeuicte la funcion

    //depediendo del type que envie, se usa el disptach para ejecutar lñas funciones dependiendo del case del switch del reducer
    switch(action.type){

        case FORMULARIO_PROYECTO:
            return {
                ...state, // siempre se debe retornar una copia actual del state
                formulario: action.payload //edito la propiedad del state actual, en este caso paso a true el valor de la 
                //propiedad formulario
                // es como usar el target.name y target.value en un onchange de un formulario para ir actualizando el state
                // de un formulario
            }
        case LISTADO_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }
        case NUEVO_PROYECTO:
            return {
                ...state,//obtener una copia del state global de la apĺicacion
                proyectos: [...state.proyectos,action.payload]
                /*
                    [...state.proyectos,action.payload]

                    como el state de proyectos es un array entonces se toma el state completo de proyectos, y luego 
                    se le agrega el nuevo proyecto al state de proyectos y se le asgina todo el state de proyectos
                    al array de proyectos dentro del state global
                */
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorForm: action.payload
            } 
        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyectoActual: action.payload
            } 
        case ELIMINAR_PROYECTO: 
            return {
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
                proyectoActual: null,

            }
        default:
            return state; // en el default siempre se retorna el state por si el switch no cumple ningun caso
    }
}