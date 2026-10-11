"use client";
import { useState } from "react";
import ProductCard from "@/components/Products/ProductCard";
import { Product } from "@/interfaces/ProductProps";

const CategoryProducts = ({ products }: { products: Product[] }) => {
  const [sort, setSort] = useState("default");

  const sorted = [...products];
  if (sort === "low") sorted.sort((a, b) => a.today - b.today);
  if (sort === "high") sorted.sort((a, b) => b.today - a.today);

  return (
    <>
      <div className="mb-4 flex items-center justify-end gap-2">
        <label htmlFor="sort" className="font-semibold">
          সাজান:
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="select w-auto"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low">দাম: কম থেকে বেশি</option>
          <option value="high">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};

export default CategoryProducts;
