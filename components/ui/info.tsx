"use client";

import useCart from "@/hooks/use-cart";
import type { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import type { MouseEventHandler } from "react";
import Button from "../button";
import Currency from "./currency";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900 dark:text-white">
          <Currency value={data?.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-white">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          className="flex items-center gap-x-2 group dark:bg-slate-500"
          onClick={addToCart}
        >
          Add to Cart
          <ShoppingCart className="group-hover:rotate-6 transition" />
        </Button>
      </div>
    </div>
  );
};
export default Info;
