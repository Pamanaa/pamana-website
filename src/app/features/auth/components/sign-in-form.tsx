import { signIn } from "../actions/sign-in";
import Image from "next/image";
import logo from "@/assets/images/Logo.png";

const SignInForm = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[32px] rounded-2xl bg-white px-[70px] py-[50px] xs:w-11/12 md:w-11/12 lg:w-2/5">
      <div className="flex flex-row items-center justify-center gap-2">
        <Image src={logo} alt="logo" />
        <div className="flex flex-col leading-none">
          <h1 className="font-ephesis text-[64px]">Pamana</h1>
          <p className="font-cormorant text-[16px]">RESORTS AND HOTELS</p>
        </div>
      </div>
      <form
        action={signIn}
        className="flex w-full flex-col items-center justify-center gap-y-[32px]"
      >
        <div className="items-left flex w-full flex-col justify-center gap-[6px]">
          <label
            htmlFor="email"
            className="font-sans text-[16px] leading-3 text-gray-600"
          >
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            className="border-gray-60 h-12 w-full rounded-lg border-2 px-2 py-5 font-sans text-[16px] focus:border-aqua focus:outline-none"
          />
        </div>
        <div className="items-left flex w-full flex-col justify-center gap-[6px]">
          <label
            htmlFor="password"
            className="font-sans text-[16px] leading-3 text-gray-600"
          >
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            className="border-gray-60 h-12 w-full rounded-lg border-2 px-2 py-5 font-sans text-[16px] focus:border-aqua focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="flex h-[60px] items-center justify-center rounded-lg bg-[#468EA0] text-center font-sans leading-none text-light xs:w-[150px] xs:px-[10px] xs:py-[5px] lg:w-[360px] lg:px-[20px] lg:pt-[5px]"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export { SignInForm };
