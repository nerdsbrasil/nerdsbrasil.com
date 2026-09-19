"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/motion/button/base";

const DISCORD_INVITE = "https://discord.gg/nerdsbrasil";

export function JoinButton() {
  return (
    <Button
      variant="outline"
      size="md"
      ripple
      className="cursor-pointer"
      onClick={() => window.open(DISCORD_INVITE, "_blank", "noopener,noreferrer")}
    >
      Entre na comunidade
      <ArrowRight className="h-4 w-4" />
    </Button>
  );
}
