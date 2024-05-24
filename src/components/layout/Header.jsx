import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href={"/"}>
          ABC PIZZA
        </Link>

        <nav className="flex gap-8 items-center text-gray-500 font-semibold">
          <nav className="flex gap-8 items-center text-gray-500 font-semibold">
            <Link href={""}>Home</Link>
            <Link href={""}>Menu</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact</Link>
          </nav>

          <nav className="flex gap-4 items-center text-gray-500 font-semibold">
            <Link href={"/login"}>Login</Link>

            <Link
              href={"/register"}
              className="bg-primary rounded-full  text-white px-8"
            >
              Register
            </Link>
          </nav>
        </nav>
      </header>
    </>
  );
};

export default Header;
