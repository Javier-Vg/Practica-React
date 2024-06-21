
import { getUser } from './getUser'
import { useState } from 'react'
import { Navigate } from "react-router-dom";

function Login() {

    let [testeoLogin, setLog] = useState(0)
    let [correoLogin,setCorreoLogin]= useState()
    let [correoLoginContra,setCorreoLoginContra]= useState()

    //value={correoLogin} no esta funcionando, igual con los demas.

    return(
      <div className='divL'>
            <h2>Ingrese su correo:</h2>
            <input id="correoLogin" type="text" value={correoLogin} onChange={(e)=>{setCorreoLogin(correoLogin = e.target.value)}} />
            <br/>
            <br/>
            <h2>Ingrese la contraseña de su correo:</h2>
            <input id="contraLogin" type="text" value={correoLoginContra} onChange={(e)=>{setCorreoLoginContra(correoLoginContra = e.target.value)}}/>
            <br/>
            <br/>
            <br />
            <button id="btnLoginEnvio" onClick={cargarLogin} >Login</button>
            <br/>
        </div>
    )

    async function cargarLogin() {
        let usuarios = await getUser()
        usuarios.forEach(email => {
        if (email.correo == correoLogin && email.contra == correoLoginContra) {
            alert("Se encontro el correo exitosamente");
            localStorage.setItem("userActive",correoLogin );
            setLog(testeoLogin = 0);

            return <Navigate to={"/contact"}/>

        }else{
            setLog(testeoLogin = 1)
            console.log(("que"));
        }
        })

        if (testeoLogin > 0) {
            alert("Alguno de los dos datos fueron invalidados")
        }
    }
}


export default Login