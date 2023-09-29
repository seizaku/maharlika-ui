import hero from "@/public/hero-img.jpg";
import { SectionHero, SectionGrid2 } from "@/components/section";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <SectionHero textcolor="text-white" src={hero.src}>
      <SectionGrid2>
        <div className="px-4 text-center lg:text-left mt-8">
          <h1 className="font-semibold text-4xl mt-4 md:mt-0 xl:text-5xl text-center lg:text-left">
            Navigating business beyond boundaries
          </h1>
          <p className="text-lg lg:text-xl py-4 font-extralight text-center lg:text-left">
            Our skilled team lets you focus on core competencies while we handle
            the rest. Elevate your business with VINTAZK.
          </p>
          <Button
            variant="outline"
            className="gap-4 group bg-transparent"
            size="lg"
          >
            Book a Discovery Call
            <PhoneCall className="h-4 w-4 ease-out transition-all group-hover:animate-pulse" />
          </Button>
        </div>
        <video
          className="rounded-md order-first lg:order-last"
          width={540}
          height="auto"
          src="https://vintazk.com/wp-content/uploads/2023/08/SAIL.mp4"
          autoPlay
          loop
          muted="muted"
        ></video>
      </SectionGrid2>
    </SectionHero>
  );
}
