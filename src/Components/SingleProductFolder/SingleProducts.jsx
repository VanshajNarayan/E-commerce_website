import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import { useEffect } from "react";
import { useProductContext } from "../ContextFolder/ProductContext";
import PageNavigation from "../PageNavigationFolder/PageNavigation";
import SingleProductContent from "../SingleProductContentFolder/SingleProductContent";

const SingleProduct = () => {

  const { id } = useParams();
  const { SinglePageCallingApi, isSinglePageLoading, singlePageProducts } = useProductContext();

  const API = "https://api.pujakaitem.com/api/products";

  useEffect(() => {
    SinglePageCallingApi(`${API}?id=${id}`);
  }, []);

  if (isSinglePageLoading) {
    return <div style={{textAlign:"center"}} >...loading</div>
  };

  return (
    <>
      <PageNavigation singlePageProducts = {singlePageProducts} />
      <SingleProductContent singlePageProducts = {singlePageProducts}  />
    </>
  );
};

export default SingleProduct;
