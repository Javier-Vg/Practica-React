import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({Activate}) => {
    console.log("Protegido");
    console.log(Activate);
    if (Activate == false || Activate == null) {
        //Redirecciona a la rutsen caso de que no se haya iniciado sesion:
        //lo que hace "replace" es eliminar en auto cada que ponga esa ruta en la url.
        return <Navigate to={"/error"} replace/>
    }else{
        return <Outlet/>
    }
}

export default ProtectedRoute