import { NavLink } from "react-router-dom";
import "./FeatureItem.css";
import FormatPrice from "../../Helpers/FormatPrice";

const FeatureItems = ({ featureItems }) => {
  return (
    <>
      <NavLink to={`/singleproduct/${featureItems.id}`}>
        <div className="feature_products">
          <div className="feature_products_box">
            <div className="product_img">
              <img src={featureItems.image} alt="/" />
              <div className="productName"> {featureItems.category} </div>
            </div>
            <div className="feature_products_text">
              <p> {featureItems.name} </p>
              <p className="rupyaa">
                {<FormatPrice price={featureItems.price} />}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default FeatureItems;
