import { useState } from "react";
import { signin } from "./Helper/Helper";


const Login = () => {
    const [staffID, setStaffId] =useState('')
    const[password, setPassword] = useState('')
    const [error, setError] =useState('')

    

const updateStaffID = (event) => {
    setStaffId(event.target.value);
}

const updatePassword = (event) => {
    setPassword(event.target.value);
}

const handleLogin = async() => {
    const logindata = {
        staffId: staffID,
        password: password,
    }

    await signin(logindata)
}

const handleSignIn = (event) => {
    event.preventDefault();
    handleLogin()
}
    return (
        <>
           <div className="login">
        <form className="log" onSubmit={handleSignIn}>
        <div className="User">
            <h1>LOGIN</h1>
      <img  src='src/assets/User.jpg' />
      </div>
            <fieldset>
                <input required onChange={updateStaffID} type="number" placeholder="Please enter your ID"/>
            </fieldset>

            <fieldset>
                <input required onChange={updatePassword} type="password"  placeholder="Please enter your password"/>
            </fieldset>

            <button onClick={() => signin}>
                Login
            </button>
        </form>
    </div>
    </>
    )
}
export default Login