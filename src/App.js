import "./App.css";
import Home from "./screens/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from "./components/Header";
function App() {
	return (
		<div className="App">
			<nav className="nav-bar shadow-box" id="my-nav-bar">
        <Header />
      </nav>
			<Router>
				<Routes>
					<Route path="/" exact element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
