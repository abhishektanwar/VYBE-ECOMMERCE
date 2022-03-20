import React from "react";
import PageHeroHeader from "../../components/PageHeroHeader";
import ProductCard from "../../components/ProductCard";
import "./wishlist.css";
const Wishlist = () => {
  const imageUrl = "https://picsum.photos/200/300";
  return (

    <div >
      <PageHeroHeader title={'Your wishlist'} />
      <section className="wishlist-container margin-top-60">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
          (slide, index) => {
            return (
              <ProductCard
                variant="horizontal"
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
  );
};

export default Wishlist;
