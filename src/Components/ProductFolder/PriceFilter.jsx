import "./PriceFilter.css";
import { useProductContext, useProductDispatch } from "../ContextFolder/ProductContext";

const PriceFilter = () => {
  const dispatch = useProductDispatch();
  const { products } = useProductContext();
  const priceFilterArr = [
    "price(Lowest)",
    "price(highest)",
    "price(a-z)",
    "price(z-a)",
  ];
  return (
    <>
      <div className="price_filter_container">
        {priceFilterArr.map((elements, index) => (
          <p
            key={index}
            onClick={() => {
              dispatch({ type: "set_elements", payload: elements })
              dispatch({ type: "Load_New_Item", payload: products })
            }
            }>
            {elements}
          </p>
        ))}
      </div>
    </>
  );
};

export default PriceFilter;
