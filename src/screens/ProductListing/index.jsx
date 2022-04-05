import React from "react";
import FilterBar from "../../components/FilterBar";
import ProductCard from "../../components/ProductCard";
import SelectedFilter from "../../components/SelectedFilter";
import { useProductListing } from "../../Contexts/ProductListingContext";
import {
  categoryFilter,
  getPricedProducts,
  getSortedProducts,
  starFilter,
} from "../../helpers/helpers";
import { useDocumentTitle } from "../../helpers/helpers";
import "./product-listing.css";

const ProductListing = () => {
  const { productListingState } = useProductListing();
  const { products, sortBy, priceRange, categories, rating } =
    productListingState;
  const priceFilteredProducts = getPricedProducts(products, priceRange);
  const categoryFilteredProducts = categoryFilter(
    priceFilteredProducts,
    categories
  );
  const starRatingFilteredProducts = starFilter(
    categoryFilteredProducts,
    rating
  );
  const finalFilteredProducts = getSortedProducts(
    starRatingFilteredProducts,
    sortBy
  );
  useDocumentTitle("Trek Shark | Products");

  return (
    <>
      <SelectedFilter />
      <div className="grid-container-skleton">
        <FilterBar />
        <section className="products-listing">
          {finalFilteredProducts.map((product, index) => {
            return (
              <ProductCard
                variant="vertical"
                cartActionBtnContainer={false}
                product={product}
                key={product._id}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default ProductListing;
