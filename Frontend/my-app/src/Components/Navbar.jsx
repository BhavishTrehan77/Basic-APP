import { useNavigate } from "react-router-dom";
import{Link} from 'react-router-dom'

const Navbar=()=>{
    const navigate=useNavigate()

    const logout=()=>{
        localStorage.removeItem("token")
        navigate("/")
    };
    return(
        <>
        <div
      style={{
        padding: "15px",
        background: "#111",
        display: "flex",
        gap: "20px"
      }}
    >

      <Link to="/">Login</Link>

      <Link to="/signup">Signup</Link>

      <Link to="/dashboard">Dashboard</Link>

      <button onClick={logout}>
        Logout
      </button>

    </div>
    </>
    )
}
export default Navbar