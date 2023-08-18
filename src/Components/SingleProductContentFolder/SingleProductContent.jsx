import FormatPrice from "../../Helpers/FormatPrice";
import "./SingleProductContent.css";
import { TbTruckDelivery, TbReplace, TbTruckLoading } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import SingleProductImage from "../SingleProductImageFolder/SingleProductImage";
import StarReview from "../StarReviewFolder/StarReview";
import ColorComponent from "../ColorFolder/Color";
import CartButton from "../CartButtonFolder/CartButton";

const SingleProductContent = ({ singlePageProducts }) => {
  const { image } = singlePageProducts;
  return (
    <>
      <div className="singleProductContent">
        <div className="singleProductContainer">
          <div className="singleProductImageContainer">
            <SingleProductImage image = {image} />
          </div>
          <div className="singleProductTextContainer">
            <h2 className="mrb"> {singlePageProducts.name} </h2>
            <StarReview stars = {singlePageProducts.stars} review = {singlePageProducts.reviews} />
            <p className="singleProduct_Price mrb">
              MRP:
              <del>
                <FormatPrice price={singlePageProducts.price + 250000} />
              </del>
            </p>
            <p className="singleProductDeal_Price mrb">
              Deal of the Day:
              <FormatPrice price={singlePageProducts.price} />
            </p>
            <p className="description mrb">{singlePageProducts.description}</p>
            <div className="singleProductContent_Icon mrb">
              <div className="firstDiv_icon">
                <TbTruckDelivery className="singleProductDeliveryIcon" />
                <p>Free Delivery</p>
              </div>
              <div className="firstDiv_icon">
                <TbReplace className="singleProductDeliveryIcon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="firstDiv_icon">
                <TbTruckLoading className="singleProductDeliveryIcon" />
                <p>Vanshaj Delivered</p>
              </div>
              <div className="firstDiv_icon">
                <MdOutlineSecurity className="singleProductDeliveryIcon" />
                <p>2 Year Warranty</p>
              </div>
            </div>
            <div className="borderLine mrb"></div>
            <p className="available mrb">
              Available :  
              <span className="black">
                {singlePageProducts.stock > 0 ? " In Stock " : " Not Avaliable "}
              </span>
            </p>
            <p className="id mrb ">
              ID : <span className="black"> {singlePageProducts.id} </span>
            </p>
            <p className="brand mrb">
              Brand :
              <span className="black"> {singlePageProducts.company} </span>
            </p>
            <div className="secondBorderLine mrb"></div>
            {
              singlePageProducts.stock > 0 && 
              <ColorComponent colorsArr = {singlePageProducts.colors} />
            }
            {
              singlePageProducts.stock > 0 && <CartButton singlePageProducts = {singlePageProducts} />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductContent;
