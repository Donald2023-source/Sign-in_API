
import { useState } from "react";
import {registerUser} from "./src/Helper/Helper";
import { Link } from "react-router-dom";
import Success from "./src/Component/Success";
import { InfinitySpin } from "react-loader-spinner";

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [staffID, setStaffID] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] =useState('')
    const API_URL = 'https://buyinbulk-zxvi.onrender.com/api/v1/auth/register-farmer'
    const verify= 'https://buyinbulk-zxvi.onrender.com/api/v1/auth/verify-email'
    const login ='https://buyinbulk-zxvi.onrender.com/api/v1/auth/login'

// Auth Params
//     email
// firstName
// lastName
// password
// password2
    const updateName = (event) => {
        setFullName(event.target.value);
    }
    const updateStaffID = (event) => {
        setStaffID(event.target.value);
    }
    const updateEmail = (event) => {
        setEmail(event.target.value);
    }
    const updatePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleApi =async () => {
        const userData = {
            fullname: fullName,
            staffId: staffID,
            email: email,
            password: password,
        };

        try {
            setIsLoading(true)
            const response = await registerUser(userData)
            // .then(
            //     (res) => {
            //        setIsLoading(false) 
            //        console.log('Request Completed')
            //        console.log(res)
            //     }
            // );
            setSuccessful(true);
          setSuccessMessage(response.message); 
          }
          catch (error) {
            setIsLoading(false)
            console.error('Registration failed:', error.message);
          }
        }
    const handleSubmit = (event) => {
        event.preventDefault(); 
        handleApi()
    }
    
    return (
        <>
            <div className="fill">
                {successful ? (
                    <Success message={successMessage}/>    
                 )
                :(
                    <form className="sign-in" onSubmit={handleSubmit}>
                    <fieldset>
                        <h4>Full Name</h4>
                        <input required onChange={updateName} type="text" placeholder="Please enter your full name" />
                    </fieldset>

                    <fieldset>
                        <h4>Staff ID</h4>
                        <input required onChange={updateStaffID} type="number" placeholder="Please enter staff ID" />
                    </fieldset>

                    <fieldset>
                        <h4>Email Address</h4>
                        <input required onChange={updateEmail} type="email" placeholder="Please enter your email" />
                    </fieldset>

                    <fieldset>
                        <h4>Password</h4>
                        <input required onChange={updatePassword} type="password" placeholder="Please enter password" />
                    </fieldset>

                    <button id="reg" onClick={()=>registerUser} type="submit">Sign Up</button>

                    <Link className="next" to='/login'>
                Already have an account? Login
                </Link>


                
                </form>
                )

                }
      
            </div>
            {isLoading ? 
            <div className="" style={{"height": '100vh', 'width': '100vw', 'backgroundColor': 'rgba(225, 225, 225, 0.44)', position : 'absolute', top: '0', display: "flex", justifyContent: 'center', alignItems:'center'}}>
            <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  />
            </div>
            : 'Not loading'}
        </>
    );
}

export default Register;
