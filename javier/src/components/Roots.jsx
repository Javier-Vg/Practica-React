import Login from "../components/login"
import  Register  from "../components/register";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route element = {<ProtectedRoute Activate={false}/>}>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default Pages