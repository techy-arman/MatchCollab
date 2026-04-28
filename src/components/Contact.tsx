import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  Clock,
} from "lucide-react";
import { ZohoCrmLeadForm } from "@/components/ZohoCrmLeadForm";

export function Contact() {
  // ✅ ADD YOUR SOCIAL LINKS HERE
  const socials = [
    {
      icon: Instagram,
      link: "https://instagram.com/matchcollab.in",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      link: "https://linkedin.com/in/matchcollab",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      link: "https://www.facebook.com/profile.php?id=61588919248244",
      label: "Facebook",
    },
  ];

  return (
    <section id="contact" className="relative pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
              Business <span className="text-gradient">contact</span>
            </h2>

            <p className="mt-4 max-w-md text-muted-foreground">
              <strong className="text-foreground">For brands:</strong> share campaign goals, budget
              range, and timeline.
              <br />
              <strong className="text-foreground">For influencers:</strong> share your profile and
              niche so we can onboard you.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:matchcollabusiness@gmail.com"
                  className="hover:underline"
                >
                  matchcollabusiness@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href="https://wa.me/916299141009?text=Hi%20Match%20Collab%2C%20I%27m%20interested%20in%20collaboration."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +91 6299141009
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Clock className="h-4 w-4" />
                </span>
                Mon – Sat, 10:00 AM – 7:00 PM IST
              </div>
            </div>

            {/* ✅ SOCIAL LINKS SECTION */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Social Handles
              </p>

              <div className="mt-3 flex gap-3">
                {socials.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-smooth hover:bg-primary hover:text-primary-foreground"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-muted/30 p-6 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Tip</p>
              <p className="mt-1 text-xs">
                Fill the form to reach our team. We usually respond within one business day.
              </p>
            </div>
          </div>

          <ZohoCrmLeadForm />
        </div>
      </div>
    </section>
  );
}