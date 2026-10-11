"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 ${
        pathname === href ? "bg-green-700 text-white" : "border-gray-200"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
