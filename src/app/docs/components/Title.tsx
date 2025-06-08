import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-4xl font-bold mb-2 text-white">{children}</h2>;
}
