import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { servicePages } from "@/data/servicePages";

const socialImage = {
  url: "/images/samay-care-social-share.png",
  alt: "Samay Care — Your loved one is not alone. Neither are you.",
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) return {};

  const path = `/services/${service.slug}`;

  return {
    title: { absolute: service.seoTitle },
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: service.seoTitle,
      description: service.metaDescription,
      images: [{ ...socialImage, width: 1536, height: 1024 }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.metaDescription,
      images: [socialImage],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    serviceType: service.h1,
    provider: { "@type": "Organization", name: "Samay Care" },
    areaServed: "Delhi NCR",
    description: service.metaDescription,
  };

  const otherServices = servicePages.filter((s) => s.slug !== service.slug);

  return (
    <div className="py-12 lg:py-16">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: service.h1 }]} />

        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{service.h1}</h1>
        <p className="mt-4 text-base leading-7 text-text-muted">{service.intro}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-white p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                <div>
                  <h2 className="text-[15px] font-semibold text-navy">{item.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-teal-soft p-5 text-sm leading-6 text-text-muted">
          A CareBuddy provides trained, verified, <strong className="text-navy">non-clinical</strong>{" "}
          assistance only. Clinical decisions, diagnosis and treatment remain with qualified healthcare
          professionals.
        </div>

        <div className="mt-8">
          <Button href="/#prelaunch-form" size="lg">
            Request This Assistance &rarr;
          </Button>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-lg font-semibold text-navy">Other CareBuddy services</h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {otherServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="font-medium text-teal hover:text-teal-dark">
                  {s.h1}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-text-muted">
            Launching first in{" "}
            <Link href="/locations/delhi-ncr" className="font-medium text-teal hover:text-teal-dark">
              Delhi NCR
            </Link>
            . Learn more about{" "}
            <Link href="/carebuddy" className="font-medium text-teal hover:text-teal-dark">
              what a CareBuddy does
            </Link>
            .
          </p>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      </Container>
    </div>
  );
}
