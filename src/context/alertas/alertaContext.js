import { createContext } from "react/cjs/react.development";

const alertaContext = createContext(); // este context se exporta
// se llama en el state y dentro del provider del context, exporta todas las funciones y state global que va guardar 
// el state del context 

export default alertaContext;
