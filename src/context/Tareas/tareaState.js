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
import clienteAxios from '../../config/axios';
const TareaState = props => { // los props son lo que se envian al provider del context para poder habilitar la informacion del
    // context a los componentes que rodea

    const initialState = {
        tareas: [],
        tareaState: null,
        errorTarea: null,
        tareaActual: null
    }

    const [state,dispatch] = useReducer(tareaReducer,initialState); // retorna el state actual


    const obtenerTareasPorIdProyecto = async idproyecto => {

        try {

            const {data:{tareas}} = await clienteAxios.get('/tareas/'+idproyecto);
            dispatch({
                type: TAREAS_PROYECTO,
                payload: tareas
            });

        } catch (error) {
            console.log(error)
        }
    }

    const agregarTarea = async (tarea) => {
        try {
            const respuesta = await clienteAxios.post('/tarea',tarea,{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            dispatch({  
                type: NUEVA_TAREA,
                payload: respuesta.data.tarea
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    const mostrarError = estado => {

        
    }

    const eliminarTarea = async idtarea => {

        try {
            const response = await clienteAxios.delete('/tarea/'+idtarea);
            dispatch({
                type: ELIMINAR_TAREA,
                payload: idtarea
            })
        } catch (error) {
            console.log(error)
        }
    }

    const modificarEstadoTarea = async tarea => {

        try {

            const response = await clienteAxios.patch('/tarea/estado/'+tarea._id,{},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            dispatch({
                type: MODIFICAR_ESTADO_TAREA,
                payload: tarea
            })
        } catch (error) {
            
        }
    }

    const actualizarTarea = async tarea => {

        try {
            const response = await clienteAxios.put('/tarea/'+tarea._id,tarea,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: tarea
            })
        } catch (error) {
            console.log(error)
        }
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