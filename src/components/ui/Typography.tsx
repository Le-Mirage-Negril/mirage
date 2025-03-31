import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  className?: string;
};

const Typography = (props: Props) => {
  const { variant, children, className } = props;

  switch (variant) {
    case "h1":
      return (
        <h1 className={cn("text-4xl md:text-6xl font-bold text-white mb-4 font-serif", className)}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={cn(
            "font-serif text-4xl md:text-5xl font-bold text-center text-cyan-900 mb-16",
            className
          )}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={cn(
            "font-serif text-2xl md:text-3xl font-bold text-center text-cyan-900 mb-16",
            className
          )}
        >
          {children}
        </h3>
      );
    case "p":
      return <p className={cn("text-cyan-700", className)}>{children}</p>;
    case "span":
      return <span className={cn(className)}>{children}</span>;
    default:
      return null;
  }
};

export default Typography;
