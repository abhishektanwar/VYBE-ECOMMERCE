import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductListing from "./screens/ProductListing/ProductListing";
import Header from "./components/Header";
import Wishlist from "./screens/Wishlist";
import Cart from "./screens/Cart";
function App() {
	return (
		<div className="App">
			<nav className="nav-bar shadow-box" id="my-nav-bar">
        <Header />
      </nav>
			<Router>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/products" exact element={<ProductListing />} />
					<Route path="/wishlist" exact element={<Wishlist />} />
					<Route path="/cart" exact element={<Cart />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
