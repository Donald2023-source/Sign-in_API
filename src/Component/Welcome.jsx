import { Link } from "react-router-dom"
const Welcome = () => {
    return(
        <>
       <div className="welcome">
        <h3 id="h3">Welcome</h3>

        
        <div className="cards">
        <Link className="l3" to={'/Register'}>
            <div className="card_1">
            <img height="90vh" src='src/assets/User.jpg' />

            <h4>New User?</h4>
            <h4>Please Sign Up</h4>

           
            </div>
            
        
        </Link>

        <Link className="l3" to={'/login'}>
        <div  className="card_2">
            <img height="90vh" src='src/assets/User.jpg' />

            <h4>Login</h4>
            <h4>Login now!</h4>

           
            </div>
            </Link>
            
        </div>
</div>

      
        </>
    )
}
export default Welcome