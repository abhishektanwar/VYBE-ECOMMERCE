import axios from "axios";
import { useState } from "react";
import utils from "../utils";
import { toast } from "react-toastify";
import { useWishlist } from "../Contexts/WishlistContext";
import { useCart } from "../Contexts/CartContext";


function useProductCard(product){
  const [addingToWishList, setAddingToWishlist] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);
  const [removingFromWishlist, setRemovingFromWishlist] = useState(false);
  const { wishlistProducts, setWishlistProducts } = useWishlist();
  const { cartProducts, setCartProducts } = useCart();

  const addProductToWishlist = async (product) => {
    setAddingToWishlist(true);
    try {
      // const res = await addToWishlistService(product, auth.token);
      const res = await axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: utils.getLocalStorage("authToken") } }
      );
      if (res.status === 201) {
        console.log(res);
        toast.success("Added to wishlist");
        setAddingToWishlist(false);
        setWishlistProducts([...res.data.wishlist]);
      }
    } catch (err) {
      toast.error("Couldn't add to wishlist , try again later!");
    }
  };

  const removeProductFromWishlist = async (product) => {
    setRemovingFromWishlist(true);
    try {
      const res = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers: { authorization: utils.getLocalStorage("authToken") },
      });
      console.log("removal ", res);
      if (res.status === 200) {
        toast.success("Removed from wishlist");
        setRemovingFromWishlist(false);
        console.log(res);
        setWishlistProducts([...res.data.wishlist]);
      }
    } catch (err) {
      toast.error("Please try again after some time");
    }
  };

  const removeProductFromCart = async (product) => {
    setAddingToCart(true);
    try {
      const res = await axios.delete(`/api/user/cart/${product._id}`, {
        headers: { authorization: utils.getLocalStorage("authToken") },
      });

      if (res.status === 200) {
        toast.success("removed from cart");
        setAddingToCart(false);
        // setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
        setCartProducts([...res.data.cart]);
      }
    } catch (err) {
      toast.error("Couldn't add to cart , try again later!");
    }
  };

  const addProductToCart = async (product) => {
    setAddingToCart(true);
    try {
      const res = await axios.post(
        "/api/user/cart",
        { product },
        { headers: { authorization: utils.getLocalStorage("authToken") } }
      );

      if (res.status === 201) {
        toast.success("Added to cart");
        setAddingToCart(false);
        setCartProducts([...res.data.cart]);
      }
    } catch (err) {
      toast.error("Couldn't add to cart , try again later!");
    }
  };

  const handleProductQuantityInCart = async (product,operation) => {
    let res = null;
    // setUpdatingCart(true);

    try {
      if (product.qty === 1 && operation === "decrement") {
        res = await axios.delete(`/api/user/cart/${product._id}`,{headers:{authorization:utils.getLocalStorage('authToken')}});
      } else {
        res = await axios.post(`/api/user/cart/${product._id}`,{action:{type:operation}},{headers:{authorization:utils.getLocalStorage('authToken')}});
      }

      console.log("increment", res.data.cart);
      if (res.status === 200) {
        // setUpdatingCart(false);
        toast.success("Successfully Updated cart");
        setCartProducts([...res.data.cart ]);
      }
    } catch (err) {
      toast.error("Could not update cart, try again later");
    }
  };

  return {addProductToWishlist,removeProductFromWishlist,removeProductFromCart,addProductToCart,handleProductQuantityInCart}
}

export default useProductCard;