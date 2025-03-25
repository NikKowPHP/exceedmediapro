"use client";

import { Navbar } from "@/components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer/footer";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary w-full">
      <div className="  relative">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
