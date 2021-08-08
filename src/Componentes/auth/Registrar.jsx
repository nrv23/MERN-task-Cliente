import React,{useState,useContext,useEffect} from 'react'
import { Link } from 'react-router-dom';
import alertaContext from '../../context/alertas/alertaContext';
import authContext from '../../context/Auth/authContext';

//Link es un componente que se utiliza en vez de la etiqueta a, registrarUsuario
const Registrar = (props) => {

    const {mostrarAlerta,alertaState} = useContext(alertaContext); // el context carga todo lo que el provider exporta desde el 
    //archivo que carga el state y las funciones del state
    const {registrarUsuario,autenticado,mensaje} =useContext(authContext)
    const [login,guardarLogin] = useState({
        email: '',
        password: '',
        nombre: '',
        confirm_password: ''
    });
    const {email,password,nombre,confirm_password} = login;

    const actualizarState = ({target: {name,value}}) => {
        
        guardarLogin({
            ...login,
            [name]: value
        })
    }

    //En caso de que el usuario se haya registrado, autenticado o duplicado

    useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos')
        }

        else if(mensaje) {
            mostrarAlerta(mensaje.msg,mensaje.categoria);
        }
    }, [autenticado,mensaje,props.history])

    const registrarCuenta = e => {
        e.preventDefault();

        //validaciones antes de enviar la informacion al action

        if(email.trim() === '' || nombre.trim() === '' || password.trim() === '' || confirm_password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return;
        } 

        //password minimo de 6 caracteres
        else if(password.trim().length < 6) {
            mostrarAlerta('El password debe contener al menos 6 caracteres','alerta-error');
            return;
        }

        else if(password.trim() !== confirm_password.trim() ){
            mostrarAlerta('Las contraseñas no coinciden','alerta-error');
            return;
        }
        // no pueden ir campos vacios

        //los dos passwords deben ser iguales

        registrarUsuario({email,password,nombre});
    }

    return ( 

       <div className="form-usuario">
            { alertaState.alerta  ?<div className={`alerta ${alertaState.alerta .categoria}`}>{alertaState.alerta .msg}</div>: null}
           <div className="contenedor-form sombra-dark">
               <h1>Nueva Cuenta</h1>
               <form
                onSubmit={registrarCuenta}
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
                    <label htmlFor="nombre">Usuario</label>
                    <input type="text" name="nombre" id="nombre"
                        placeholder="Tu Usuario"
                        value={nombre}
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
                    <label htmlFor="confirm_password">Confirmar Password</label>
                    <input type="password" name="confirm_password" id="confirm_password"
                        placeholder="Confirmar password"
                        value={confirm_password}
                        onChange={actualizarState}
                    />
                </div>
                <div className="campo-form">
                    <input type="submit" value="Registrar" className="btn btn-primario btn-block"/>
                </div>
               </form>

               <Link to={'/'} className="enlace-cuenta">
                   {/** la propiedad to del componente Link es la ruta donde va redirigir y siempre se debe poner entre corchetes
                    * 
                    * porque es codigo de react
                    */}
                    Iniciar sesión
               </Link>
           </div>
       </div> 
    );
}
 
export default Registrar;