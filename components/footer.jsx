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
    <footer className="w-screen text-center h-fit bg-slate-900 p-8 px-44 text-slate-50">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          © Zakusei 2023. All Rights Reserved.
        </p>
        <ul className="flex gap-8 text-slate-500">
          <li>
            <Link href="#">
              <LinkedinIcon />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link href="#">
              <YoutubeIcon />
            </Link>
          </li>
          <li>
            <Link href="#">
              <InstagramIcon />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
