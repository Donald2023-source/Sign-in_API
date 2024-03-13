import { Link } from "react-router-dom";
const SucLog = ({message, fullname}) => {
    return (
      <div className="success-message">
        <img height="200vh" src="src/assets/Success.jpg"/>
        <h2>{message}</h2>
        <p>Thank you for signing up.</p>
        <h4 className="text-white">{fullname}</h4>
        
        <Link to={`/Dashboard/${fullname}`}>
        <button>Finish</button>
      </Link>
       
      </div>
    );
  };
  
  export default SucLog;