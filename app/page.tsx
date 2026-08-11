import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { OpdIpdJourney } from "@/components/home/OpdIpdJourney";
import { MeetCareBuddy } from "@/components/home/MeetCareBuddy";
import { BookingModes } from "@/components/home/BookingModes";
import { CareBuddyServices } from "@/components/home/CareBuddyServices";
import { FamilyConnection } from "@/components/home/FamilyConnection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TechnologySection } from "@/components/home/TechnologySection";
import { AudienceSection } from "@/components/home/AudienceSection";
import { WhySamayCare } from "@/components/home/WhySamayCare";
import { PreLaunchForm } from "@/components/home/PreLaunchForm";
import { FutureVision } from "@/components/home/FutureVision";
import { PartnerCTA } from "@/components/home/PartnerCTA";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <OpdIpdJourney />
      <MeetCareBuddy />
      <BookingModes />
      <CareBuddyServices />
      <FamilyConnection />
      <HowItWorks />
      <TechnologySection />
      <AudienceSection />
      <WhySamayCare />
      <PreLaunchForm />
      <FutureVision />
      <PartnerCTA />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
