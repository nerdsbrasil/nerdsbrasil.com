import { JoinButton } from "@/components/app/join-button";
import { LandingShell } from "@/components/app/landing-shell";
import { Mascot } from "@/components/app/mascot";
import { SocialDock } from "@/components/app/social-dock";

export default function Home() {
  return (
    <LandingShell>
      <main className="relative flex flex-1 flex-col items-center justify-center gap-8 px-4 pb-28 pt-12">
        <Mascot />
        <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Algo grande está por vir...
        </h1>
        <JoinButton />
        <SocialDock />
      </main>
    </LandingShell>
  );
}
