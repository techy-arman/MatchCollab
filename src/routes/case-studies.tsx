import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, TrendingUp, ArrowRight, Quote } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Match Collab — Influencer Marketing Agency" },
      {
        name: "description",
        content:
          "Real Match Collab campaigns: how Kasa Living, Brewhaus Coffee and FitFuel used end-to-end creator management across India to drive sell-outs and 11x ROAS.",
      },
      { property: "og:title", content: "Case Studies" },
      {
        property: "og:description",
        content: "Real Indian campaigns. Real ROAS. End-to-end creator collaborations.",
      },
    ],
  }),
  component: CaseStudiesPage,
});

const studies = [
  {
    brand: "Kasa Living",
    tag: "Home & Decor · D2C · Mumbai",
    headline: "Launching a festive collection with 15 lifestyle micro-creators",
    metric: "2.4Cr+",
    metricLabel: "organic reach",
    sub: "+318% website traffic in 30 days",
    summary:
      "We onboarded 15 home & lifestyle micro-creators across Mumbai, Pune and Bengaluru and ran the entire collaboration end-to-end — briefing, negotiation, content approvals and reporting. Native, story-led Reels drove the Diwali drop to sell-out within 9 days.",
    quote: "Best festive launch we've ever had — Match Collab handled every detail.",
    quoteBy: "Ananya Iyer, CMO",
  },
  {
    brand: "Brewhaus Coffee",
    tag: "FMCG · D2C · Bengaluru",
    headline: "Driving Quick-Commerce demand through Reels-first creators",
    metric: "47K",
    metricLabel: "units sold",
    sub: "Sold out on Zepto & Blinkit in 6 weeks",
    summary:
      "A 60-creator program built around morning-routine Reels in Hindi, English and Kannada. Match Collab matched and negotiated with every creator and managed timelines so quick-commerce sell-through outpaced forecasts by 3x.",
    quote: "They treat our P&L like their own. Strategic, fast, ruthless on results.",
    quoteBy: "Rohan Mehta, Founder",
  },
  {
    brand: "FitFuel",
    tag: "App · Health · Delhi NCR",
    headline: "Athlete partnerships that 10x'd app installs",
    metric: "11.2x",
    metricLabel: "ROAS",
    sub: "12L qualified signups",
    summary:
      "Long-term ambassador deals with five Indian athletes, supported by always-on UGC creators across Tier-1 and Tier-2 cities. Match Collab handled negotiation, scope and reporting — tying every install back to creator and post.",
    quote: "Easily the highest-ROAS partner we've ever worked with in India.",
    quoteBy: "Sneha Kapoor, Head of Growth",
  },
];

function CaseStudiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Case studies"
        title="Real collaborations,"
        highlight="real revenue"
        description="A look behind the metrics — how three brands used Match Collab to compound growth through influencer partnerships."
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-10">
            {studies.map((s, i) => (
              <article
                key={s.brand}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-smooth hover:-translate-y-1 sm:p-12"
              >
                <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-secondary/30 opacity-40 blur-3xl transition-opacity group-hover:opacity-70" />
                <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {s.tag} · 0{i + 1}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">
                      {s.brand}
                    </h3>
                    <p className="mt-3 text-lg text-muted-foreground">{s.headline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {s.summary}
                    </p>

                    <figure className="mt-6 rounded-2xl border border-border bg-muted/40 p-5">
                      <Quote className="h-5 w-5 text-secondary" />
                      <blockquote className="mt-2 text-sm italic">"{s.quote}"</blockquote>
                      <figcaption className="mt-2 text-xs text-muted-foreground">
                        — {s.quoteBy}
                      </figcaption>
                    </figure>
                  </div>

                  <div className="flex flex-col gap-4 rounded-2xl bg-gradient-radiant p-8 text-primary-foreground">
                    <div>
                      <div className="font-display text-7xl font-bold">{s.metric}</div>
                      <div className="mt-1 text-xs uppercase tracking-wider opacity-80">
                        {s.metricLabel}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 self-start rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {s.sub}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
            <h3 className="font-display text-2xl font-bold text-primary sm:text-3xl">
              Want results like these?
            </h3>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-[var(--shadow-glow)]"
            >
              Start your campaign
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
