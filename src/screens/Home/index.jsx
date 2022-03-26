import React from "react";
import CardSlider from "../../components/CardSlider";
import ImageSlider from "../../components/ImageSlider";
import { SliderData } from "../../components/ImageSlider/SliderData";
import "./home.css";
import { Link } from "react-router-dom";
import FeaturedContainer from "../../components/FeaturedContainer";
import { useProductListing } from "../../Contexts/ProductListingContext";

const Home = () => {
  const { productListingState } = useProductListing();
  const { categoriesData, products } = productListingState;
  return (
    <>
      <button>
        <Link to="/products">Products page</Link>
      </button>
      <button>
        <Link to="/wishlist">Wishlist page</Link>
      </button>
      <button>
        <Link to="/cart">Cart page</Link>
      </button>

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
