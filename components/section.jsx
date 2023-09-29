"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export const Section = ({ children, className }) => {
  return (
    <section className={cn("mx-auto bg-background font-extralight", className)}>
      {children}
    </section>
  );
};

export const SectionGrid1 = ({ children, className, gap }) => {
  return (
    <div
      className={cn(
        `grid place-items-center grid-cols-1 gap-${
          gap ? gap : "0"
        } lg:grid-cols-1 container text-center xl:text-left py-24 px-24`,
        className
      )}
    >
      {children}
    </div>
  );
};
export const SectionGrid2 = ({ children, className, gap }) => {
  return (
    <div
      className={cn(
        `grid place-items-center grid-cols-1 gap-${
          gap ? gap : "0"
        } lg:grid-cols-2 container text-center xl:text-left py-24 px-24`,
        className
      )}
    >
      {children}
    </div>
  );
};
export const SectionGrid3 = ({ children, className, gap }) => {
  return (
    <div
      className={cn(
        `grid place-items-center grid-cols-1 gap-${
          gap ? gap : "0"
        } lg:grid-cols-3 container text-center xl:text-left py-24 px-24`,
        className
      )}
    >
      {children}
    </div>
  );
};
export const SectionGrid4 = ({ children, className, gap }) => {
  return (
    <div
      className={cn(
        `grid place-items-center grid-cols-1 gap-${
          gap ? gap : "0"
        } lg:grid-cols-4 container text-center xl:text-left`,
        className
      )}
    >
      {children}
    </div>
  );
};

export const SectionHero = ({
  children,
  className,
  src,
  bgcolor,
  textcolor,
}) => {
  return (
    <section>
      <div
        className={cn(
          `relative grid place-items-center text-center ${bgcolor} dark xl:text-left h-[740px] ${
            textcolor ? textcolor : "text-foreground"
          }`,
          className
        )}
      >
        <div
          style={{
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
          className="h-[100%] w-full"
        />
        <div
          className={`z-20 absolute ${
            bgcolor ? bgcolor : "bg-background"
          }/90 h-full w-full flex items-center`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export const SectionColumn = ({ children, className }) => {
  return (
    <div className={cn("h-full w-full py-4 px-12", className)}>{children}</div>
  );
};

export const SectionHeading = ({ children, className }) => {
  return (
    <h1 className={cn("text-1xl md:text-4xl font-semibold mb-4", className)}>
      {children}
    </h1>
  );
};

export const SectionParagraph = ({ children, className }) => {
  return (
    <p className={cn("leading-7 text-md font-normal mb-4", className)}>
      {children}
    </p>
  );
};
