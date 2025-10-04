import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PageWrapper = (props: Props) => {
  const { children, className } = props;
  return <div className={cn("mx-auto w-screen bg-white py-2 px-2", className)}>{children}</div>;
};

export default PageWrapper;
