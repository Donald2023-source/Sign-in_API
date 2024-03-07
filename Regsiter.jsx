
import { useState } from "react";
import {registerUser} from "./src/Helper/Helper";
import { Link } from "react-router-dom";
import Success from "./src/Component/Success";

 


const Register = () => {
    const [fullName, setFullName] = useState('');
    const [staffID, setStaffID] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [successful, setSuccessful] = useState(false)
    const [successMessage, setSuccessMessage] =useState('')


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
            const response = await registerUser(userData);
            setSuccessful(true);
          setSuccessMessage(response.message); 
          } catch (error) {
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
        </>
    );
}

export default Register;
