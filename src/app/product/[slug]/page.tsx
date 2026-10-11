import ProtectedRoute from "@/components/shared/ProtectedRoute";
import { units } from "@/components/Products/ProductCard";
import { Product } from "@/interfaces/ProductProps";
import { notFound } from "next/navigation";

const bn = (n: number) => n.toLocaleString("bn-BD");

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
  const products: Product[] = Array.isArray(data) ? data : data.data;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const markets = product.markets;

  const minPrice = Math.min(...markets.map((m) => m.min));
  const maxPrice = Math.max(...markets.map((m) => m.max));

  let total = 0;
  for (const m of markets) {
    total = total + (m.min + m.max) / 2;
  }
  const avgPrice = Math.round(total / markets.length);

  // Cheapest market = lowest "min", priciest market = highest "max"
  const cheapest = markets.find((m) => m.min === minPrice);
  const priciest = markets.find((m) => m.max === maxPrice);

  const prices = [
    ["সর্বনিম্ন দাম", minPrice],
    ["সর্বাধিক দাম", maxPrice],
    ["গড় দাম", avgPrice],
  ] as const;

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">
          {product.image} {product.nameBn}
        </h1>
        <p className="mt-2 text-gray-600">
          {bn(markets.length)}টি বাজারের তথ্য অনুযায়ী আজকের দাম
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
            {product.categoryIcon} {product.categoryNameBn}
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            প্রতি {units[product.unit] || product.unit}
          </span>
        </div>

        <h2 className="mb-3 mt-8 text-2xl font-bold">দামের সারসংক্ষেপ</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {prices.map(([label, value]) => (
            <div key={label} className="rounded-xl border border-gray-200 p-4">
              <p className="text-sm text-gray-500">{label}</p>
              <p className="mt-1 text-2xl font-bold">{bn(value)} টাকা</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="text-sm text-gray-500">সবচেয়ে কম দামের বাজার</p>
            <p className="mt-1 font-bold">{cheapest?.market}</p>
            <p className="text-sm">{bn(minPrice)} টাকা</p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
            <p className="mt-1 font-bold">{priciest?.market}</p>
            <p className="text-sm">{bn(maxPrice)} টাকা</p>
          </div>
        </div>

        <h2 className="mb-3 mt-10 text-2xl font-bold">
          বাজারভিত্তিক আজকের দাম
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="table">
            <thead>
              <tr>
                <th>বাজার</th>
                <th>বিভাগ</th>
                <th>সর্বনিম্ন</th>
                <th>সর্বাধিক</th>
                <th>গড়</th>
              </tr>
            </thead>
            <tbody>
              {markets.map((m) => (
                <tr key={m.market}>
                  <td>{m.market}</td>
                  <td>{m.division}</td>
                  <td>{bn(m.min)} টাকা</td>
                  <td>{bn(m.max)} টাকা</td>
                  <td>{bn(Math.round((m.min + m.max) / 2))} টাকা</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ProductDetails;
