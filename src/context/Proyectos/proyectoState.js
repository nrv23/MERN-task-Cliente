import React,{useReducer} from 'react';
import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO,
    LISTADO_PROYECTOS,
    NUEVO_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL

} from '../../types';

// se crea un state inicial, ahora la api de context tiene los reducer que vienen  a sustituir a redux

const ProyectoState = props => {

    const proyectos = [];

    //desde el state se va a hacer el request al servidor

    const initialState = { // el state inicial para redux y para contex api reducer siempre va ser un objeto
        proyectos: [], // este arrya va contener los prouyectos almacenados en la bd
        formulario: false, //esto para mostrar o no el input de crear un nuevo proyecto
        errorForm: false,
        proyectoActual: null
    }
    console.log(initialState)
    //crear el dispatch para ejecutar las funciones
    //useReducer(proyectoReducer,initialState) -> al useReducer se le envia como parametro el reducer y un state inicial
    const [state,dispatch] =  useReducer(proyectoReducer,initialState);

    console.log(state)

    //crear funcion para ejeuctar el dispatch

    const mostrarFormulario = (estado) => { // esta funcion se envia por el provider para ejecutar el dispatch

        dispatch({
            type: FORMULARIO_PROYECTO, // este type se ejecuta en el reducer para saber qyue funcion ejecutar
            payload: estado
        })
    }

    // se van a crear las funciones para generar el crud de proyectos
    // la variable state es el state global que devuelve el usereducer y el dispatch ejecuta las funciones

    //obtener los proyectos

    const obtenerProyectos = () => {

        dispatch({
            type: LISTADO_PROYECTOS,
            payload: proyectos
        })
    }

    const agregarProyecto = proyecto => {
            proyecto.id = Date.now();
        dispatch({
            type: NUEVO_PROYECTO,
            payload: proyecto
        })
    }

    const mostrarError = estado => {
        dispatch({
            type: VALIDAR_FORMULARIO,
            payload: estado
        })
    }

    const selecccionarProyecto = proyecto => {

        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyecto
        })
    }

    //retornar el provider
    
    return (
        <ProyectoContext.Provider
            value={{ // en esta parte es donde va ser consumible la informacion que se envie aqui
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorForm: state.errorForm,
                proyectoActual: state.proyectoActual,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                selecccionarProyecto
            }}
        >
        {
            props.children // los componentes que eeste provider rodee, puedan consumir la informacion que trae el provider
        }
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;