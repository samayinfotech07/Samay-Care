import type { Metadata } from "next";
import { PollFlow } from "@/components/poll/PollFlow";

export const metadata: Metadata = {
  title: { absolute: "Samay Care Market Research | Help Us Make Healthcare More Convenient" },
  description:
    "Share your experience of hospital visits and help Samay Care understand the challenges patients and families face during the healthcare journey.",
  alternates: {
    canonical: "/poll",
  },
  openGraph: {
    type: "website",
    url: "/poll",
    title: "Help Us Make Healthcare More Convenient",
    description: "Share your experience of hospital visits and help shape the future of Samay Care.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Us Make Healthcare More Convenient",
    description: "Share your experience of hospital visits and help shape the future of Samay Care.",
  },
};

export default function PollPage() {
  return (
    <div className="bg-surface">
      <PollFlow />
    </div>
  );
}
