import react,{ useReducer } from "react";
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import {
    TAREAS_PROYECTO,
    NUEVA_TAREA,
    ERROR_TAREA
} from '../../types';
const TareaState = props => { // los props son lo que se envian al provider del context para poder habilitar la informacion del
    // context a los componentes que rodea

    const initialState = {
        tareas: [],
        tareaState: null,
        errorTarea: null
    }

    const [state,dispatch] = useReducer(tareaReducer,initialState); // retorna el state actual


    const obtenerTareasPorIdProyecto = idproyecto => {

        dispatch({
            type: TAREAS_PROYECTO,
            payload: idproyecto
        })
    }

    const agregarTarea = (tarea) => {
        dispatch({
            type: NUEVA_TAREA,
            payload: tarea
        })
    }
    
    const mostrarError = estado => {

        dispatch({
            type: ERROR_TAREA,
            payload: estado
        })
    }
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareaState: state.tareaState,
                errorTarea: state.errorTarea,
                obtenerTareasPorIdProyecto,
                agregarTarea,
                mostrarError
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )

}


export default TareaState;