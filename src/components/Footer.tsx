import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Instagram, Linkedin,Facebook, Youtube, Twitter, Mail, Phone, Clock } from "lucide-react";

type LinkItem = {
  label: string;
  to: "/" | "/services" | "/creators" | "/case-studies" | "/faq" | "/contact";
};

const quickLinks: LinkItem[] = [
  { label: "Home", to: "/" },
  { label: "For Brands", to: "/services" },
  { label: "For Influencers", to: "/creators" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
];

const socials = [
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/matchcollab.in/",
  },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/matchcollab" },
  { Icon: Facebook, label: "Facebook", href: "https://facebook.com/profile.php?id=61588919248244" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card py-16">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Logo className="h-14"/>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Match Collab onboards influencers, connects them with brand opportunities, and handles
              complete collaboration management including negotiations and end-to-end execution.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:matchcollabusiness@gmail.com" className="hover:underline">
                  matchcollabusiness@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a
                  href="https://wa.me/916299141009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +91 6299141009
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
              Social Handles
            </h4>
            <ul className="mt-4 space-y-2">
              {socials.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Icon className="h-4 w-4 text-secondary" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Connect · Collaborate · Elevate
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Match Collab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
