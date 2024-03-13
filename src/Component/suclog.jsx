import { Link } from "react-router-dom";
const SucLog = ({message}) => {
    return (
      <div className="success-message">
        <img height="200vh" src="src/assets/Success.jpg"/>
        <h2>{message}</h2>
        <p>Thank you for signing up.</p>
        
        <Link to='/Dashboard'>
         <button>Finish</button>
        </Link>
       
      </div>
    );
  };
  
  export default SucLog;