"use client";

import { useEffect, type ReactNode } from "react";
import { ClickSpark } from "@/components/motion/click-spark";
import { playTap, preloadTaps } from "@/lib/snd";

export function LandingShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    preloadTaps();
  }, []);

  return (
    <ClickSpark
      className="flex min-h-full flex-1 flex-col"
      sparkColor="#fff"
      sparkSize={12}
      sparkRadius={18}
      sparkCount={10}
      duration={420}
      onSpark={() => playTap()}
    >
      {children}
    </ClickSpark>
  );
}
