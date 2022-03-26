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
function App() {
  return (
    <div className="App">
      <Router>
        <ModalProvider>
          <AuthProvider>
            <ProductListingProvider>
              <nav className="nav-bar shadow-box" id="my-nav-bar">
                <Header />
              </nav>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/products" exact element={<ProductListing />} />
                <Route path="/wishlist" exact element={<Wishlist />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="/mock-api" element={<MockmanEs />} />
              </Routes>
            </ProductListingProvider>
          </AuthProvider>
        </ModalProvider>
      </Router>
    </div>
  );
}

export default App;
