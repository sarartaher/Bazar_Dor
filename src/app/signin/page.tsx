"use client";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client/auth-client";
import SocialButtons from "@/components/auth/SocialButtons";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // stop the page from reloading
    setLoading(true);

    const result = await authClient.signIn.email({ email, password });

    setLoading(false);

    if (result.error) {
      toast.error("ইমেইল বা পাসওয়ার্ড ভুল হয়েছে");
    } else {
      toast.success("সাইন ইন সফল হয়েছে");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  };

  return (
    <div className="container mx-auto max-w-md px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">সাইন ইন</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
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
          placeholder="পাসওয়ার্ড"
          className="input w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={loading}
          className="btn w-full bg-green-700 text-white"
        >
          {loading ? "অপেক্ষা করুন..." : "সাইন ইন"}
        </button>
      </form>

      <div className="divider">অথবা</div>
      <SocialButtons />

      <p className="mt-4 text-center">
        অ্যাকাউন্ট নেই?{" "}
        <Link href="/signup" className="font-semibold text-green-700">
          সাইন আপ করুন
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
