 import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({Activate}) => {
    console.log("Protegido");
    console.log(Activate);
    if (Activate == false) {
        //Redirecciona a la pagina default en caso de que no se haya iniciado sesion:
        //lo que hace "replace" es eliminar en auto cada que ponga esa ruta en la url.
        return <Navigate to={"/"} replace/>
    }else{
        return <Outlet/>
    }
}

export default ProtectedRoute