import './App.css'
//import { Navigate }  from "react-router-dom"
//import PageLogin  from "../components/pageLogin";

import Pages from "./components/Roots"
import Login from './components/login'

function App() {
  return(
    <div>
      <Pages/>
      <Login/>
      <h1>Presione a su preferencia:</h1>
      <button onClick={Login}>Registrase</button>
      <button>Loguearse</button>
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

