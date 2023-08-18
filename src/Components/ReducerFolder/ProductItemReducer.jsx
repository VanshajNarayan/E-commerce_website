export const productItemReducer = (state, action) => {
  switch (action.type) {

    case "LoadAllProduct": {
      // const priceArr = action.payload.map((items) => items.price);
      // const maxPrice = Math.max.apply(null, priceArr);
      // const maxPrice = priceArr.reduce((initialvalue, currentValue) => Math.max(initialvalue, currentValue), 0);
      // const maxPrice = Math.max(...priceArr);
      // console.log(maxPrice);
      return {
        ...state,
        allProducts: action.payload,
      };
    };

    case "errors": {
      return {
        ...state,
        allError: true,
      }
    };

    default: {
      return state;
    };
  }
}; 