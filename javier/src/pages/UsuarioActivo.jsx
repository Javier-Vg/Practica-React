import {getUser} from "/src/components/getUser"
import { useState,useEffect } from 'react'
import axios from 'axios';

function UsuarioActivo() {

    console.log("Como entraste aca?");
    const [users, setUsers] = useState([]);
    const [cargando, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [valor, setValor] = useState();

    let usuarioActivo = localStorage.getItem("userActive")

    useEffect(() => {
        axios.get('http://localhost:3001/users')
          .then(response => {
            setUsers(response.data);
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
    },[]);

    if (cargando) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    function SearchUser() {
        users.forEach(user => {
            if (user.correo == usuarioActivo) {
                setValor(user.correo)
            } 
        })
    }
    
  return(
    <>
    <div>
      <h1>Bienvenido</h1>
      <SearchUser/>
      {valor}
    </div>
    </>
  )
}

export default UsuarioActivo