import { Mail, Phone, Globe as GlobeIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/site/Logo";
import { footerColumns } from "@/data/footer";

const contactDetails = [
  { icon: Phone, label: "+91 72100 00700", href: "tel:+917210000700" },
  { icon: Mail, label: "hello@samaycare.com", href: "mailto:hello@samaycare.com" },
  { icon: GlobeIcon, label: "www.samaycare.com", href: "https://samaycare.com" },
];

export function Footer() {
  return (
    <footer className="bg-teal-dark text-white/90">
      <Container className="py-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-3 text-sm font-medium text-white/70">Making Healthcare Convenient.</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
              India&rsquo;s Healthcare Convenience Platform making healthcare journeys simple,
              supported and stress-free.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.id} id={column.id}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              {contactDetails.map((contact) => (
                <li key={contact.label} className="flex items-center gap-2.5">
                  <contact.icon className="h-5 w-5 shrink-0 text-white/70" strokeWidth={2} aria-hidden="true" />
                  <a
                    href={contact.href}
                    className="text-sm text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                  >
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5 text-sm leading-6 text-white/80">
          <strong className="font-semibold text-white">CareBuddy is a non-clinical assistance service.</strong>{" "}
          For medical emergencies, contact emergency medical services or your hospital immediately.
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Samay Care. All rights reserved.</p>
          <p>Currently in pre-launch across India.</p>
        </div>
      </Container>
    </footer>
  );
}
