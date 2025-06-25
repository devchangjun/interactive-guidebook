"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <div
        className="absolute inset-0 hidden h-full w-full bg-cover bg-center sm:block"
        style={{
          backgroundImage: "url(/main.png)",
        }}
      />
      <div
        className="absolute inset-0 block h-full w-full bg-cover bg-center sm:hidden"
        style={{
          backgroundImage: "url(/mobile.png)",
        }}
      />
      <div className="relative z-10 flex h-full w-full items-end justify-center pb-20 md:pb-32">
        <Link href="/docs" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-white/80 px-8 py-4 text-lg font-bold text-black shadow-lg backdrop-blur-sm transition-all duration-200 ease-in-out hover:bg-white"
          >
            시작하기
          </motion.button>
        </Link>
      </div>
    </main>
  );
}
