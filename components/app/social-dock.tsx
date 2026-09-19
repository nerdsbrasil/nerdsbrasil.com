"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DiscordIcon, GithubIcon } from "@/components/app/icons";
import { ActionSwapRollIcon } from "@/components/motion/action-swap-roll";
import { Dock, DockItem } from "@/components/motion/dock";
import { Tooltip } from "@/components/motion/tooltip";
import { playTap } from "@/lib/snd";

const DISCORD_INVITE = "https://discord.gg/nerdsbrasil";
const GITHUB_URL = "https://github.com/nerdsbrasil";
const EMAIL = "contato@nerdsbrasil.com";

const WRAPPER_CLASS = "h-full w-full items-center justify-center";
const TRIGGER_CLASS = "flex h-full w-full items-center justify-center";

export function SocialDock() {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center px-4">
      <div className="pointer-events-auto">
        <Dock size={36} className="gap-0 border border-foreground/5 px-1.5">
          <DockItem aria-label="Discord">
            <Tooltip content="Discord" side="top" wrapperClassName={WRAPPER_CLASS}>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Discord"
                className={TRIGGER_CLASS}
                onPointerEnter={() => playTap()}
              >
                <DiscordIcon className="h-4 w-4" />
              </a>
            </Tooltip>
          </DockItem>
          <DockItem aria-label="GitHub">
            <Tooltip content="GitHub" side="top" wrapperClassName={WRAPPER_CLASS}>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className={TRIGGER_CLASS}
                onPointerEnter={() => playTap()}
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </Tooltip>
          </DockItem>
          <DockItem aria-label="Email">
            <Tooltip
              content={copied ? "Copiado!" : EMAIL}
              side="top"
              wrapperClassName={WRAPPER_CLASS}
            >
              <button
                type="button"
                aria-label="Copiar email"
                className={TRIGGER_CLASS}
                onPointerEnter={() => {
                  setHovered(true);
                  playTap();
                }}
                onPointerLeave={() => setHovered(false)}
                onClick={copyEmail}
              >
                <ActionSwapRollIcon
                  value={copied ? "check" : hovered ? "copy" : "mail"}
                  className="h-4 w-4"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : hovered ? (
                    <Copy className="h-4 w-4" />
                  ) : (
                    <Mail className="h-4 w-4" />
                  )}
                </ActionSwapRollIcon>
              </button>
            </Tooltip>
          </DockItem>
        </Dock>
      </div>
    </div>
  );
}
