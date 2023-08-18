import './Service.css';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Service = () => {
  return (
    <>
      <div className="service_box">  
        <div className="service_container">

        <div className="first_Section">
          <TbTruckDelivery className='delivery_icon'/>
          <p className='firstSectionPara'>super fast and free delivery</p>
        </div>

        <div className="secondSection">
          <div className="firstPart_secondSection">
            <MdSecurity className='security_icon'/>
            <p className='firstPart_secondSection_para'>non-contact shipping</p>
          </div>
          <div className="secondPart_secondSection">
            <GiReceiveMoney className='moneyReceive_icon'/>
            <p className='secondPart_secondSection_para'>money back guaranteed</p>
          </div>
        </div>

        <div className="third_Section">
          <RiSecurePaymentLine className='securePayment_icon'/>
          <p className='thirdSectionPara'>super secure payment system</p>
        </div>

        </div>
      </div>
    </>
  )
};

export default Service;