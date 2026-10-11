"use client";

import { use } from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { units } from "@/components/Products/ProductCard";
import { Product } from "@/interfaces/ProductProps";

const fetchProducts = fetch(
  "https://openapi.programming-hero.com/api/bazardor/products",
  { cache: "force-cache" },
).then((res) => res.json());

const Marquee = () => {
  const data = use(fetchProducts);
  const products: Product[] = Array.isArray(data) ? data : data?.data || [];

  return (
    <div className="w-full border-y border-gray-200 bg-white py-2">
      <MarqueeText>
        <div className="flex divide-x divide-gray-200">
          {products.map((item) => {
            const percent = Math.abs(item.change.pct).toLocaleString("bn-BD");
            let arrow = "—";
            let color = "text-gray-500";

            if (item.change.dir === "up") {
              arrow = "▲";
              color = "text-green-600";
            }
            if (item.change.dir === "down") {
              arrow = "▼";
              color = "text-red-600";
            }

            return (
              <div
                key={item.id}
                className="flex shrink-0 items-center gap-2 px-6 text-sm"
              >
                <span>{item.image}</span>
                <span className="font-semibold">{item.nameBn}</span>
                <span className="text-gray-600">
                  {item.today.toLocaleString("bn-BD")} টাকা/
                  {units[item.unit] || item.unit}
                </span>
                <span className={`font-semibold ${color}`}>
                  {arrow} {percent}%
                </span>
              </div>
            );
          })}
        </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;
