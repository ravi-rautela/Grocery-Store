"use client";

import { Button } from "@/components/ui/button";
import { LayoutGrid, SearchIcon, ShoppingBag } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import GlobleApi from "../_utils/GlobleApi";

const Header = () => {
  const [categoryList, setCategoryList] = useState([]);

  // call the getCategoryList Method
  useEffect(() => {
    getCategoryList();
  }, []);

  // getCategoryList
  const getCategoryList = () => {
    GlobleApi.getCategory().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };

  return (
    <>
      <div className="flex justify-between pr-4 md:pr-8 shadow-sm">
        <div className="flex items-center gap-2 md:gap-5 p-3 md:p-5">
          {/* Left Logo */}
          <div className="flex items-center cursor-pointer">
            <Image src="/logo.png" width={50} height={50} alt="logo" />
            <div className="flex flex-col">
              <p className="text-orange-600 md:text-2xl text-xl font-semibold ">
                Grocery
              </p>
              <span>
                <p className="text-green-500 font-semibold md:text-2xl text-xl">
                  Store
                </p>
              </span>
            </div>
          </div>
          {/* category bar */}

          {/* DropDown menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none border-none">
              {" "}
              <div className="hidden md:flex border border-grey rounded-full p-2 gap-1 bg-blue-50 items-center px-10 cursor-pointer">
                <LayoutGrid className="h-5 w-5" /> Category
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categoryList.map((category, index) => (
                <DropdownMenuItem key={index} className="flex gap-3 cursor-pointer">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_BASE_URL +
                        category?.attributes.icon.data[0]
                        .attributes.url
                    }
                    unoptimized={true}
                    alt="icon"
                    width={23}
                    height={23}
                  />
                  <h1 className="text-lg">{category?.attributes?.name}</h1>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search bar */}
          <div className="md:flex items-center gap-3 border border-grey p-2 rounded-full px-6 hidden">
            <SearchIcon className="h-5 w-5" />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none"
            />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <h2 className="flex items-center gap-2">
            <ShoppingBag /> 0{" "}
          </h2>
          <Button>Login</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
