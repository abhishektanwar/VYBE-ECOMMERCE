import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import { useState } from "react";
import ModalWrapper from "./components/ModalWrapper";

function App() {
	const [showModal,setShowModal] = useState(false);

	return (
		<div className="App">
			<Home showModal={showModal} setShowModal={setShowModal} />
			<ModalWrapper showModal={showModal} setShowModal={setShowModal} />
		</div>
	);
}

export default App;
