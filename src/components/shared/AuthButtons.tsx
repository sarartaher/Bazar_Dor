"use client";
import { authClient } from "@/lib/auth-client/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";

const AuthButtons = () => {
  const { data: session } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("সাইন আউট সফল হয়েছে");
  };

  return session ? (
    <div className="flex items-center gap-4 font-semibold">
      <Link href="/profile">{session.user.name}</Link>
      <button
        onClick={handleSignOut}
        className="bg-green-700 px-4 py-2 rounded-xl text-white"
      >
        সাইন আউট
      </button>
    </div>
  ) : (
    <div className="flex items-center gap-4 font-semibold">
      <Link href="/signin">সাইন ইন</Link>
      <Link
        href="/signup"
        className="bg-green-700 px-4 py-2 rounded-xl text-white"
      >
        সাইন আপ
      </Link>
    </div>
  );
};

export default AuthButtons;
