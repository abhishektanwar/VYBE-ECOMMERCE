import React from "react";
import FilterBar from "../../components/FilterBar";
import Button from "../../components/Header/Button";
import PageHeroHeader from "../../components/PageHeroHeader";
import ProductCard from "../../components/ProductCard";
import SelectedFilter from "../../components/SelectedFilter";
import "./product-listing.css";
const ProductListing = () => {
  const imageUrl = "https://picsum.photos/200/300";

  return (
    <>
      <PageHeroHeader title="Title" subTitle="sub title" />
      <SelectedFilter />
      <FilterBar />
    </>
  );
};

export default ProductListing;
