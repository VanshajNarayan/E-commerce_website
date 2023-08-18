import "./Footer.css";
import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="started_box">
          <p>Ready to get started? Talk to us today </p>
          <NavLink to="/contact">
            <button>Get Started</button>
          </NavLink>
        </div>
        <div className="footer_box">
          <div className="firstSection">
            <p>Vanshaj Narayan</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="secondSection">
            <p>subscribe to get important updates</p>
            <div className="secondSectionForm">
              <input type="text" placeholder="Your E-mail" className="email" autoComplete="off" />
              <input type="button" value="Subscribe" className="inputBtn" />
            </div>
          </div>

          <div className="thirdSection">
            <p>follow us</p>
            <div className="follow_icon">
              <ImLinkedin2 className="follow_icons" />
              <AiOutlineInstagram className="follow_icons" />
              <AiOutlineYoutube className="follow_icons" />
            </div>
          </div>

          <div className="fouthSection">
            <p>Call us</p>
            <p>+91 7717766172</p>
          </div>
        </div>
        <div className="border"></div>
        <div className="another_box">
          <p>@2023 Vanshaj Narayan. All Rights Reserved</p>
          <h4>PRIVACY POLICY TERMS & CONDITIONS</h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
