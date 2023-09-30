"use client";

import { FAQs } from "@/data/faqs";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Question } from "@/components/collapsible";

export function FrequentlyAskedQuestions() {
  return (
    <>
      {FAQs.map(({ title, content }, index) => (
        <Question key={index} title={title} content={content} />
      ))}
    </>
  );
}
