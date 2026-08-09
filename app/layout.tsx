import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://samaycare.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Samay Care | Healthcare Convenience Platform | CareBuddy Assistance",
    template: "%s | Samay Care",
  },
  description:
    "Samay Care makes healthcare convenient with CareBuddy assistance for hospital visits, patient navigation and non-clinical healthcare coordination. Coming soon to your city.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Samay Care",
    title: "Samay Care — Making Healthcare Convenient",
    description: "Meet CareBuddy — trusted human assistance for hospital visits, coming soon to your city.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samay Care — Making Healthcare Convenient",
    description: "Meet CareBuddy — trusted human assistance for hospital visits, coming soon to your city.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Samay Care",
  legalName: "Samay Invotech Private Limited",
  url: siteUrl,
  slogan: "Making Healthcare Convenient.",
  description:
    "Samay Care is a pre-launch healthcare convenience platform connecting customers with CareBuddies — trained, non-clinical human assistants for the hospital journey.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
