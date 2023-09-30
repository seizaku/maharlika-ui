"use client";

import Image from "next/image";
import { AlignRightIcon, AlignJustify } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { navLinks } from "@/data/nav-links";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const [mobileNavState, setState] = useState(false);
  return (
    <header className="sticky z-50 top-0 left-0 bg-background w-full shadow-md">
      <nav
        className={`${
          mobileNavState && "h-screen"
        } md:h-auto py-2 px-6 flex flex-col justify-between md:flex-row md:justify-evenly items-center`}
      >
        <div className="w-full md:w-auto">
          <div className="w-full flex justify-between items-center">
            <Image
              src={"/logo.png"}
              width={164}
              height={64}
              className="block md:hidden"
              alt="navbar-logo"
            />
            <Image
              src={"/logo.png"}
              width={240}
              height={64}
              className="hidden md:block"
              alt="navbar-logo"
            />
            <Button
              onClick={() => setState((prev) => !prev)}
              className="md:hidden"
              size="icon"
              variant="link"
            >
              {!mobileNavState && (
                <AlignJustify className="text-2xl animate-fade text-foreground h-8 w-8 order-2" />
              )}
              {mobileNavState && (
                <AlignRightIcon className="text-2xl text-foreground h-8 w-8 order-2" />
              )}
            </Button>
          </div>
          {/* Mobile Nav */}
          <ul
            className={`${
              mobileNavState ? "flex" : "hidden"
            } md:hidden w-full text-lg font-light md:w-auto px-1 mt-10 md:mt-0 md:p-0 flex-col md:flex-row gap-6`}
          >
            {navLinks.map(({ title, href, children }, index) => (
              <li key={index}>
                {!children && (
                  <Link className="hover:text-accent-foreground/80" href={href}>
                    {title}
                  </Link>
                )}
                <Separator className="mt-2" />
                {children && (
                  <Link className="hover:text-accent-foreground/80" href="#">
                    {title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex w-auto gap-6">
          {navLinks.map(({ title, href, children }, index) => (
            <li key={index}>
              {!children && (
                <Link
                  className="hover:text-accent-foreground/80 font-normal"
                  href={href}
                >
                  {title}
                </Link>
              )}
              {children && (
                <Link
                  className="hover:text-accent-foreground/80 font-semibold"
                  href="#"
                >
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div
          className={`${
            mobileNavState ? "flex" : "hidden md:flex"
          } w-full md:w-auto flex-col md:flex-row gap-2 mb-4 md:mb-0`}
        >
          <Button
            variant="ghost"
            size="lg"
            className="w-full md:w-auto font-light"
          >
            Login
          </Button>
          <Button size="lg" className="w-full md:w-auto font-light">
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
}
