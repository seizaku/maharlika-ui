import { CheckCircle2 } from "lucide-react";

export const FeatureItem = ({ children }) => {
  return (
    <li className="flex gap-2 text-sm font-light items-center">
      <CheckCircle2 className="text-slate-600 p-0.5" />
      {children}
    </li>
  );
};
