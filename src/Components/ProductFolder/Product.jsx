import { useProductContext } from "../ContextFolder/ProductContext";
import FeatureItems from "../FeaturedFolder/FeatureItem";
import ProductFirstSection from "../ProductFirstSectionFolder/ProductFirstSection";
// import ProductItems from "../ProductItemsFolder/ProductItem";
import "./Product.css";
import ProductCount from "./ProductCount";

const Product = () => {
  const { isLoading, products } = useProductContext();
  if (isLoading) {
    return <div style={{ textAlign: "center" }}>...Loading</div>;
  }
  return (
    <>
      <div className="Product_Big_container">
        <div className="Product_Small_container">
          {/* Product First section:- */}
          <div className="Product_first_Section">
            <ProductFirstSection />
          </div>
          {/* Product second section */}
          <div className="Product_second_Section">
            <div className="product_count_container">
              <ProductCount products={products} />
            </div>
            <div className="ProductItem_container">
              {products.map((productItems, index) => (
                <FeatureItems key={index} featureItems={productItems} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
