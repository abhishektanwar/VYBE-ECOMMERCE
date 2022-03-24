import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import utils from "../../utils";
import { useAuth } from "../AuthDialogContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts,setCartProducts] = useState([]);
  const [isCartLoading, setIsCartLoading] = useState(false);
  const [cartError, setCartError] = useState({
    errorExists: false,
    errorMessage: "",
  });

	const { user } = useAuth();
	useEffect(
		() =>
			(async () => {
				if (user) {
					setIsCartLoading(true);
          try {
						const res = await axios.get("/api/user/cart",{
              headers: { authorization: utils.getLocalStorage("authToken") },
            });
						if (res.status === 200)
            console.log("Cart context",res)
            setCartProducts(res.data.cart)
            setCartError({ errorExists: false, errorMessage: "" });
            setIsCartLoading(false)
					} catch (e) {
						setCartError({
              errorExists: true,
              errorMessage: "Failed to load wishlist.Please try again later.",
            });
					}
				} else {
          console.log("user not found", user);
          setCartProducts([]);
          setIsCartLoading(false);
				}
			})(),
		[user]
	);

	return (
		<CartContext.Provider value={{ cartProducts, isCartLoading, cartError, setCartError, setIsCartLoading, setCartProducts }}>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);


export { CartProvider, useCart };
