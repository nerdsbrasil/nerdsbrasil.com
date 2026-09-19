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
      sparkColor="rgba(255,255,255,0.75)"
      sparkSize={7}
      sparkRadius={12}
      sparkCount={4}
      duration={360}
      extraScale={0.9}
      arcStart={-Math.PI}
      arcSweep={Math.PI / 2}
      onSpark={() => playTap()}
    >
      {children}
    </ClickSpark>
  );
}
