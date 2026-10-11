"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client/auth-client";
import ProtectedRoute from "@/components/shared/ProtectedRoute";

const UpdateProfile = () => {
  const { data: session } = authClient.useSession();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await authClient.updateUser({ name });

    setLoading(false);

    if (result.error) {
      toast.error("তথ্য আপডেট করা যায়নি");
    } else {
      toast.success("তথ্য আপডেট হয়েছে");
      setTimeout(() => {
        window.location.href = "/profile";
      }, 1000);
    }
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto max-w-md px-4 py-10">
        <h1 className="mb-6 text-3xl font-bold">তথ্য আপডেট</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            required
            placeholder={session?.user.name || "নাম"}
            className="input w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            disabled={loading}
            className="btn w-full bg-green-700 text-white"
          >
            {loading ? "অপেক্ষা করুন..." : "আপডেট"}
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
};

export default UpdateProfile;
