import { useState } from "react";
import "./CartButton.css";
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useProductDispatch } from "../ContextFolder/ProductContext";

const CartButton = ({ singlePageProducts }) => {
  const { price } = singlePageProducts;
  let [amount, setAmount] = useState(1);
  const dispatch = useProductDispatch();
  const DecrementAmount = () => {
    if (amount != 1) {
      setAmount(--amount);
      dispatch({ type: "SET_QUANTITY_AMOUNT", payload: { amount, price } });
    }
  };
  const IncrementAmount = () => {
    if (amount < 5) {
      setAmount(++amount);
      dispatch({ type: "SET_QUANTITY_AMOUNT", payload: { amount, price } });
    }
  };
  const handleAddToCart = () => {
    dispatch({
      type: "SET_ADD_TO_CART",
      payload: { cartItems: singlePageProducts, amount: amount, Prices : price },
    });
  };
  return (
    <>
      <div className="Increment_Decrement_container mrb">
        <GrFormSubtract className="decrement" onClick={DecrementAmount} />
        <span className="num"> {amount} </span>
        <GrFormAdd className="decrement" onClick={IncrementAmount} />
      </div>
      <div className="cart_button">
        <NavLink to="/cart">
          <button onClick={handleAddToCart}>ADD TO CART</button>
        </NavLink>
      </div>
    </>
  );
};

export default CartButton;
