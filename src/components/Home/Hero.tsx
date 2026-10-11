import Image from "next/image";
import heroImg from "@/assets/bazar-hero.png";

type HeroProps = {
  productCount: number;
  marketCount: number;
  categoryCount: number;
};

const Hero = ({ productCount, marketCount, categoryCount }: HeroProps) => {
  const stats: [number, string][] = [
    [productCount, "টি নিত্যদিনের পণ্য"],
    [marketCount, "টি বাজার অন্তর্ভুক্ত"],
    [categoryCount, "টি বিভাগের তথ্য"],
  ];

  return (
    <section className="container mx-auto flex flex-col-reverse items-center gap-8 px-4 py-10 md:flex-row">
      <div className="flex-1">
        <p className="font-semibold text-green-700">আজকের বাজার দর</p>
        <h2 className="my-3 text-3xl font-bold md:text-4xl">
          আজকের বাজারের দাম এক নজরে
        </h2>
        <p className="mb-5 text-gray-600">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <a
          href="#সব-পণ্য"
          className="inline-block rounded-xl bg-green-700 px-5 py-2 font-semibold text-white"
        >
          সব পণ্য দেখুন
        </a>
        <div className="mt-8 flex flex-wrap gap-6">
          {stats.map(([num, label]) => (
            <div key={label}>
              <p className="text-2xl font-bold">
                {num.toLocaleString("bn-BD")}
              </p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={heroImg}
        alt="বাজার দর"
        className="w-full max-w-sm md:max-w-md"
      />
    </section>
  );
};

export default Hero;
