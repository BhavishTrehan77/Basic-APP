import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Service/Api"

const Signup = () => {

  const navigate = useNavigate();
  const[name,setName]=useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/signup",
        {
            name,
          email,
          password
        }
      );

      navigate("/");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="container">

      <form onSubmit={signupUser} className="form">

        <h1>Signup</h1>
        <input type="name" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)}/>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
          Signup
        </button>

      </form>

    </div>

  );
};

export default Signup;