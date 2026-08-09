import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CareBuddyServices } from "@/components/home/CareBuddyServices";
import { TechnologySection } from "@/components/home/TechnologySection";
import { PreLaunchForm } from "@/components/home/PreLaunchForm";
import { AudienceSection } from "@/components/home/AudienceSection";
import { WhySamayCare } from "@/components/home/WhySamayCare";
import { FutureVision } from "@/components/home/FutureVision";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <CareBuddyServices />
      <TechnologySection />
      <PreLaunchForm />
      <AudienceSection />
      <WhySamayCare />
      <FutureVision />
      <FinalCTA />
    </>
  );
}
