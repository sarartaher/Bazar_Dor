"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client/auth-client";
import ProtectedRoute from "@/components/shared/ProtectedRoute";

const Profile = () => {
  const { data: session } = authClient.useSession();

  return (
    <ProtectedRoute>
      <div className="container mx-auto max-w-md px-4 py-10">
        <h1 className="text-3xl font-bold">👤 আমার প্রোফাইল</h1>
        <p className="mb-6 mt-1 text-gray-500">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>

        <div className="space-y-2 rounded-xl border border-gray-200 p-4">
          <p>
            <span className="font-semibold">নাম:</span> {session?.user.name}
          </p>
          <p>
            <span className="font-semibold">ইমেইল:</span> {session?.user.email}
          </p>
        </div>

        <Link
          href="/profile/update"
          className="btn mt-4 bg-green-700 text-white"
        >
          আপডেট
        </Link>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;
