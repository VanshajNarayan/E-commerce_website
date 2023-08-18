import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { productItemReducer } from "../ReducerFolder/ProductItemReducer";
import axios from "axios";

export const ProductItemContext = createContext();
export const ProductItemDispatch = createContext();

const URLproduct = "https://api.pujakaitem.com/api/products";

const initialState = {
  allProducts: [],
  allError  : false,
  // maxPrice : 0,
  // minPrice : 0,
  // price : 0,
};

export const ProductItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productItemReducer, initialState);

  const CallingAllProductApi = async (url) => {
    try {
      const { data } = await axios.get(url);
      dispatch({ type: "LoadAllProduct", payload: data });
    } catch (error) {
      dispatch({ type: "errors" });
    }
  };

  useEffect(() => {
    CallingAllProductApi(URLproduct);
  }, []);

  return (
    <ProductItemContext.Provider value={{...state}} >
      <ProductItemDispatch.Provider value={dispatch}>
      {children}
      </ProductItemDispatch.Provider>
    </ProductItemContext.Provider>
  )
};

export const useProductItemContext = () => {
  return useContext(ProductItemContext);
};

export const useProductItemDispatch = () => {
  return useContext(ProductItemDispatch);
};