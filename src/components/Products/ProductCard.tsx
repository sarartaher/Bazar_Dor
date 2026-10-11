import Link from "next/link";
import { Product } from "@/interfaces/ProductProps";

export const units: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const ProductCard = ({ product }: { product: Product }) => {
  const { dir, pct } = product.change;
  const percent = Math.abs(pct).toLocaleString("bn-BD");

  return (
    <Link
      href={`/product/${product.slug}`}
      className="block rounded-xl border border-gray-200 p-4 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{product.image}</span>
        <div>
          <h3 className="font-semibold">{product.nameBn}</h3>
          <p className="text-sm text-gray-500">
            প্রতি {units[product.unit] || product.unit}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">আজকের দাম</span>
        <span className="font-bold">
          {product.today.toLocaleString("bn-BD")} টাকা
        </span>
      </div>

      <div className="mt-2 text-right text-sm font-semibold">
        {dir === "up" && <span className="text-green-600">▲ {percent}%</span>}
        {dir === "down" && <span className="text-red-600">▼ {percent}%</span>}
        {dir === "flat" && <span className="text-gray-500">— {percent}%</span>}
      </div>
    </Link>
  );
};

export default ProductCard;
