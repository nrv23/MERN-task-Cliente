import React,{useState,useContext,useEffect} from 'react'
import { Link } from 'react-router-dom';
import alertaContext from '../../context/alertas/alertaContext';
import authContext from '../../context/Auth/authContext';

//Link es un componente que se utiliza en vez de la etiqueta a,

const Login = (props) => {

    const [login,guardarLogin] = useState({
        email: '',
        password: ''
    });

    const {iniciarSesion,mensaje,autenticado} = useContext(authContext);
    const {mostrarAlerta,alertaState} = useContext(alertaContext);
    const {email,password} = login;

    const actualizarState = ({target: {name,value}}) => {
        
        guardarLogin({
            ...login,
            [name]: value
        })
    }

    const autenticar = e => {
        e.preventDefault();


        if(email.trim().length === 0 || password.trim().length === 0 ) {
            mostrarAlerta('Todos los campos son requeridos','alerta-error');
            return;
        }

        if(password.trim().length < 6) {
            mostrarAlerta('El password debe contener al menos 6 caracteres','alerta-error');
            return;
        }

        iniciarSesion(login);
    }


    useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos')
        }

        else if(mensaje) {
            mostrarAlerta(mensaje.msg,mensaje.categoria);
        }
    }, [autenticado,mensaje,props.history])

    return ( 

       <div className="form-usuario">
            { alertaState.alerta  ?<div className={`alerta ${alertaState.alerta .categoria}`}>{alertaState.alerta .msg}</div>: null}
           <div className="contenedor-form sombra-dark">
               <h1>Iniciar Sesión</h1>
               <form
                onSubmit={autenticar}
               >

                <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                        placeholder="Tu email"
                        value={email}
                        onChange={actualizarState}
                    />
                </div>

                <div className="campo-form">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                        placeholder="Tu password"
                        value={password}
                        onChange={actualizarState}
                    />
                </div>
                <div className="campo-form">
                    <input type="submit" value="Iniciar Sesión" className="btn btn-primario btn-block"/>
                </div>
               </form>

               <Link to={'/registrar'} className="enlace-cuenta">
                   {/** la propiedad to del componente Link es la ruta donde va redirigir y siempre se debe poner entre corchetes
                    * 
                    * porque es codigo de react
                    */}
                    Nueva Cuenta
               </Link>
           </div>
       </div> 
    );
}
 
export default Login;