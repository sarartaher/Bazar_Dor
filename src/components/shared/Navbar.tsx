import Image from "next/image";
import logo from "@/assets/logo-icon.png";
import Navlinks from "./Navlinks";
import { Suspense } from "react";
import Marquee from "./Marquee";
import BanglaDate from "./BanglaDate";
import AuthButtons from "./AuthButtons";

const Navbar = () => {
  return (
    <header className="shadow-sm">
      <nav className="container mx-auto flex items-center justify-between gap-2 px-4 py-4">
        <div className="flex gap-3">
          <Image
            src={logo}
            alt="logo.png"
            className="w-12 h-12 bg-green-700 p-1.5 rounded-xl"
            width={50}
            height={50}
          />
          <div className="font-semibold">
            <h1>বাজার দর</h1>
            <BanglaDate />
          </div>
        </div>
        <AuthButtons />
      </nav>
      <Navlinks />
      <Suspense fallback={<div className="h-10 border-y bg-white" />}>
        <Marquee />
      </Suspense>
    </header>
  );
};

export default Navbar;
