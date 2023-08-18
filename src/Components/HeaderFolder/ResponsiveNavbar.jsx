import { NavLink } from "react-router-dom";
import "./ResponsiveNavbar.css";
import { BsCart4 } from "react-icons/bs";
import { useProductContext } from "../ContextFolder/ProductContext";
import { useAuth0 } from "@auth0/auth0-react";

const ResponsiveNavbar = ({ setMenuIcon }) => {
  let { cartItemsBasket } = useProductContext();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="responsiveNavbar">
        <ul className="responsiveLists" onClick={() => setMenuIcon(false)}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/product">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {isAuthenticated ? (
          <li>
            <button
              className="Navbar_btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }>
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <button className="Navbar_btn" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          </li>
        )}
          <div className="cart_icons">
            <NavLink to="/cart">
              <BsCart4 style={{ color: "black" }} />
              <span className="cart_count" style={{ color: "green" }}>
                {cartItemsBasket.length}
              </span>
            </NavLink>
          </div>
        </ul>
      </div>
    </>
  );
};

export default ResponsiveNavbar;
