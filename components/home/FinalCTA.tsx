"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

export function FinalCTA() {
  return (
    <section className="bg-teal-dark py-14 lg:py-16">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          You may not be able to be there.
          <br />
          But your loved one doesn&rsquo;t have to be alone.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-white/75">
          Book or request a CareBuddy through Samay Care and stay connected to the healthcare
          journey.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href="#prelaunch-form"
            variant="inverse"
            size="lg"
            onClick={() => track("hero_interest_click", { location: "final_cta" })}
          >
            I&rsquo;m Interested &rarr;
          </Button>
          <Button
            href="#prelaunch-form"
            variant="ghost-inverse"
            size="lg"
            onClick={() => track("hero_request_click", { location: "final_cta" })}
          >
            Request Assistance
          </Button>
        </div>
      </Container>
    </section>
  );
}
