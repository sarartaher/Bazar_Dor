"use client";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client/auth-client";
import SocialButtons from "@/components/auth/SocialButtons";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }

    if (password !== confirm) {
      toast.error("দুটি পাসওয়ার্ড একই হতে হবে");
      return;
    }

    setLoading(true);

    const result = await authClient.signUp.email({ name, email, password });

    setLoading(false);

    if (result.error) {
      toast.error("সাইন আপ ব্যর্থ হয়েছে, আবার চেষ্টা করুন");
    } else {
      toast.success("সাইন আপ সফল হয়েছে, এখন সাইন ইন করুন");
      setTimeout(() => {
        window.location.href = "/signin";
      }, 1000);
    }
  };

  return (
    <div className="container mx-auto max-w-md px-4 py-10">
      <h1 className="text-3xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
      <p className="mb-6 mt-1 text-gray-500">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          required
          placeholder="যেমন: রহিম উদ্দিন"
          className="input w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          required
          placeholder="ইমেইল"
          className="input w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="পাসওয়ার্ড (কমপক্ষে ৮ অক্ষর)"
          className="input w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="পাসওয়ার্ড নিশ্চিত করুন"
          className="input w-full"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button
          disabled={loading}
          className="btn w-full bg-green-700 text-white"
        >
          {loading ? "অপেক্ষা করুন..." : "সাইন আপ করুন"}
        </button>
      </form>

      <div className="divider">অথবা</div>
      <SocialButtons />

      <p className="mt-4 text-center">
        অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="font-semibold text-green-700">
          সাইন ইন করুন
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
