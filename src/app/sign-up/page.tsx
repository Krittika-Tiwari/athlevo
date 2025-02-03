import { SignUpCard } from "@/feature/auth/component/sign-up-card";

import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up",
};
export default function SignUp() {
  return (
    <div>
      <SignUpCard />
    </div>
  );
}
