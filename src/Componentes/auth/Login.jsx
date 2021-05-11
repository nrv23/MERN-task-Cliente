import React,{useState} from 'react'
import { Link } from 'react-router-dom';
//Link es un componente que se utiliza en vez de la etiqueta a,
const Login = () => {

    const [login,guardarLogin] = useState({
        email: '',
        password: ''
    });

    const {email,password} = login;

    const actualizarState = ({target: {name,value}}) => {
        
        guardarLogin({
            ...login,
            [name]: value
        })
    }

    const iniciarSesion = e => {
        e.preventDefault();

        console.log("click");
    }

    return ( 

       <div className="form-usuario">
           <div className="contenedor-form sombra-dark">
               <h1>Iniciar Sesión</h1>
               <form
                onSubmit={iniciarSesion}
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