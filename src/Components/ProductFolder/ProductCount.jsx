import { useState } from "react";
import { useProductContext } from "../ContextFolder/ProductContext";
import PriceFilter from "./PriceFilter";
import "./ProductCount.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const ProductCount = ({products}) => {
  const [show, setShow] = useState(false);
  const {inputValue}  = useProductContext();
  const handleDropIcon = () => {
    if (show === false) {
      setShow(true);
    } else if (show === true) {
      setShow(false);
    };
  };
  return (
    <>
      <div className="product_counts">
        <span> {products.length} total products.</span>
        <div className="product_filter" onClick={handleDropIcon} >
          <input type="text" className="input" value={inputValue} readOnly />
          <RiArrowDropDownLine className="dropdown_icon" />
          {show ? <PriceFilter /> : "" }
        </div>
      </div>
    </>
  )
};

export default ProductCount;
