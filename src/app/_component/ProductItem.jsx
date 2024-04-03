import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductItemDetails from "./ProductItemDetails";

const ProductItem = ({ product }) => {
  return (
    <div className="p-2 md:p-4 flex flex-col items-center justify-center gap-2 border rounded-lg hover:scale-105 hover:shadow-md transition-all ease-in-out bg-white">
      <Image
        src={
          process.env.NEXT_PUBLIC_BASE_URL +
          product.attributes.images.data[0].attributes.url
        }
        width={200}
        height={200}
        alt="product"
        className="w-[200px] h-[200px] object-contain mix-blend-multiply cursor-pointer"
      />
      <h2 className="font-bold ">{product.attributes.Name}</h2>
      <div className="flex flex-row-reverse gap-3">
        <h2 className="font-semibold line-through text-gray-400">
          MRP: ${product.attributes.mrp}
        </h2>

        {product.attributes.sellingPrice && (
          <h2 className="font-semibold text-green-600">
            Price: ${product.attributes.sellingPrice}
          </h2>
        )}
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-primary hover:bg-primary hover:text-white"
          >
            Add to cart
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <ProductItemDetails product={product} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductItem;
