import FormatPrice from "../../Helpers/FormatPrice";
import { useProductContext } from "../ContextFolder/ProductContext";
import "./TotalAmount.css";

const TotalAmount = () => {
  let {cartItemsBasket} = useProductContext();
  let ans = cartItemsBasket.map(items => items.subTotal);
  let total = 0;
  ans.map((element) => {
    total = (element + total);
  });
  return (
    <>
      <div className="TotalAmount_MainContainer">
        <div className="TotalAmount_container">
          <p>
            <span>SubTotal : </span> <FormatPrice price={total} />
          </p>
          <p>
            <span>Shipping Fee : </span> <FormatPrice price={500} />
          </p>
          <div className="border_line_amount"></div>
          <p>
            <span>Order Total : </span> <FormatPrice price={total+500} />
          </p>
        </div>
      </div>
    </>
  );
};

export default TotalAmount;
