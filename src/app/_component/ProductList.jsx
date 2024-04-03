import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ productList }) => {
  return (
    <div className="mt-5">
      <h2 className="text-green-600 text-2xl md:text-3xl mix-blend-multiply font-bold my-4">
        Our Popular Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {productList.map((product, index) => {
          return <ProductItem product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
