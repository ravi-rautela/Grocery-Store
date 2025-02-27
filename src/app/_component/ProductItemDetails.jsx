"use client";

import { Button } from "@/components/ui/button";
import { LoaderCircle, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import GlobleApi from "../_utils/GlobleApi";
import { toast } from "sonner";
import { UpdateCartContext } from "../_context/UpdateCartContext";

const jwt = sessionStorage.getItem("jwt");
const user = JSON.parse(sessionStorage.getItem("user"));
const ProductItemDetails = ({ product }) => {
  const [productPrice, setProductPrice] = useState(
    product.attributes.sellingPrice
      ? product.attributes.sellingPrice
      : product.attributes.mrp
  );

  const [quantity, setQuatity] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Update Cart section
  const { updateCart, setUpdateCart } = useContext(UpdateCartContext);

  const addToCart = () => {
    setLoading(true);
    if (!jwt) {
      router.push("/sign-in");
      setLoading(false);
      return;
    }
    const data = {
      data: {
        quantity: quantity,
        amount: (quantity * productPrice).toFixed(2),
        products: product.id,
        users_permissions_users: user.id,
        userId: user.id,
      },
    };

    GlobleApi.addToCart(data, jwt).then(
      (res) => {
        toast("Item added successfully.");
        setUpdateCart(!updateCart);
        setLoading(false);
      },
      (e) => {
        toast("Error while adding into cart.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-7 bg-white text-black">
      <Image
        src={
          process.env.NEXT_PUBLIC_BASE_URL +
          product.attributes.images.data[0].attributes.url
        }
        width={300}
        height={300}
        alt="product"
        className="bg-gray-200 p-3 md:p-5 md:h-[350px] md:w-[300px] object-contain rounded-lg "
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">{product.attributes.Name}</h2>
        <h2 className="text-sm text-gray-400">
          {product.attributes.Description}
        </h2>
        <div className="flex gap-3 ">
          <h2 className="font-semibold line-through text-gray-400 text-2xl">
            MRP: ${product.attributes.mrp}
          </h2>

          {product.attributes.sellingPrice && (
            <h2 className="font-semibold text-green-600 text-2xl">
              Price: ${product.attributes.sellingPrice}
            </h2>
          )}
        </div>
        <h2 className="text-lg font-semibold">
          Quantity ({product.attributes.itemQuantityType})
        </h2>
        <div className="flex items-baseline gap-3">
          <div className="flex items-center gap-6 border p-2 rounded-sm px-5">
            <button
              disabled={quantity === 1}
              onClick={() => setQuatity(quantity - 1)}
              className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg"
            >
              {" "}
              -{" "}
            </button>
            <h2 className="font-bold text-xl">{quantity}</h2>
            <button
              onClick={() => setQuatity(quantity + 1)}
              className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg"
            >
              {" "}
              +{" "}
            </button>
          </div>
          <h2 className="mt-2 font-semibold">
            =
            <span className="text-green-600 text-xl">
              {" "}
              ${(quantity * productPrice).toFixed(2)}
            </span>
          </h2>
        </div>
        <Button className="flex gap-4" onClick={() => addToCart()}>
          <ShoppingBasket />
          {loading ? <LoaderCircle className="animate-spin" /> : "Add To Cart"}
        </Button>
        <h2>
          <span className="font-bold">Category: </span>
          {product.attributes.categories.data[0].attributes.name}
        </h2>
      </div>
    </div>
  );
};

export default ProductItemDetails;
