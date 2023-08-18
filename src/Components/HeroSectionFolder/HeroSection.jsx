import { NavLink } from "react-router-dom";
import "./HeroSection.css";
import { useAuth0 } from "@auth0/auth0-react";

const HeroSection = ({ dataName }) => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="Hero_section">
        <div className="hero_Section_container">
          <div className="hero_content">
            {isAuthenticated ? (
              <span className="welcome">Welcome {user.name.slice(0, -13)} </span>
            ) : (
              <span className="welcome">Welcome To</span>
            )}
            <h3 className="heroTitle"> {dataName.name} </h3>
            <p className="heroPara">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae vel
              libero velit repudiandae dolores, iste voluptates autem eaque
              commodi minima a fuga deleniti minus nam fugit, quis culpa,
              eligendi officia? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quas, dolorem?
            </p>
            <NavLink to="/product">
              <button className="heroBtn">Shop Now</button>
            </NavLink>
          </div>
          <div className="hero_image">
            <img src="/ImageFolder/Hero.jpg" alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
