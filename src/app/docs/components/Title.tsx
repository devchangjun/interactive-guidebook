import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-1 sm:mb-2 lg:mb-2 text-white">{children}</h2>;
}
