import FormatPrice from "../../Helpers/FormatPrice";
import { useProductContext, useProductDispatch } from "../ContextFolder/ProductContext";
import "./InputRangePriceFilter.css";

const InputRangePriceFilter = () => {
  const { maxPrice, minPrice, price } = useProductContext();
  const dispatch = useProductDispatch();
  const handleInputRange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "SET_INPUT_RANGE_FILTER", payload: { name, value } });
    dispatch({ type: "SET_PRICE_TO_ITEM" });
  };
  return (
    <>
      <div className="InputRangePriceFilter_container">
        <h3> Price </h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={handleInputRange}
        />
      </div>
    </>
  );
};

export default InputRangePriceFilter;
