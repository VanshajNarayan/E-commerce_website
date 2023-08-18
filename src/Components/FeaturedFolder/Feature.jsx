import { useProductContext } from "../ContextFolder/ProductContext";
import "./Feature.css";
import FeatureItems from "./FeatureItem";

const Feature = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div style={{ textAlign: "center" }}>....Loading</div>;
  }

  return (
    <>
      <div className="feature_container">
        <div className="feature_box">
          <p>check now!</p>
          <h3>our feature services</h3>
          <div className="products_items">
            {featureProducts.map((featuredItem, index) => (
              <FeatureItems key={index} featureItems={featuredItem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
