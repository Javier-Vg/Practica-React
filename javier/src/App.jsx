//import {useState} from 'react';

import { useState } from 'react'
import './App.css'


function App() {

  const [msj,WelcomeMsj]= useState("Ingrese su usuario")

  const [correoLogin,setCorreoLogin]= useState()
  const [correoLoginContra,setCorreoLoginContra]= useState()

  const [correoRegister,setCorreoRegister]= useState()
  const [correoContraLogin,setCorreoContraRegister]= useState()
  const [correoUsuario,setCorreoUsuario]= useState()

  function cargarLogin() {
  
    console.log(correoLogin);
    //console.log(correoLogin);
    let array = [correoLogin,correoLoginContra]
    localStorage.setItem("userActive",array )
    WelcomeMsj(`Bienvenido `+correoLogin)
  }

  function cargarRegister() {

    let array = [correoRegister, correoContraLogin, correoUsuario];
    localStorage.setItem("registros", array) || [];
    
  }


  return ( 
      <div className='divL'>
          <h2>Ingrese su correo:</h2>
          <input id="correoLogin" type="text" value={correoLogin} onChange={(e)=>{setCorreoLogin(e.target.value)}} />
          <br/>
          <br/>
          <h2>Ingrese la contraseña de su correo:</h2>
          <input id="contraLogin" type="text" value={correoLoginContra} onChange={(e)=>{setCorreoLoginContra(e.target.value)}}/>
          <br/>
          <br/>
          <br />
          <button id="btnLoginEnvio" onClick={cargarLogin} >Login</button>
          <div className='divR'>
            <h2>Nombre de usuario:</h2>
            <input id="nomUsuario" type="text" value={correoUsuario} onChange={(e)=>{setCorreoUsuario(e.target.value)}} />
            <br/>
            <br/>
            <h2>Ingrese su nuevo correo:</h2>
            <input id="correoRegister" type="text" value={correoRegister} onChange={(e)=>{setCorreoRegister(e.target.value)}} />
            <br/>
            <br/>
            <h2>Ingrese la contraseña para su nuevo correo:</h2>
            <input id="contraRegister" type="text" value={correoContraLogin} onChange={(e)=>{setCorreoContraRegister(e.target.value)}} />
            <br/>
            <br/>
            <button onClick={cargarRegister} id="btnRegisterEnvio">Registrarse</button>
        </div>

        <div>{msj}</div>
      </div>

  )
}

export default App


//  function targetInput(e) {
  
//    console.log(e.target.value);
   
   
//  }

// function status(statuss) {

//   if (statuss.login) {
//     <App estado = "Cerrar sesion" />
    
//    }
// }

// status(estado)

