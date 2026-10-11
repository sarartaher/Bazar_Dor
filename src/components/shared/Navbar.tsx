import Image from "next/image";
import logo from "@/assets/logo-icon.png";
import Link from "next/link";
import Navlinks from "./Navlinks";
import { Suspense } from "react";
import Marquee from "./Marquee";

const Navbar = () => {
  return (
    <header className="shadow-sm ">
      <nav className="flex items-center gap-2 container mx-auto py-4 justify-between">
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
            <p>মঙ্গলবার, ৬ অক্টোবর, ২০২৬</p>
          </div>
        </div>
        <div className="auth-button flex gap-4 font-semibold items-center ">
          <Link href="/" className="">
            সাইন ইন
          </Link>
          <Link
            href="/"
            className="bg-green-700 border-none px-4 py-2 rounded-xl text-white shadow-md"
          >
            সাইন আপ
          </Link>
        </div>
      </nav>
      <Navlinks />
      <Suspense fallback={<div className="h-10 border-y bg-white" />}>
        <Marquee />
      </Suspense>
    </header>
  );
};

export default Navbar;
