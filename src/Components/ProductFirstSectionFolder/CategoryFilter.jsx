import {
  // useProductContext,
  useProductDispatch,
} from "../ContextFolder/ProductContext";
import { useProductItemContext } from "../ContextFolder/ProductItemContext";
import "./CategoryFilter.css";

const CategoryFilter = () => {
  const { allProducts } = useProductItemContext();
  // let { products } = useProductContext();
  const dispatch = useProductDispatch();
  const CategoryFilterArr = [
    "All",
    "Mobile",
    "Laptop",
    "Computer",
    "Accessories",
    "watch",
  ];
  const handleCategory = (elements) => {
    dispatch({
      type: "set_Categories_filter",
      payload: { AllProducts: allProducts, elements: elements },
    });
  };
  return (
    <>
      <div className="category_filter_container">
        <h3 className="category_tittle">Category</h3>
        {CategoryFilterArr.map((elements, index) => {
          return (
            <p
              className="Category_options"
              key={index}
              onClick={() => handleCategory(elements)}>
              {elements}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default CategoryFilter;
