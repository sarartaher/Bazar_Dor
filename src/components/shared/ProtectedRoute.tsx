"use client";
import { authClient } from "@/lib/auth-client/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      toast.error("এই পেজ দেখতে সাইন ইন করুন");
      router.push("/signin");
    }
  }, [isPending, session, router]);

  if (!session) return <div className="skeleton container mx-auto h-40" />;

  return <>{children}</>;
};

export default ProtectedRoute;
