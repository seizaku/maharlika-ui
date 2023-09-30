"use client";

import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

export function Question({ title, content, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      {...props}
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[100%] md:px-44 space-y-2"
    >
      <CollapsibleTrigger asChild>
        <div className="flex items-center justify-between space-x-4 px-4 border rounded-md p-2">
          <h4 className="text-sm font-semibold">{title}</h4>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="leading-7 space-y-2 text-left font-normal px-2">
        {content}
      </CollapsibleContent>
    </Collapsible>
  );
}
