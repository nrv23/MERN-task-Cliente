import React,{useState} from 'react'
import { Link } from 'react-router-dom';
//Link es un componente que se utiliza en vez de la etiqueta a,
const Registrar = () => {

    const [login,guardarLogin] = useState({
        email: '',
        password: '',
        username: '',
        confirm_password: ''
    });

    const [error, guardarError] = useState(false);

    const {email,password,username,confirm_password} = login;

    let mensaje= '';

    const actualizarState = ({target: {name,value}}) => {
        
        guardarLogin({
            ...login,
            [name]: value
        })
    }

    const registrarCuenta = e => {
        e.preventDefault();

        //validaciones antes de enviar la informacion al action

        if(email.trim() === '' || username.trim() === '' || password.trim() === '' || confirm_password.trim()=== ''){
            guardarError(true);
            mensaje='Todos los campos son obligatorios';
            return;
        } else if(password.trim().length < 6){
            guardarError(true);
            mensaje='La contraseña debe contener al menos 6 carácteres';
            return;
        } else if(password.trim() !== confirm_password.trim() ){
            guardarError(true);
            mensaje='Las contraseñas no coinciden';
            return;
        }

        guardarError(false);

        //password minimo de 6 caracteres

        // no pueden ir campos vacios

        //los dos passwords deben ser iguales
    }

    return ( 

       <div className="form-usuario">
           <div className="contenedor-form sombra-dark">
               <h1>Nueva Cuenta</h1>
               <form
                onSubmit={registrarCuenta}
               >

                <div className="campo-form">
                    <label htmlFor="username">Usuario</label>
                    <input type="text" name="username" id="username"
                        placeholder="Tu usuario"
                        value={username}
                        onChange={actualizarState}
                    />
                </div>

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