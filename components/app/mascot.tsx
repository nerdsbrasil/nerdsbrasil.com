"use client";

import Image from "next/image";
import { Tooltip } from "@/components/motion/tooltip";
import { playTap } from "@/lib/snd";

export function Mascot() {
  return (
    <Tooltip content="Nerdo" side="top">
      <Image
        src="/sleeping-1.5x.webp"
        alt="Nerdo"
        width={539}
        height={539}
        unoptimized
        priority
        className="h-auto w-48 sm:w-56"
        onPointerEnter={() => playTap()}
      />
    </Tooltip>
  );
}
