import EmailField from "@/components/pages/Login/EmailField";
import OrDivider from "@/components/pages/Login/OrDivider";
import PassField from "@/components/pages/Login/PassField";
import SocialButtons from "@/components/pages/Login/SocialButtons";
import Footer from "@/components/pages/Login/footer";
import Logo from "@/components/pages/Login/logo";
import React from "react";
import SignUpButton from "./signup-button";
import Greeting from "./signup-greeting";

const Signup: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#050222]">
      {/* Transparent Grey Container */}
      <div className="flex h-[780px] w-full min-w-[600px] max-w-[600px] flex-col items-center rounded-[25px] border border-white/20 bg-gray-800/50 p-6 shadow-md backdrop-blur-[15px]">
        {/* Logo */}
        <Logo />

        {/* Greeting */}
        <Greeting />

        {/* Fields */}
        <EmailField />
        <PassField />

        {/* Signup button (reuse LoginButton, but customize text) */}
        <SignUpButton />

        {/* Divider */}
        <OrDivider />

        {/* Social signup */}
        <SocialButtons />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
