import { createContext } from 'react';
//crear el context

const ProyectoContext = createContext(); // esta funcion crea el context


export default ProyectoContext; // esto es lo que va estar disponible para usarse en los demas componentes

//el context es el que se debe consumir para poder usar la informacion que viene en el provider