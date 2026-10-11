import CategoryProducts from "@/components/Products/CategoryProducts";
import { Product } from "@/interfaces/ProductProps";
import { notFound } from "next/navigation";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
  const all: Product[] = Array.isArray(data) ? data : data.data;
  const products = all.filter((p) => p.category === slug);

  if (products.length === 0) notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        {products[0].categoryIcon} {products[0].categoryNameBn}
      </h1>
      <CategoryProducts products={products} />
    </div>
  );
};

export default CategoryPage;
