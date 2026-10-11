import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <p className="text-6xl font-bold text-green-700">৪০৪</p>
      <h2 className="mt-4 text-2xl font-bold">পেজটি খুঁজে পাওয়া যায়নি</h2>
      <p className="mt-2 text-gray-500">
        আপনি যে পেজটি খুঁজছেন সেটি নেই অথবা সরিয়ে ফেলা হয়েছে।
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-green-700 px-5 py-2 font-semibold text-white"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;
