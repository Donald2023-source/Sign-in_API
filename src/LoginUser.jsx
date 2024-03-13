import { createContext, useEffect, useState } from "react";
import { signin } from "./Helper/Helper";
import Cookies from "js-cookie";
import SucLog from "./Component/suclog";

const Login = () => {
    const [staffID, setStaffId] =useState('')
    const[password, setPassword] = useState('')
    const [error, setError] =useState('')
    const [requestResponse, setRequestResponse] = useState(null)
    const [token, setToken] =useState(null)
    const [successful, setSuccessful] =useState(false)
    const [successMessage, setSuccessMessage] =useState('')
   const [fullname, setfullname] =useState('')

    const updateStaffID = (event) => {
    setStaffId(event.target.value);
}
    const updatePassword = (event) => {
    setPassword(event.target.value);
}
const handleLogin = async () => {
    const logindata = {
      staffId: staffID,
      password: password,
    }; 
    try {
      const response = await signin(logindata);
      setSuccessful(true);
      setSuccessMessage(response.message)
      if (response.status === 200) {
        console.log('nice');
        const myToken = response.data.token;
        
        if (myToken) {
          Cookies.set('accessToken', myToken, { expires: 7 });
        } else {
          setError('Token is missing or invalid');
        }
      } else {
        setError('Something went wrong');
    }
    } catch (error) {
      setError('Something went wrong');
      console.log('error', error);
    }
    };
     const handleSignIn = (event) => {
    event.preventDefault();
     handleLogin()
     }
    return (
        <>
        <div className="login">
            {
                successful ? (
                   <SucLog message={successMessage}  />
                ) 
                :
                (
                    <div>
                    <form className="log" onSubmit={handleSignIn}>
                    <div className="response">
                    {requestResponse ? requestResponse : 'Please Login'}
                    </div>
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
                )
            }

    </div>
    </>
    )
}
export default Login