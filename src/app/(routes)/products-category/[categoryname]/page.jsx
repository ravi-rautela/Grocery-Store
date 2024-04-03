import GlobleApi from "@/app/_utils/GlobleApi";
import React from "react";
import TopCategoryList from "../_componets/TopCategoryList";
import ProductList from "@/app/_component/ProductList";

const ProductCategory = async ({ params }) => {
  const categoryList = await GlobleApi.getCategoryList();
  const productList = await GlobleApi.getProductsByCategory(
    params.categoryname
  );

  return (
    <div>
      <h1 className="font-bold p-2 text-3xl text-center bg-primary text-white">
        {params.categoryname}
      </h1>
      <TopCategoryList categoryList={categoryList} selectedCategory={params.categoryname } />
      <div className="p-5 md:p-10">
        <ProductList productList={productList} />
      </div>
    </div>
  );
};

export default ProductCategory;
