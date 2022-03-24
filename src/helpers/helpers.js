const getSortedProducts = (products, sortBy) => {
  if (sortBy === "LOW_TO_HIGH")
    return [...products].sort(
      (item1, item2) => item1.price.current - item2.price.current
    );
  if (sortBy === "HIGH_TO_LOW")
    return [...products].sort(
      (item1, item2) => item2.price.current - item1.price.current
    );

  return products;
};
const getPricedProducts = (products, priceRange) => {
  if (priceRange.lower === "" && priceRange.higher === "") return products;
  if (priceRange.lower === "" && priceRange.higher !== "") {
    return products.filter((item) => item.price.current <= priceRange.higher);
  }
  if (priceRange.higher === "" && priceRange.lower !== "") {
    return products.filter((item) => item.price.current >= priceRange.lower);
  }
  return products.filter(
    (item) =>
      item.price.current <= priceRange.higher &&
      item.price.current >= priceRange.lower
  );
};

const categoryFilter = (products, categories) => {
  let newDataList = [];
  let categoryFilterApplied = false;
  for (let category in categories) {
    if (categories[category]) {
      categoryFilterApplied = true;
      console.log(categories[category], category);
      let filteredData = products.filter((prod) => category === prod.category);
      newDataList.push(...filteredData);
    }
  }
  return categoryFilterApplied ? newDataList : products;
};


const starFilter = (products, rating) => {
  if (rating === -1) return products;
  return products.filter((product) => product.rating >= rating);
};

export {starFilter, categoryFilter, getPricedProducts, getSortedProducts}