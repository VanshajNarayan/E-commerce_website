// import { all } from "axios";
import { useProductContext, useProductDispatch } from "../ContextFolder/ProductContext";
import { useProductItemContext } from "../ContextFolder/ProductItemContext";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import CompanyFilter from "./CompanyFilter";
import InputRangePriceFilter from "./InputRangePriceFilter";
import "./ProductFirstSection.css";

const ProductFirstSection = () => {
  const { allProducts } = useProductItemContext();
  const dispatch = useProductDispatch();
  const handleSearch = (e) => {
    dispatch({
      type: "SEARCH_ITEM",
      payload: {AllProducts : allProducts , inputValue : e.target.value},
    });
  };
  return (
    <>
      <div className="productFirstSection">
        <input
          type="text"
          className="firstSectionInput"
          onChange={ (e) => handleSearch(e) }
          placeholder="SEARCH"
        />
        <CategoryFilter />
        <CompanyFilter />
        <ColorFilter />
        <InputRangePriceFilter/>
        <div className="clear_button">
          <button
            className="clearBtn"
            onClick={() =>
              dispatch({ type: "CLEAR_FILTERS", payload: allProducts })
            }>
            CLEAR FILTERS
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductFirstSection;
