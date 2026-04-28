import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Match Collab — Influencer Marketing Agency" },
      {
        name: "description",
        content:
          "Answers about Match Collab's influencer marketing services in India — onboarding, creator matching, negotiation, deliverables, and pricing.",
      },
      { property: "og:title", content: "FAQ — Match Collab" },
      {
        property: "og:description",
        content: "Common questions from Indian brands and creators about working with Match Collab.",
      },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  {
    q: "I'm a brand — how do you actually help me get results?",
    a: "We don’t just connect you with influencers. We shortlist creators based on your target audience, handle negotiations, manage the campaign end-to-end, and focus on outcomes like reach, engagement, and conversions — not just posting content.",
  },
  {
    q: "What kind of brands do you usually work with?",
    a: "We work with brands across beauty, fitness, food, tech, and startups. Instead of a one-size-fits-all approach, we match each campaign with creators who are highly relevant to that specific niche and audience.",
  },
  {
    q: "How do you select the right influencers for a campaign?",
    a: "We match creators based on niche relevance, audience quality, engagement patterns, and brand fit. We avoid fake engagement and focus on creators who actually influence buying decisions.",
  },
  {
    q: "What is the minimum budget to get started?",
    a: "We typically recommend starting from ₹500–₹50,000 for micro-influencer campaigns. However, we also guide you on how to maximize results based on your budget.",
  },
  {
    q: "How fast can we launch a campaign?",
    a: "Most campaigns go live within 7–14 days. If you're working on a tight timeline, we can execute faster depending on creator availability.",
  },
  {
    q: "Do you guarantee results or ROI?",
    a: "We don’t make unrealistic guarantees. What we do guarantee is a structured process, relevant creator selection, and optimized execution to give your campaign the best possible outcome.",
  },
  {
    q: "I'm an influencer — why should I join Match Collab?",
    a: "We help you get consistent brand opportunities, handle negotiations on your behalf, and ensure smooth communication so you can focus on creating content.",
  },
  {
    q: "Do you take a commission from influencers?",
    a: "Yes, we take a small commission on collaborations we manage. In return, we bring you paid opportunities, better deals, and long-term brand relationships.",
  },
  {
    q: "Will I get regular brand deals as a creator?",
    a: "We onboard creators selectively. Once you're in, we match you with relevant campaigns whenever there’s a fit. Consistency depends on your niche, audience, and content quality.",
  },
  {
    q: "Do I need a minimum follower count to join?",
    a: "Not necessarily. We look at content quality, niche, and engagement more than just followers. Even nano creators can get opportunities if their audience is strong.",
  },
  {
    q: "What makes Match Collab different from other agencies?",
    a: "We focus on practical execution — not just influencer lists. From creator selection to negotiation and delivery, we handle everything with a focus on real business outcomes.",
  },
];

function FAQPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked, "
        highlight="Questions"
        description="Everything brands and creators ask us before collaborating with Match Collab."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-smooth open:border-secondary"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-primary">
                  {f.q}
                  <ChevronDown className="h-4 w-4 flex-none text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-10">
            <h3 className="font-display text-2xl font-bold text-primary sm:text-3xl">
              Still have a question?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our team responds within one working day, IST.
            </p>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-[var(--shadow-glow)]"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
