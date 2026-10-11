import { Category } from "@/interfaces/ProductProps";
import NavLink from "./NavLink";

const Navlinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    { cache: "force-cache" },
  );
  const categories: Category[] = await res.json();

  return (
    <nav className="container mx-auto flex items-center gap-3 overflow-x-auto py-2 text-sm no-scrollbar">
      {categories.map((n) => (
        <NavLink key={n.id} href={`/category/${n.slug}`}>
          <span>{n.icon}</span>
          <span>{n.nameBn}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navlinks;
