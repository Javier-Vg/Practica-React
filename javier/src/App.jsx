import './App.css'
// {import  MsgProtected  from "../components/MsgProtected";}
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/login'
import Registros from './components/register'
import Page from './components/inicio'
import MsgProtected from './components/MsgProtected'
import UsuarioActivo from './pages/UsuarioActivo'


function App() {
  
  let userLogin = localStorage.getItem("userValid");

  return(
    <div>
      <h1>Rutas:</h1>
      <Routes>
        <Route path='/' element = {<Page/>}>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/error' element = {<MsgProtected/>}/>
          <Route path="/register" element={<Registros/>}/>

          {/* Esto hace que la pagina sea privada, mientras el prop tenga el valor "false" */}
          <Route element = {<ProtectedRoute Activate={userLogin}/>}>
            <Route path='/usuario' element = {<UsuarioActivo/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App


