import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowWeWork } from "@/components/HowWeWork";
import { Testimonials } from "@/components/Testimonials";
import { PageShell } from "@/components/PageShell";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Match Collab — Influencer Marketing Agency" },
      {
        name: "description",
        content:
          "Match Collab onboards influencers, connects them with brand opportunities, and handles complete collaboration management — negotiation to delivery.",
      },
      { property: "og:title", content: "Match Collab — Influencer Marketing Agency" },
      {
        property: "og:description",
        content: "Connect · Collaborate · Elevate. We run influencer collaborations end-to-end.",
      },
    ],
  }),
  component: Index,
});

function AboutBlock() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-soft sm:p-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            About us
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">
            Bridging India's <span className="text-gradient">brands</span> and{" "}
            <span className="text-gradient">creators</span>
          </h2>
          <div className="mt-6 grid gap-6 text-muted-foreground sm:grid-cols-2">
            <p>
              Match Collab solves the biggest gap in Indian influencer marketing — helping
              D2C brands find reliable, regional creators and helping influencers land
              consistent, relevant collaborations.
            </p>
            <p>
              We onboard creators across Hindi, English and regional languages, understand
              brand campaign needs, and match both sides on fit, audience and goals. From
              first discussion to final report, our team runs everything end-to-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative pb-16 sm:pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-radiant p-10 text-center text-primary-foreground shadow-soft sm:p-16">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Ready to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base opacity-90">
            If you are a brand, book a call. If you are an influencer, join our creator network.
            We are ready to collaborate.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 text-sm font-semibold text-secondary-foreground shadow-soft transition-smooth hover:scale-105"
            >
              Contact Team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-semibold text-primary-foreground transition-smooth hover:bg-primary-foreground/10"
            >
              Influencers Join Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <PageShell>
      <Hero />
      <AboutBlock />
      <Services />
      <HowWeWork />
      <Testimonials />
      <FinalCTA />
    </PageShell>
  );
}
