import React from "react";
import Header from "../../components/Header";

const Home = ({showModal,setShowModal}) => {
  return (
    <nav className="nav-bar shadow-box" id="my-nav-bar">
      <Header showModal={showModal} setShowModal={setShowModal} />
    </nav>
  );
};

export default Home;
