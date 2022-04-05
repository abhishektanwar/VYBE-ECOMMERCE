import "./App.css";
import Home from "./screens/Home";
import ModalWrapper from "./components/ModalWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./screens/ProductListing";
import Wishlist from "./screens/Wishlist";
import Cart from "./screens/Cart";
import { AuthProvider } from "./Contexts/AuthDialogContext";
import { ModalProvider } from "./Contexts/ModalContext";
import MockmanEs from "mockman-js";
import { ProductListingProvider } from "./Contexts/ProductListingContext";
import { WishlistProvider } from "./Contexts/WishlistContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./Contexts/CartContext";
function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" autoClose={1200} />
      <Router>
        <ModalProvider>
          <AuthProvider>
            <ProductListingProvider>
              <WishlistProvider>
                <CartProvider>
                  <nav className="nav-bar shadow-box" id="my-nav-bar">
                    <Header />
                  </nav>
                  <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route
                      path="/products"
                      exact
                      element={<ProductListing />}
                    />
                    <Route path="/wishlist" exact element={<Wishlist />} />
                    <Route path="/cart" exact element={<Cart />} />
                    <Route path="/mock-api" element={<MockmanEs />} />
                  </Routes>
                </CartProvider>
              </WishlistProvider>
            </ProductListingProvider>
          </AuthProvider>
        </ModalProvider>
      </Router>
    </div>
  );
}

export default App;
