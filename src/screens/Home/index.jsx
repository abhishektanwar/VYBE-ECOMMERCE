import React from "react";
import CardSlider from "../../components/CardSlider";
import ImageSlider from "../../components/ImageSlider";
import { SliderData } from "../../components/ImageSlider/SliderData";
import FeaturedContainer from "../../components/FeaturedContainer";
import { useProductListing } from "../../Contexts/ProductListingContext";
import { useDocumentTitle } from "../../helpers/helpers";
import "./home.css";

const Home = () => {
  const { productListingState } = useProductListing();
  const { categoriesData, products } = productListingState;
  useDocumentTitle("Trek Shark | Home");
  return (
    <>
      <ImageSlider sliderData={SliderData} />
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
