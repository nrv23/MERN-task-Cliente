import {
    TAREAS_PROYECTO,
    NUEVA_TAREA,
    ERROR_TAREA,
    ELIMINAR_TAREA,
    MODIFICAR_ESTADO_TAREA,
    ACTUALIZAR_TAREA,
    TAREA_ACTUAL,
    LIMPIAR_TAREA_ACTUAL
} from '../../types';

export default (state,action) => {

    

    switch(action.type){
        case TAREAS_PROYECTO:
            console.log(action.payload)
            return {
                ...state,
                tareaState: state.tareas.filter(tarea => {
                    console.log(tarea);
                    return tarea.idproyecto === action.payload
                })
            }
        case NUEVA_TAREA:
            return {
                ...state,
                tareas: [...state.tareas,action.payload]
            }
        case ERROR_TAREA:
            return {
                ...state,
                errorTarea: action.payload
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(({id}) => id !== action.payload)
            }
        case MODIFICAR_ESTADO_TAREA: 
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload: tarea )
            }
        case TAREA_ACTUAL:
            return{
                ...state,
                tareaActual: state.tareas.filter(({id}) => id === action.payload)[0]
            }
        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea =>{
                    return tarea.id === action.payload.id ? action.payload: tarea
                } )
            }
        case LIMPIAR_TAREA_ACTUAL: {

            return {
                ...state,
                tareaActual: null
            }
        }
        default:
            return state;
    }

}