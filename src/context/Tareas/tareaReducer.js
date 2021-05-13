import {
    TAREAS_PROYECTO,
    NUEVA_TAREA,
    ERROR_TAREA
} from '../../types';

export default (state,action) => {

    switch(action.type){
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareaState: state.tareas.filter(({idproyecto}) => idproyecto === action.payload)
            }
        case NUEVA_TAREA:
            return {
                ...state,
                tareas: [...state.tareas,action.payload],
                tareaState: [...state.tareaState,action.payload]
            }
        case ERROR_TAREA:
            return {
                ...state,
                errorTarea: action.payload
            }
        default:
            return state;
    }

}