export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SETLOADING": {
      return { ...state, isLoading: true };
    }

    case "LOAD": {
      const featureData = action.payload.filter((elements) => {
        return elements.featured === true;
      });

      const priceArr = action.payload.map((items) => items.price);
      const maxPrice = Math.max(...priceArr);

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
        price : maxPrice,
        minPrice : 0,
        maxPrice : maxPrice,
      };
    }

    case "SET_INPUT_RANGE_FILTER": {
      let { name, value } = action.payload;
      return {
        ...state,
        [name] : value,
      }
    };

    case "SET_PRICE_TO_ITEM": {
      let { products, price } = state;
      if (price === 0) {
        let filteredPrice = products.filter((items) => items.price == price);
        return {
          ...state,
            products: filteredPrice,
        };
      } else {
        let filteredPrice = products.filter((items) => items.price <= price);
        return {
          ...state,
            products: filteredPrice,
        };
      }
    };

    case "ERROR": {
      return { ...state, isLoading: false, isError: true };
    }

    case "SETLOADINGSINGLEPAGE": {
      return { ...state, isSinglePageLoading: true };
    }

    case "LOADSINGLEPAGEAPI": {
      return {
        ...state,
        isSinglePageLoading: false,
        singlePageProducts: action.payload,
      };
    }

    case "color_load": {
      let {selectColors} = action.payload;
      state.singlePageProducts.colors = [selectColors];
      return {
        ...state,
        selectedColor: selectColors,
      };
    }

    case "SET_QUANTITY_AMOUNT": {
      let { amount, price } = action.payload;
      let { singlePageProducts } = state;
      singlePageProducts.quantityAmount = amount;
      singlePageProducts.subTotal = price * amount;
      return {
        ...state,
      };
    }

    case "SET_ADD_TO_CART": {
      const {cartItems, amount, Prices} = action.payload;
      let { cartItemsBasket } = state;
      cartItemsBasket = [...cartItemsBasket, cartItems];
      if (cartItems.colors.length != 1) { cartItems.colors = [cartItems.colors[0]] };
      if (cartItems.quantityAmount === undefined) { cartItems.quantityAmount = 1 };
      if (cartItems.subTotal === undefined) { cartItems.subTotal = cartItems.price };
      return {
        ...state,
        quantity : amount,
        subTotal : Prices,
        cartItemsBasket,
      };
    }

    case "SET_SUB_TOTAL": {
      let { basketCart, price, quantity } = action.payload;
      basketCart.quantityAmount = quantity;
      basketCart.subTotal = price * quantity;
      return {
        ...state,
      };
    }

    case "DELETE_ITEMS": {
      let { cartItemsBaskets, basketCarts } = action.payload;
      let { cartItemsBasket } = state;
      let indexNumber = cartItemsBaskets.indexOf(basketCarts);
      cartItemsBaskets.splice(indexNumber, 1);
      return {
        ...state,
        cartItemsBasket,
      };
    }

    case "CLEAR_CART": {
      let {cartItemsBasket} = action.payload;
      cartItemsBasket.length = 0;
      return {
        ...state,
        cartItemsBasket,
      };
    }

    case "singlePageError": {
      return { ...state, isSinglePageLoading: false, isError: true };
    }

    case "set_elements": {
      return { ...state, inputValue: action.payload };
    }

    case "Load_New_Item": {
      //! lowest to Highest:-
      if (state.inputValue === "price(Lowest)") {
        const shortPrice = action.payload.sort((a, b) => a.price - b.price);
        return {
          ...state,
          products: shortPrice,
        };
      }

      // ! Highest to lowest
      if (state.inputValue === "price(highest)") {
        const shortPrice = action.payload.sort((a, b) => b.price - a.price);
        return {
          ...state,
          products: shortPrice,
        };
      }

      // ! Sort with a to z
      if (state.inputValue === "price(a-z)") {
        const shortPrice = action.payload.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return {
          ...state,
          products: shortPrice,
        };
      }

      // ! Sort with z to a
      if (state.inputValue === "price(z-a)") {
        const shortPrice = action.payload.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        return {
          ...state,
          products: shortPrice,
        };
      }
    }

    case "set_Categories_filter": {
      const { elements, AllProducts } = action.payload;

      // ! Filter with All
      if (elements === "All") {
        return {
          ...state,
          products: AllProducts,
          inputValue: "sort - price",
          companyInputValue : "sort-company"
        };
      };

      // ! Filter with Mobile
      if (elements === "Mobile") {
        const MobileCategory = AllProducts.filter((items) => {
          return items.category === elements.toLowerCase();
        });
        return {
          ...state,
          products: MobileCategory,
        };
      };

      // ! Filter with Laptop
      if (elements === "Laptop") {
        const LaptopCategory = AllProducts.filter((items) => {
          return items.category === elements.toLowerCase();
        });
        return {
          ...state,
          products: LaptopCategory,
        };
      };

      // ! Filter with Computer
      if (elements === "Computer") {
        const ComputerCategory = AllProducts.filter((items) => {
          return items.category === elements.toLowerCase();
        });
        return {
          ...state,
          products: ComputerCategory,
        };
      };

      // ! Filter with Accessories
      if (elements === "Accessories") {
        const AccessoriesCategory = AllProducts.filter((items) => {
          return items.category === elements.toLowerCase();
        });
        return {
          ...state,
          products: AccessoriesCategory,
        };
      };

      // ! Filter with Watch
      if (elements === "watch") {
        const watchCategory = AllProducts.filter((items) => {
          return items.category === elements.toLowerCase();
        });
        return {
          ...state,
          products: watchCategory,
        };
      };
    }

    case "Set_Company_Filter": {
      const { AllProducts, companys } = action.payload;

      // ! Filter with samsung Company
      if (companys === "samsung") {
        const sumsungFilters = AllProducts.filter((items) => items.company === companys);
        return {
          ...state,
          products : sumsungFilters,
          companyInputValue : companys,
        }
      };

      // ! Filter with apple Company
      if (companys === "apple") {
        const appleFilters = AllProducts.filter((items) => items.company === companys);
        return {
          ...state,
          products : appleFilters,
          companyInputValue : companys,
        }
      };

      // ! Filter with rolex Company
      if (companys === "rolex") {
        const rolexFilters = AllProducts.filter((items) => items.company === companys);
        return {
          ...state,
          products : rolexFilters,
          companyInputValue : companys,
        }
      };

      // ! Filter with dell Company
      if (companys === "dell") {
        const dellFilters = AllProducts.filter((items) => items.company === companys);
        return {
          ...state,
          products : dellFilters,
          companyInputValue : companys,
        }
      };

      // ! Filter with nokia Company
      if (companys === "nokia") {
        const nokiaFilters = AllProducts.filter((items) => items.company === companys);
        return {
          ...state,
          products : nokiaFilters,
          companyInputValue : companys,
        }
      };

      // ! Filter with asus Company
      if (companys === "asus") {
        const asusFilters = AllProducts.filter((items) => items.company === companys);
        return {
          ...state,
          products : asusFilters,
          companyInputValue : companys,
        }
      };

      // ! Filter with lenova Company
      if (companys === "lenova") {
        const lenovaFilters = AllProducts.filter((items) => items.company === companys);
        return {
          ...state,
          products : lenovaFilters,
          companyInputValue : companys,
        }
      };
    }

    case "SET_COLOR_FILTER": {
      const {AllProducts, colors } = action.payload;

      // ! #ff0000 Color filter
      if (colors === "#ff0000") {
        const firstColorFilter = AllProducts.filter((items) => items.colors.includes(colors));
        return {
          ...state,
          products : firstColorFilter,
        }
      };

      // ! #000 Color filter
      if (colors === "#000") {
        const secondColorFilter = AllProducts.filter((items) => items.colors.includes(colors));
        return {
          ...state,
          products : secondColorFilter,
        }
      };

      // ! #CDD0D0 Color filter
      if (colors === "#CDD0D0") {
        const thirdColorFilter = AllProducts.filter((items) => items.colors.includes(colors));
        return {
          ...state,
          products : thirdColorFilter,
        }
      };

      // ! #000000 Color filter
      if (colors === "#000000") {
        const fourColorFilter = AllProducts.filter((items) => items.colors.includes(colors));
        return {
          ...state,
          products : fourColorFilter,
        }
      };

      // ! #22D3EF Color filter
      if (colors === "#22D3EF") {
        const fifthColorFilter = AllProducts.filter((items) => items.colors.includes(colors));
        return {
          ...state,
          products : fifthColorFilter,
        }
      };
    }

    case "CLEAR_FILTERS": {
      const priceArr = action.payload.map((items) => items.price);
      const maxPrice = Math.max(...priceArr);
      return {
        ...state,
        products: action.payload,
        inputValue: "sort - price",
        companyInputValue: "sort-company",
        tickValue : false,
        price : maxPrice,
      };
    }

    case "SEARCH_ITEM": {
      const {AllProducts, inputValue} = action.payload;
      const searchedItem = AllProducts.filter((item) => item.name.toLowerCase().includes(inputValue));
      return {
        ...state,
        products: searchedItem,
      };
    }

    default: {
      return state;
    }
  }
};
