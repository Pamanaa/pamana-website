import React from "react";
import { SignInForm } from "@/app/features/auth/components/sign-in-form";
import Image from "next/image";
import login from "@/assets/images/Login.png";

const SignIn = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${login.src})` }}
    >
      <SignInForm />
    </div>
  );
};

export default SignIn;
