import ProtectedRoute from "@/components/shared/ProtectedRoute";
import { Product } from "@/interfaces/ProductProps";
import { notFound } from "next/navigation";

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
  if (!product) notFound();

  return (
    <ProtectedRoute>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">
          {product.image} {product.nameBn}
        </h1>
      </div>
    </ProtectedRoute>
  );
};

export default ProductDetails;
