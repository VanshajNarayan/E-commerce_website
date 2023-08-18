import { NavLink } from "react-router-dom";
import "./PageNavigation.css";

const PageNavigation = ({ singlePageProducts }) => {
  return (
    <>
      <div className="pageNavigation">
        <div className="pageNavigation_box">
          <h2>
            <NavLink to="/">Home</NavLink>/ {singlePageProducts.name}
          </h2>
        </div>
      </div>
    </>
  );
};

export default PageNavigation;
