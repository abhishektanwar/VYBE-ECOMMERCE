import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { dispatchActionTypes } from "../../Reducers/dispatchActionTypes";
import { productsReducer } from "../../Reducers/productsReducer";

const ProductListingContext = createContext();

const ProductListingProvider = ({ children }) => {
  const { LOAD_DATA, LOADING_DATA } = dispatchActionTypes;
  const [productListingState, productListingDispatch] = useReducer(
    productsReducer,
    {
      products: [],
      sortBy: "",
      categories: {},
      priceRange: { lower: "", higher: "" },
      discount: "",
      rating: -1,
      isProductLoading: false,
      categoriesData: [],
    }
  );

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/products");
      productListingDispatch({
        type: LOADING_DATA,
        payload: { status: true },
      });
      if (res.status === 200) {
        const products = res.data.products;
        productListingDispatch({
          type: LOAD_DATA,
          payload: { products: products, status: false },
        });
      }
    })();
    (async () => {
      const res = await axios.get("/api/categories");
      productListingDispatch({
        type: LOADING_DATA,
        payload: { status: true },
      });
      if (res.status === 200) {
        const categories = res.data.categories;
        const categoriesFilterData = categories.reduce(
          (acc, item) => ({ ...acc, [item.category]: false }),
          {}
        );
        productListingDispatch({
          type: LOAD_DATA,
          payload: {
            categories: categories,
            status: false,
            categoriesFilterData: categoriesFilterData,
          },
        });
      }
    })();
  }, []);

  return (
    <ProductListingContext.Provider
      value={{ productListingState, productListingDispatch }}
    >
      {children}
    </ProductListingContext.Provider>
  );
};

const useProductListing = () => useContext(ProductListingContext);

export { useProductListing, ProductListingProvider };
