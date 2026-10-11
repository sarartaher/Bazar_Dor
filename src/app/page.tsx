import Hero from "@/components/Home/Hero";
import ProductCard from "@/components/shared/ProductCard";
import { Product } from "@/interfaces/ProductProps";

const Home = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
  const products: Product[] = Array.isArray(data) ? data : data.data;

  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const fallers = products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const marketCount = new Set(
    products.flatMap((p) => p.markets.map((m) => m.market)),
  ).size;
  const categoryCount = new Set(products.map((p) => p.category)).size;

  return (
    <>
      <Hero
        productCount={products.length}
        marketCount={marketCount}
        categoryCount={categoryCount}
      />

      <section className="container mx-auto px-4 py-6">
        <h2 className="mb-4 text-2xl font-bold">আজ দাম বেড়েছে ▲</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {risers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-6">
        <h2 className="mb-4 text-2xl font-bold">আজ দাম কমেছে ▼</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fallers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section id="সব-পণ্য" className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold">সব পণ্য</h2>
        <p className="mb-4 text-gray-500">এখানে Penpot-এর সাবটাইটেল বসান</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;