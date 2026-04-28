import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  Handshake,
  MessageSquare,
  BarChart3,
  Target,
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Match Collab — Influencer Marketing Agency" },
      {
        name: "description",
        content:
          "We partner with founders and marketing teams to run influencer collaborations professionally — from creator matching and negotiation to delivery and reporting.",
      },
      { property: "og:title", content: "For Brands — Match Collab" },
      {
        property: "og:description",
        content: "Book a meet and build a creator growth plan with Match Collab.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Target,
    title: "Campaign Brief Alignment",
    desc: "We translate your goals into a clear creator requirement map so every match has purpose.",
    bullets: ["Audience targeting", "KPI definition", "Budget framing"],
  },
  {
    icon: Search,
    title: "Creator Matching",
    desc: "Matched influencers from our onboarded creator network, scored on fit, audience, and intent.",
    bullets: ["Niche relevance", "Engagement quality", "Brand-safety vetting"],
  },
  {
    icon: Handshake,
    title: "Negotiation",
    desc: "Complete negotiation on pricing, scope, deliverables, and usage rights — done for you.",
    bullets: ["Rate benchmarking", "Scope locking", "Contracts & rights"],
  },
  {
    icon: MessageSquare,
    title: "End-to-End Execution",
    desc: "Communication and approvals managed professionally so your team stays focused.",
    bullets: ["Briefing & creative", "Approval workflow", "Delivery tracking"],
  },
  {
    icon: BarChart3,
    title: "Reporting & Insights",
    desc: "Campaign reporting and improvement recommendations after every collaboration.",
    bullets: ["Performance dashboard", "Learnings doc", "Next-cycle plan"],
  },
  {
    icon: ShieldCheck,
    title: "Brand Safety",
    desc: "Vetting, contracts and compliance to protect your reputation on every campaign.",
    bullets: ["Compliance checks", "Disclosure management", "Risk reviews"],
  },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="For Brands"
        title="Book a meet and build a"
        highlight="creator growth plan"
        description="We partner with founders and marketing teams who need influencer collaborations managed professionally — without operational chaos."
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:border-secondary/60 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-secondary/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="h-3.5 w-3.5 text-secondary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute right-0 top-0 font-display text-5xl font-bold text-secondary/20">
                    0{i + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-border bg-gradient-radiant p-10 text-center text-primary-foreground shadow-soft">
            <h3 className="font-display text-3xl font-bold sm:text-4xl">Book a Meet</h3>
            <p className="max-w-lg opacity-90">
              Share your goals and we'll prepare a tailored plan within one business day.
            </p>
            <a
              href="https://wa.me/916299141009?text=Hello%2C%20we%E2%80%99re%20a%20brand%20looking%20to%20collaborate%20with%20influencers%20for%20our%20upcoming%20campaigns.%20We%20came%20across%20your%20platform%20and%20would%20love%20to%20know%20more%20about%20your%20services%2C%20pricing%2C%20and%20how%20you%20manage%20influencer%20collaborations."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 text-sm font-semibold text-secondary-foreground shadow-soft transition-smooth hover:scale-105"
            >
              Book a Meet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
