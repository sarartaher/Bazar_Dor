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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check the password length before calling the server
    if (password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
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
      <h1 className="mb-6 text-3xl font-bold">সাইন আপ</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          required
          placeholder="নাম"
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
        <button
          disabled={loading}
          className="btn w-full bg-green-700 text-white"
        >
          {loading ? "অপেক্ষা করুন..." : "সাইন আপ"}
        </button>
      </form>

      <div className="divider">অথবা</div>
      <SocialButtons />

      <p className="mt-4 text-center">
        আগে থেকেই অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="font-semibold text-green-700">
          সাইন ইন করুন
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
