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
      <div className="grid-container-skleton">
        <FilterBar />
        <section className="products-listing">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (slide, index) => {
              return (
                <ProductCard
                  imagePath={imageUrl}
                  badgeText={"New Arrival"}
                  title={"One ear 100 headphones black"}
                  price={1890}
                  actualPrice={2099}
                  discountPercentage={10}
                />
              );
            }
          )}
        </section>
      </div>
    </>
  );
};

export default ProductListing;
