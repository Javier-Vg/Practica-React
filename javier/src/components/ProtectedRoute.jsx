import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({Activate, redirectPath = "/"}) => {
    if (!Activate) {
        //Redirecciona a la pagina default en caso de que no se haya iniciado sesion:
        //lo que hace "replace" es eliminar en auto cada que ponga esa ruta en la url.
        return <Navigate to={redirectPath} replace/>
    }
    return <Outlet/>
}

export default ProtectedRoute