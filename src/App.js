import "./App.css";
import Home from "./screens/Home";
import { useState } from "react";
import ModalWrapper from "./components/ModalWrapper";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { AuthDialogProvider } from "./Contexts/AuthDialogContext";
import Login from "./components/Authentication/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthDialogProvider>
			{/* <Login /> */}
          <nav className="nav-bar shadow-box" id="my-nav-bar">
            <Header />
          </nav>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </AuthDialogProvider>
      </Router>
    </div>
  );
}

export default App;
