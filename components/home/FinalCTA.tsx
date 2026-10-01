"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CityAwareCta } from "@/components/site/CityAwareCta";
import { useCity } from "@/components/site/CityContext";
import { track } from "@/lib/analytics";

export function FinalCTA() {
  const { city } = useCity();

  return (
    <section className="bg-teal-dark py-14 lg:py-16">
      <Container className="text-center">
        <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          You may not be able to be there.
          <br />
          But your loved one doesn&rsquo;t have to be alone.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-white/75">
          Book or request a CareBuddy through Samay Care and stay connected to the healthcare
          journey.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CityAwareCta location="final_cta" variant="inverse" />
          {city.isLive ? (
            <Button
              href="#how-it-works"
              variant="ghost-inverse"
              size="lg"
              onClick={() => track("how_it_works_click", { location: "final_cta" })}
            >
              See How It Works
            </Button>
          ) : (
            <Button
              href="#prelaunch-form"
              variant="ghost-inverse"
              size="lg"
              onClick={() => track("hero_request_click", { location: "final_cta" })}
            >
              Request Assistance
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
