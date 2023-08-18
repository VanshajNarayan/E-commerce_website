import { NavLink } from "react-router-dom";
import "./Cart.css";
import CartItems from "./CartItems";
import {
  useProductContext,
  useProductDispatch,
} from "../ContextFolder/ProductContext";
import TotalAmount from "./TotalAmount";

const Cart = () => {
  let { cartItemsBasket, subTotal } = useProductContext();
  const dispatch = useProductDispatch();
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART", payload: { cartItemsBasket } });
  };
  return (
    <>
      <div className="cartPage_container">
        <div className="cartBox">
          <div className="cart_options">
            <option className="itemOption">ITEM</option>
            <option className="priceOption">PRICE</option>
            <option className="quantityOption">QUANTITY</option>
            <option className="subTotalOption">SUBTOTAL</option>
            <option className="removeOption">REMOVE</option>
          </div>
          <div className="border_line"></div>
          {cartItemsBasket.length == 0 ? (
            <h1 style={{ textAlign: "center", margin: "2rem" }}>No Items</h1>
          ) : (
            <div className="Cart_items_container">
              {cartItemsBasket.map((basketCart, index) => (
                <CartItems
                  key={index}
                  basketCart={basketCart}
                  subTotal={subTotal}
                />
              ))}
            </div>
          )}
          <div className="border_line"></div>
          <div className="button_container">
            <NavLink to="/product">
              <button className="shopping_btn">CONTINUE SHOPPING</button>
            </NavLink>
            <button className="clearChat_btn" onClick={handleClearCart}>
              CLEAR CART
            </button>
          </div>
          {cartItemsBasket.length != 0 && <TotalAmount />}
        </div>
      </div>
    </>
  );
};

export default Cart;
