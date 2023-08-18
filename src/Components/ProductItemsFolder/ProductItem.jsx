import FormatPrice from "../../Helpers/FormatPrice";
import "./ProductItem.css";

const ProductItems = ({productItems}) => {
  return (
    <>
        <div className="Item_container">
          <div className="product_img">   
          <figure>
            <img
              src= {productItems.image}
              alt= {productItems.name}
              className="item_img"
            />
          </figure>
          <span className="product_category"> {productItems.category} </span>
          </div>
          <div className="item_info">
            <span>{productItems.name}</span>
            <span className="item_price"> <FormatPrice price = {productItems.price} /> </span>
          </div>
        </div>
    </>
  );
};

export default ProductItems;
