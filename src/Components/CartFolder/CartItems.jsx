import { useState } from "react";
import FormatPrice from "../../Helpers/FormatPrice";
import "./CartItems.css";
import { MdDelete } from "react-icons/md";
import {
  useProductContext,
  useProductDispatch,
} from "../ContextFolder/ProductContext";

const CartItems = ({ basketCart }) => {
  let { cartItemsBasket } = useProductContext();
  let { price, colors, quantityAmount, subTotal } = basketCart;
  let [quantity, setQuantity] = useState(quantityAmount);
  let [totalAmount, setTotalAmount] = useState(subTotal);
  let dispatch = useProductDispatch();
  const quantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(--quantity);
      setTotalAmount(totalAmount - price);
      dispatch({
        type: "SET_SUB_TOTAL",
        payload: { price, quantity, basketCart },
      });
    }
  };

  const quantityIncrement = () => {
    if (quantity < 5) {
      setQuantity(++quantity);
      setTotalAmount(price * quantity);
      dispatch({
        type: "SET_SUB_TOTAL",
        payload: { price, quantity, basketCart },
      });
    }
  };

  const handleRemoveItem = () => {
    dispatch({
      type: "DELETE_ITEMS",
      payload: { basketCarts: basketCart, cartItemsBaskets: cartItemsBasket },
    });
  };

  return (
    <>
      <div className="Cart_items_box">
        <div className="img_name_colors">
          <figure>
            <img src={`${basketCart.image[0].url}`} alt={basketCart.name} />
          </figure>
          <div className="items_name">
            <p className="name"> {basketCart.name} </p>
            <div className="colors_p">
              <span>Colors :</span>
              <div
                style={{ backgroundColor: `${colors}` }}
                className="color"></div>
            </div>
          </div>
        </div>
        <div className="price">
          <span>
            <FormatPrice price={price} />
          </span>
        </div>
        <div className="quantity_container">
          <div className="subtract" onClick={quantityDecrement}>
            -
          </div>
          <div className="amount"> {quantity} </div>
          <div className="add" onClick={quantityIncrement}>
            +
          </div>
        </div>
        <div className="subTotal_container">
          <span>
            <FormatPrice price={totalAmount} />
          </span>
        </div>
        <div className="remove_icon">
          <MdDelete className="delete_icon" onClick={handleRemoveItem} />
        </div>
      </div>
    </>
  );
};

export default CartItems;
