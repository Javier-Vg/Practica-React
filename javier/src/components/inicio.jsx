import {Link, Outlet} from "react-router-dom";
function Page() {
  return (
    <div>
      <ul>
        <li><Link to="/register">Registro</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <hr />
      <Outlet/>
    </div>
  )
}
export default Page