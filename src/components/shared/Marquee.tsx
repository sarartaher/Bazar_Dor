"use client";

import { use } from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const fetchProducts = fetch(
  "https://openapi.programming-hero.com/api/bazardor/products?limit=10",
  { cache: "force-cache" },
).then((res) => res.json());

const Marquee = () => {
  const data = use(fetchProducts);
  const products = Array.isArray(data) ? data : data?.data || [];

  return (
    <div className="w-full border-y border-gray-200 bg-white py-2">
      <MarqueeText>
        <div className="flex divide-x divide-gray-200">
          {products.map((item: any) => (
            <div
              key={item.id}
              className="flex items-center gap-2 px-6 shrink-0 text-sm"
            >
              <span>{item.image}</span>
              <span className="font-semibold text-gray-800">{item.nameBn}</span>
              <span className="text-gray-600">
                {item.today} টাকা/{item.unit === "kg" ? "কেজি" : item.unit}
              </span>
              <span
                className={`font-semibold ${
                  item.change?.dir === "up"
                    ? "text-red-600"
                    : "text-emerald-600"
                }`}
              >
                {item.change?.dir === "up" ? "▲" : "▼"}{" "}
                {Math.abs(item.change?.pct || 0)}%
              </span>
            </div>
          ))}
        </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;
