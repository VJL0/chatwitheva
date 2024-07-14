"use client";

import Link from "next/link";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  mode = "redirect",
  asChild,
}) => {
  const HandleClick = () => {
    console.log("Login Button Clicked");
  };
  return (
    <span onClick={HandleClick} className="cursor-pointer">
      <Link href={"/auth/login"}>{children}</Link>
    </span>
  );
};

export default LoginButton;
