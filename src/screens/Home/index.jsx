import React from "react";
import CardSlider from "../../components/CardSlider";
import ImageSlider from "../../components/ImageSlider";
import { SliderData } from "../../components/ImageSlider/SliderData";
import FeaturedContainer from "../../components/FeaturedContainer";
import { useProductListing } from "../../Contexts/ProductListingContext";
import { useDocumentTitle } from "../../helpers/helpers";
import {useNavigate} from 'react-router-dom';
import Button from "../../components/Header/Button";
import "./home.css";

const Home = () => {
  const { productListingState } = useProductListing();
  const { categoriesData, products } = productListingState;
  const navigate = useNavigate();
  useDocumentTitle("Trek Shark | Home");
  return (
    <>
      <ImageSlider sliderData={SliderData} />
      <div className="flex-row flex-justify-content-center">
      <Button
        buttonText="Explore Products"
        buttonStyle="hero-image-btn"
        onClick={() => navigate("/products")}
      />
      </div>
      <FeaturedContainer
        featuredContainerTitle={"Featured Categories"}
        categories={categoriesData}
      />
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className="margin-top-60"
      >
        <CardSlider products={products} />
      </div>
    </>
  );
};

export default Home;
