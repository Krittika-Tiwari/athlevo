import { SignInCard } from "@/feature/auth/component/sign-in-card";

import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign In",
};
export default function SignIn() {
  return (
    <div>
      <SignInCard />
    </div>
  );
}
