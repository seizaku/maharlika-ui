import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { navLinks } from "@/data/nav-links";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky z-40 top-0 left-0 bg-background w-full shadow-md">
      <nav className="p-2 flex justify-between md:justify-evenly items-center">
        <Image src={"/logo.png"} width={192} height={64} alt="navbar-logo" />
        <ul className="hidden md:flex gap-6">
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
        <div className="flex gap-4 items-center">
          <Button size="lg" className="font-light">
            Contact Us
          </Button>
          <Button className="md:hidden" size="sm" variant="ghost">
            <MenuIcon className="text-2xl" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
