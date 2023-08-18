import { NavLink } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <>
      <div className="error_maincontainer">
        <div className="error_container">
          <h2>404</h2>
          <h5>uh oh! you're lost.</h5>
          <p>
            The page your are looking does not exist. how you got here is a
            mystery. but you can click the button below to go back to the
            homepage.
          </p>
          <NavLink to="/"> <button>home</button> </NavLink>
        </div>
      </div>
    </>
  );
};

export default Error;
