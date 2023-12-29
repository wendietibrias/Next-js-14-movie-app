"use client";
import "remixicon/fonts/remixicon.css";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Poppins } from "next/font/google";
import { QueryClientComponent } from "@/components/global";
import { Suspense, useEffect } from "react";
import useMode, { useModeType } from "@/hooks/useMode";

const poppins = Poppins({ weight: ["400", "500", "600", "700", "900"], subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isDark, modeCheckerDefault } = useMode() as useModeType;

  return (
    <html lang="en" className={`${isDark ? "dark" : ""}`}>
      <body className={poppins.className}>
        <div className="w-full dark:bg-gray-800 transition-all duration-500 bg-white">
          <Suspense fallback={<div>Loading...</div>}>
            <QueryClientComponent>{children}</QueryClientComponent>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
