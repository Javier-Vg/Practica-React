//import {useState} from 'react';
import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css'
import { getUser } from './components/getUser'
import { postUser } from './components/postUser'
import  Navbar  from "./components/Navbar";
import  Home  from "./components/Home";
import  Contact  from "./components/Contact";
import ProtectedRoute from './components/ProtectedRoute';

function App() { 

  let [correoRegister,setCorreoRegister]= useState()
  let [correoContraRegister,setCorreoContraRegister]= useState()
  let [correoUsuario,setCorreoUsuario]= useState()

  let [correoLogin,setCorreoLogin]= useState()
  let [correoLoginContra,setCorreoLoginContra]= useState()

  let [LogReg,taste]= useState(nav)

  let [testeoLogin, setLog] = useState(0)


  async function cargarLogin() {
    let usuarios = await getUser()
    usuarios.forEach(email => {
      if (email.correo == correoLogin && email.contra == correoLoginContra) {
        alert("Se encontro el correo exitosamente")
        localStorage.setItem("userActive",correoLogin )
        setLog(testeoLogin = 0)

      }else{
        setLog(testeoLogin = 1)
        console.log(("que"));
      }
    })

     if (testeoLogin > 0) {
       alert("Alguno de los dos datos fueron invalidados")
     }
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
    
    <div>
      {LogReg}
      
        <Router>
          <Navbar/>
            <Routes>
              <Route path="/home" element={<Home/>}/>
                <Route element = {<ProtectedRoute Activate={false}/>}>
                  <Route path="/contact" element={<Contact/>}/>
                </Route>
          </Routes>
        </Router>
        

    </div>
  )
}

// function UsuarioPage( {recibimiento} ) {

//   <div>
//     <h1>Bienvenido {recibimiento}</h1>
//   </div>
// }

export default App
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

