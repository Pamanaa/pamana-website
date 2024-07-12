import React from "react";
import { SignInForm } from "@/app/features/auth/components/sign-in-form";
import Image from "next/image";
import login from "@/assets/images/Login.png";

const SignIn = () => {
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${login.src})` }}
    >
      <SignInForm />
    </div>
  );
};

export default SignIn;
