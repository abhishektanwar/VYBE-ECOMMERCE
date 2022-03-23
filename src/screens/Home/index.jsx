import React from "react";
import CardSlider from "../../components/CardSlider";
import ImageSlider from "../../components/ImageSlider";
import { SliderData } from "../../components/ImageSlider/SliderData";
import "./home.css";
import {Link} from 'react-router-dom'
import FeaturedContainer from '../../components/FeaturedContainer'
import {categories} from '../../backend/db/categories'
import {products} from '../../backend/db/products';
const Home = () => {
  return (
    <>
      <button><Link to="/products" >Products page</Link></button>
      <button><Link to="/wishlist" >Wishlist page</Link></button>
      <button><Link to="/cart" >Cart page</Link></button>
      
      <ImageSlider sliderData={SliderData} />
      <FeaturedContainer featuredContainerTitle={'Featured Categories'} categories={categories} />
      <div style={{ display: "flex", justifyContent: "space-around" }} className="margin-top-60">
        <CardSlider products={products} slides={[1,2,3,4,5,6,7,8]} />
      </div>
    </>
  );
};

export default Home;
