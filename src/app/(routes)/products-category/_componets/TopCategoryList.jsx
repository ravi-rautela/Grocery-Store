import Image from "next/image";
import Link from "next/link";
import React from "react";
const TopCategoryList = async ({ categoryList, selectedCategory }) => {
  return (
    <div className="flex gap-4  overflow-auto mx-7 md:mx-20 justify-center mt-2">
      {categoryList.map((category, index) => (
        <Link
          href={"/products-category/" + category.attributes.name}
          key={index}
          className={`flex flex-col items-center p-2 rounded-md bg-green-300 gap-1 hover:scale-105 transition-all ease-in-out cursor-pointer hover:bg-green-400 w-[150px] min-w-[100px] ${
            selectedCategory == category.attributes.name &&
            "bg-green-600 text-white"
          }`}
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
          <h2
            className={`text-green-800 text-xs md:text-sm ${
              selectedCategory == category.attributes.name && "text-white"
            }`}
          >
            {category.attributes.name}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export default TopCategoryList;
