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
            return {
                ...state,
                tareaState: action.payload
            }
        case NUEVA_TAREA:
            return {
                ...state,
                tareaState: [...state.tareaState,action.payload]
            }
        case ERROR_TAREA:
            return {
                ...state,
                errorTarea: action.payload
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareaState: state.tareaState.filter(tarea => tarea._id !== action.payload)
            }
        case MODIFICAR_ESTADO_TAREA: 
            return {
                ...state,
                tareaState: state.tareaState.map(tarea => tarea._id === action.payload._id ? action.payload: tarea )
            }
        case TAREA_ACTUAL:
            return{
                ...state,
                tareaActual: state.tareaState.filter(({_id}) => _id === action.payload)[0]
            }
        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareaState: state.tareaState.map(tarea =>{
                    return tarea._id === action.payload._id ? action.payload: tarea
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