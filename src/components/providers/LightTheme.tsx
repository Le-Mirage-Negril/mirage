"use client";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

function LightTheme({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, []);
  return <div>{children}</div>;
}

export default LightTheme;
