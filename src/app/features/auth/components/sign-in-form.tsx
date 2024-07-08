import { signIn } from "../actions/sign-in";
import Image from "next/image";
import logo from "@/assets/images/Logo.png";

const SignInForm = () => {
  return (
    <div className="lg:w-2/5 xs:w-11/12 md:w-11/12 bg-white flex flex-col justify-center items-center px-[70px] py-[50px] rounded-2xl gap-[32px]">
      <div className="flex flex-row justify-center items-center gap-2">
        <Image src={logo} alt="logo" className="w-24 h-auto" />
        <div className="flex flex-col leading-none">
          <h1 className="font-ephesis text-[64px]">Pamana</h1>
          <p className="font-cormorant text-[16px]">RESORTS AND HOTELS</p>
        </div>
      </div>
      <form
        action={signIn}
        className="flex flex-col w-full justify-center items-center gap-y-[32px]"
      >
        <div className="flex flex-col w-full justify-center items-left gap-[6px]">
          <label
            htmlFor="email"
            className="text-[16px] leading-3 font-sans text-gray-600"
          >
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            className="h-12 px-2 py-5 font-sans text-[16px] border-2 border-gray-60 rounded-lg w-full focus:outline-none focus:border-aqua"
          />
        </div>
        <div className="flex flex-col w-full justify-center items-left gap-[6px]">
          <label
            htmlFor="password"
            className="text-[16px] leading-3 font-sans text-gray-600"
          >
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            className="h-12 px-2 py-5 font-sans text-[16px] border-2 border-gray-60 rounded-lg w-full focus:outline-none focus:border-aqua"
          />
        </div>
        <button
          type="submit"
          className="font-sans bg-[#468EA0] lg:px-[20px] lg:pt-[5px] xs:px-[10px] xs:py-[5px]  lg:w-[360px] xs:w-[150px] h-[60px] rounded-lg flex items-center text-center justify-center text-light leading-none"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export { SignInForm };
