
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../Service/Api"

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Auto redirect if already logged in
    useEffect(() => {

        const token = localStorage.getItem("token")

        if(token){
            navigate("/dashboard")
        }

    }, [])

    const loginUser = async (e) => {

        e.preventDefault()

        try {

            const response = await API.post(
                "/login",
                {
                    email,
                    password
                }
            )

            // Save token
            localStorage.setItem(
                "token",
                response.data.token
            )

            // Redirect dashboard
            navigate("/dashboard")

        } catch (err) {

            console.log(
                err.response?.data || err
            )

        }

    }

    return (

        <div className="container">

            <form
                onSubmit={loginUser}
                className="form"
            >

                <h1>Login</h1>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e)=>
                        setEmail(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e)=>
                        setPassword(e.target.value)
                    }
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>

    )
}

export default Login