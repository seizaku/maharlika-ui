import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  LinkedinIcon,
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-screen text-center h-fit bg-slate-900 p-8 md:px-44 text-slate-50">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground text-xs md:text-sm">
          © Zakusei 2023. All Rights Reserved.
        </p>
        <ul className="flex gap-8 text-slate-500">
          <li>
            <Link href="#">
              <LinkedinIcon className="h-4 w-4 md:h-auto md:w-auto" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FacebookIcon className="h-4 w-4 md:h-auto md:w-auto" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <YoutubeIcon className="h-4 w-4 md:h-auto md:w-auto" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <InstagramIcon className="h-4 w-4 md:h-auto md:w-auto" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
