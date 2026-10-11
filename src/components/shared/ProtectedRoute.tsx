"use client";
import { authClient } from "@/lib/auth-client/auth-client";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    // Done checking and no user: send to sign in
    if (!isPending && !session) {
      toast.error("এই পেজ দেখতে সাইন ইন করুন");
      setTimeout(() => {
        window.location.href = "/signin";
      }, 1000);
    }
  }, [isPending, session]);

  // Show a skeleton while checking or while redirecting
  if (!session) {
    return <div className="skeleton container mx-auto h-40"></div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
