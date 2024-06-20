//import {useState} from 'react';

import { useState } from 'react'
import './App.css'
import { getUser } from './components/getUser'
import { postUser } from './components/postUser'

function App() { 

  let [correoRegister,setCorreoRegister]= useState()
  let [correoContraRegister,setCorreoContraRegister]= useState()
  let [correoUsuario,setCorreoUsuario]= useState()

  let [correoLogin,setCorreoLogin]= useState()
  let [correoLoginContra,setCorreoLoginContra]= useState()

  let [LogReg,taste]= useState(nav)

  let [testeoLogin, setLog] = useState(0)

  let [msj,WelcomeMsj] = useState("Inicie sesion")

  async function cargarLogin() {
  
    let usuarios = await getUser()
    usuarios.forEach(email => {
      if (email.correo == correoLogin && email.contra == correoLoginContra) {
        alert("Se encontro el correo exitosamente")
        localStorage.setItem("userActive",correoLogin )
        setLog(testeoLogin = 0)










        


        return(
          <UsuarioPage recibimiento={correoLogin}/>
        )
      }else{
        setLog(testeoLogin = 1)
        console.log(("que"));
      }
    })

     if (testeoLogin > 0) {
       alert("Alguno de los dos datos fueron invalidados")
     }
    WelcomeMsj(msj = "Bienvenido")
  }

  function login() {
    
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
            <br />
            <button onClick={navReturn}>Volver</button>
  
            <div>{msj ? "Bienvenido usuario" : "Inicie sesion"}</div>
            <div>{msj}</div>
        </div>
    )
  }

  function registros() {

    function cargarRegister() {
      let infoP = {
        correo: correoRegister,
        contra: correoContraRegister,
        usuario: correoUsuario
      }
      postUser(infoP);
    }

    return (
      <div className='divR'>
  
        <h2>Nombre de usuario:</h2>
        <input id="nomUsuario" type="text" value={correoUsuario} onChange={(e)=>{setCorreoUsuario(correoUsuario = e.target.value)}} />
        <br/>
        <br/>
        <h2>Ingrese su nuevo correo:</h2>
        <input id="correoRegister" type="text" value={correoRegister} onChange={(e)=>{setCorreoRegister(correoRegister = e.target.value)}} />
        <br/>
        <br/>
        <h2>Ingrese la contraseña para su nuevo correo:</h2>
        <input id="contraRegister" type="text" value={correoContraRegister} onChange={(e)=>{setCorreoContraRegister( correoContraRegister = e.target.value)}} />
        <br/>
        <br/>
        <button onClick={cargarRegister} id="btnRegisterEnvio">Registrarse</button>
        <br />
        <button onClick={navReturn}>Volver</button>
      </div>
    )
  }

  function nav() {
    return(

      <div>
        <h1>Presione a su preferencia:</h1>
        <button onClick={UIRegister}>Registrase</button>
        <button onClick={UILogin}>Loguearse</button>
      </div>

    )
  }

  function UIRegister() {
    return(
      taste(registros)
    )
  }

  function UILogin() {
    return(
      taste(login)
    )
  }

  function navReturn() {
    return(
      taste(nav)
    )
  }

  return(
    LogReg
  )
}

function UsuarioPage( {recibimiento} ) {

  <div>
    <h1>Bienvenido {recibimiento}</h1>
  </div>
}

export {App ,UsuarioPage}
//export  {App, UsuarioPage}



//  function targetInput(e) {
  
//    console.log(e.target.value);
   
   
//  }

// function status(statuss) {

//   if (statuss.login) {
//     <App estado = "Cerrar sesion" />
    
//    }
// }

// status(estado)

