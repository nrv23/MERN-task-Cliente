import React,{ useReducer } from "react";
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
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
const TareaState = props => { // los props son lo que se envian al provider del context para poder habilitar la informacion del
    // context a los componentes que rodea

    const initialState = {
        tareas: [],
        tareaState: null,
        errorTarea: null,
        tareaActual: null
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

    const eliminarTarea = idtarea => {

        dispatch({
            type: ELIMINAR_TAREA,
            payload: idtarea
        })
    }

    const modificarEstadoTarea = tarea => {

        dispatch({
            type: MODIFICAR_ESTADO_TAREA,
            payload: tarea
        })
    }

    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    const obtenerTareaActual = id => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: id
        })
    }
    const limpiarTareaSeleccionada = () => {

        dispatch({
            type: LIMPIAR_TAREA_ACTUAL
        })
    }
    return (
        <TareaContext.Provider
            value={{
                //state
                tareas: state.tareas,
                tareaState: state.tareaState,
                errorTarea: state.errorTarea,
                tareaActual: state.tareaActual,
                //funciones del state
                obtenerTareasPorIdProyecto,
                agregarTarea,
                mostrarError,
                eliminarTarea,
                modificarEstadoTarea,
                actualizarTarea,
                obtenerTareaActual,
                limpiarTareaSeleccionada
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )

}


export default TareaState;