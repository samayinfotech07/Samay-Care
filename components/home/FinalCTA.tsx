"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

export function FinalCTA() {
  return (
    <section className="bg-teal-dark py-20 lg:py-24">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Healthcare is already complicated. Getting help shouldn&rsquo;t be.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-white/75">
          Tell us where you are. We&rsquo;ll let you know when Samay Care comes to your city.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href="#prelaunch-form"
            size="lg"
            className="bg-white text-teal-dark hover:bg-white/90"
            onClick={() => track("hero_notify_click", { location: "final_cta" })}
          >
            Notify Me &rarr;
          </Button>
          <Button
            href="#prelaunch-form"
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/10"
            onClick={() => track("hero_interest_click", { location: "final_cta" })}
          >
            I&rsquo;m Interested
          </Button>
        </div>
      </Container>
    </section>
  );
}
