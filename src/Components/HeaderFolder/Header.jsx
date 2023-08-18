import { useState } from "react";
import "./Header.css";
import Navbar from "./Navbar";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Header = () => {

  const [menuIcon, setMenuIcon] = useState(false);

  const handleMenuIcon = () => {
    if (menuIcon === false) {
      setMenuIcon(true);
    } else if (menuIcon === true) {
      setMenuIcon(false);
    }
  };

  return (
    <>
      <div className="header_container">
        <span className="logo">Vanshaj Store</span>
        {menuIcon ? (
          <RxCross2 className="menu_icon" onClick={handleMenuIcon} />
        ) : (
          <HiMenu className="menu_icon" onClick={handleMenuIcon} />
        )}
        <Navbar />
      </div>
      {menuIcon && <ResponsiveNavbar setMenuIcon = {setMenuIcon} />}
    </>
  );
};

export default Header;
