"use client";
import { authClient } from "@/lib/auth-client/auth-client";

const SocialButtons = () => {
  const handleGoogle = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  const handleGithub = async () => {
    await authClient.signIn.social({ provider: "github", callbackURL: "/" });
  };

  return (
    <div className="space-y-2">
      <button onClick={handleGoogle} className="btn w-full">
        Google দিয়ে চালিয়ে যান
      </button>
      <button onClick={handleGithub} className="btn w-full">
        GitHub দিয়ে চালিয়ে যান
      </button>
    </div>
  );
};

export default SocialButtons;
