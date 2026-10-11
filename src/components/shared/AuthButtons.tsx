"use client";
import { authClient } from "@/lib/auth-client/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";

const AuthButtons = () => {
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("সাইন আউট সফল হয়েছে");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  // 1. Still checking if the user is logged in
  if (isPending) {
    return <div className="skeleton h-9 w-32 rounded-xl"></div>;
  }

  // 2. User is logged in
  if (session) {
    return (
      <div className="flex items-center gap-2 font-semibold">
        <Link href="/profile">{session.user.name}</Link>
        <button
          onClick={handleSignOut}
          className="btn btn-sm sm:btn-md bg-green-700 text-white"
        >
          সাইন আউট
        </button>
      </div>
    );
  }

  // 3. User is not logged in
  return (
    <div className="flex items-center gap-2 font-semibold">
      <Link href="/signin" className="btn btn-sm sm:btn-md btn-ghost">
        সাইন ইন
      </Link>
      <Link
        href="/signup"
        className="btn btn-sm sm:btn-md bg-green-700 text-white"
      >
        সাইন আপ
      </Link>
    </div>
  );
};

export default AuthButtons;
