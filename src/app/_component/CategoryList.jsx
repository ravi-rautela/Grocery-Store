import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = ({ categoryList }) => {
  return (
    <div className="mt-5">
      <h2 className="text-green-600 text-2xl md:text-3xl  font-bold my-4">
        Shop By Category
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-4">
        {categoryList.map((category, index) => (
          <Link
            href={"/products-category/" + category.attributes.name}
            key={index}
            className="flex flex-col items-center p-3 rounded-md bg-green-50 gap-1 hover:scale-110 transition-all ease-in-out cursor-pointer hover:bg-green-200"
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_BASE_URL +
                category?.attributes.icon.data[0].attributes.url
              }
              width={50}
              height={50}
              alt="logo"
            />
            <h2 className="text-green-800 text-xs md:text-sm">
              {category.attributes.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
