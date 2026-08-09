import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/site/Logo";
import { footerColumns } from "@/data/footer";

export function Footer() {
  return (
    <footer className="bg-teal-dark text-white/90">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm font-medium text-white/70">Making Healthcare Convenient.</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
              India&rsquo;s Healthcare Convenience Platform helping patients and families navigate
              healthcare with greater ease, support and confidence.
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
        </div>

        <div className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-5 text-sm leading-6 text-white/80">
          <strong className="font-semibold text-white">CareBuddy is a non-clinical assistance service.</strong>{" "}
          For medical emergencies, contact emergency medical services or your hospital immediately.
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-8 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Samay Care, a brand of Samay Invotech Private Limited. All rights reserved.</p>
          <p>Currently in pre-launch across India.</p>
        </div>
      </Container>
    </footer>
  );
}
