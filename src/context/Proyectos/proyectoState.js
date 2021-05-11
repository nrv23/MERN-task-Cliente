import React,{useReducer} from 'react';
import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO

} from '../../types';

// se crea un state inicial, ahora la api de context tiene los reducer que vienen  a sustituir a redux

const ProyectoState = props => {

    const initialState = { // el state inicial para redux y para contex api reducer siempre va ser un objeto

        formulario: false, //esto para mostrar o no el input de crear un nuevo proyecto

    }

    //crear el dispatch para ejecutar las funciones
    //useReducer(proyectoReducer,initialState) -> al useReducer se le envia como parametro el reducer y un state inicial
    const [state,dispatch] =  useReducer(proyectoReducer,initialState)

    //crear funcion para ejeuctar el dispatch

    const mostrarFormulario = () => { // esta funcion se envia por el provider para ejecutar el dispatch

        dispatch({
            type: FORMULARIO_PROYECTO // este type se ejecuta en el reducer para saber qyue funcion ejecutar
        })
    }

    // se van a crear las funciones para generar el crud de proyectos
    // la variable state es el state global que devuelve el usereducer y el dispatch ejecuta las funciones



    //retornar el provider

    return (
        <ProyectoContext.Provider
            value={{ // en esta parte es donde va ser consumible la informacion que se envie aqui
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
        {
            props.children // los componentes que eeste provider rodee, puedan consumir la informacion que trae el provider
        }
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;