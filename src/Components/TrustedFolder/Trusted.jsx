import "./Trusted.css";
import { IoLogoVimeo, IoLogoBuffer, IoLogoYen } from "react-icons/io";
import { FcDvdLogo } from "react-icons/fc";
import { PiTiktokLogoFill } from "react-icons/pi";


const Trusted = () => {
  return (
    <>
      <div className="trusted_container">
        <div className="trusted_box">
          <p className="trusted_para">trusted by 1000+ companies</p>
          <div className="trusted_companies">
            <IoLogoVimeo  className="trustedCompanies_logo" />
            <IoLogoBuffer className="trustedCompanies_logo" />
            <FcDvdLogo className="trustedCompanies_logo" />
            <PiTiktokLogoFill className="trustedCompanies_logo" />
            <IoLogoYen className="trustedCompanies_logo" />
          </div>
        </div>
      </div>
    </>
  )
};

export default Trusted;