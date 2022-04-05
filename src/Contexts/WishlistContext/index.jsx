import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../AuthDialogContext";
import utils from "../../utils";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [isWishlistLoading, setIsWishlistLoading] = useState(false);
  const [wishlistError, setWishlistError] = useState({
    errorExists: false,
    errorMessage: "",
  });

  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      if (user) {
        setIsWishlistLoading(true);
        try {
          const res = await axios.get("/api/user/wishlist", {
            headers: { authorization: utils.getLocalStorage("authToken") },
          });
          if (res.status === 200) {
            setWishlistProducts(res.data.wishlist);
            setWishlistError({ errorExists: false, errorMessage: "" });
            setIsWishlistLoading(false);
          }
        } catch (e) {
          setWishlistError({
            errorExists: true,
            errorMessage: "Failed to load wishlist.Please try again later.",
          });
        }
      } else {
        setWishlistProducts([]);
      }
    })();
  }, [user]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistError,
        wishlistProducts,
        isWishlistLoading,
        setWishlistProducts,
        setIsWishlistLoading,
        setWishlistError,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
