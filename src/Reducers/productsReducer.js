import { dispatchActionTypes } from "./dispatchActionTypes";

export const productsReducer = (state, action) => {
  const {
    LOAD_DATA,
    LOADING_DATA,
    LOW_TO_HIGH,
    HIGH_TO_LOW,
    PRICE_RANGE,
    CATEGORY,
    RATING,
    CLEAR,
    REMOVE_FILTER,
  } = dispatchActionTypes;
  switch (action.type) {
    case LOAD_DATA:
      if (action.payload.products) {
        return {
          ...state,
          products: [...action.payload.products],
          isProductLoading: action.payload.status,
        };
      }
      if (action.payload.categories) {
        return {
          ...state,
          categoriesData: [...action.payload.categories],
          categories: action.payload.categoriesFilterData,
          isProductLoading: action.payload.status,
        };
      }

    case LOADING_DATA:
      return {
        ...state,
        isProductLoading: action.payload.status,
      };
    case LOW_TO_HIGH:
      return {
        ...state,
        sortBy: action.type,
      };
    case HIGH_TO_LOW:
      return {
        ...state,
        sortBy: action.type,
      };
    case PRICE_RANGE:
      if (action.payload.type === "LOWER")
        return {
          ...state,
          priceRange: { ...state["priceRange"], lower: action.payload.price },
        };
      if (action.payload.type === "HIGHER")
        return {
          ...state,
          priceRange: { ...state["priceRange"], higher: action.payload.price },
        };
    case CATEGORY:
      return {
        ...state,
        categories: {
          ...state["categories"],
          [action.payload]: !state.categories[action.payload],
        },
      };
    case CLEAR:
      return {
        ...state,
        sortBy: "",
        categories: {},
        priceRange: { lower: "", higher: "" },
        discount: "",
        rating: -1,
        isProductLoading: false,
      };
    case REMOVE_FILTER:
      if (
        action.payload.filter === LOW_TO_HIGH ||
        action.payload.filter === HIGH_TO_LOW
      ) {
        return {
          ...state,
          sortBy: "",
        };
      }
      if (action.payload.filter === PRICE_RANGE) {
        return {
          ...state,
          priceRange: { lower: "", higher: "" },
        };
      }
      if (action.payload.filter === CATEGORY) {
        return {
          ...state,
          categories: {
            ...state["categories"],
            [action.payload.value]: false,
          },
        };
      }

    case RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};
