import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductReducer } from "../ReducerFolder/ProductReducer";

export const AppContext = createContext();
export const AppDispatch = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("VanshajCart");
  if (localCartData == []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  };
};

const URL = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSinglePageLoading: false,
  singlePageProducts: {},
  cartItemsBasket : getLocalCartData(),
  selectedColor : "",
  inputValue: "sort - price",
  companyInputValue : "sort-company",
  tickValue : true,
  maxPrice : 0,
  minPrice : 0,
  price : 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const FeaturedCallingApi = async (url) => {
    dispatch({ type: "SETLOADING" });
    try {
      const { data } = await axios.get(url);
      dispatch({ type: "LOAD", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  const SinglePageCallingApi = async (url) => {
    dispatch({ type: "SETLOADINGSINGLEPAGE" });
    try {
      const { data } = await axios.get(url);
      dispatch({ type: "LOADSINGLEPAGEAPI", payload: data });
    } catch (error) {
      dispatch({ type: "singlePageError" });
    }
  };

  useEffect(() => {
    FeaturedCallingApi(URL);
  }, []);

  useEffect(() => {
    localStorage.setItem("VanshajCart", JSON.stringify(state.cartItemsBasket));
  }, [state.cartItemsBasket])

  return (
    <AppContext.Provider value={{ ...state, SinglePageCallingApi, FeaturedCallingApi }}>
      <AppDispatch.Provider value={dispatch}>{children}</AppDispatch.Provider>
    </AppContext.Provider>
  );
};

//! custom Hook:-

export const useProductContext = () => {
  return useContext(AppContext);
};

export const useProductDispatch = () => {
  return useContext(AppDispatch);
};
