import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Verified, Search, ArrowRight, Check } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { useState } from "react";
import c1 from "@/assets/creator-1.jpg";
import c2 from "@/assets/creator-2.jpg";
import c3 from "@/assets/creator-3.jpg";
import c4 from "@/assets/creator-4.jpg";
import c5 from "@/assets/creator-5.jpg";
import c6 from "@/assets/creator-6.jpg";

export const Route = createFileRoute("/creators")({
  head: () => ({
    meta: [
      { title: "Match Collab — Influencer Marketing Agency" },
      {
        name: "description",
        content:
          "Join Match Collab and collaborate with growth-focused brands. Transparent deliverables, fair commercials, and a consistent collaboration pipeline.",
      },
      { property: "og:title", content: "For Influencers — Match Collab" },
      {
        property: "og:description",
        content: "Onboard with Match Collab and get serious, long-term brand deals.",
      },
    ],
  }),
  component: CreatorsPage,
});

const benefits = [
  "Brand opportunities aligned with your niche and audience",
  "Transparent deliverables, timeline, and payment terms",
  "Negotiation support for fair campaign commercials",
  "Professional communication and smooth approvals",
  "Consistent collaboration pipeline through our network",
];

const creators = [
  { img: c1, name: "Aarohi Sharma", niche: "Fashion", followers: "1.4M", engagement: "6.8%", location: "Mumbai" },
  { img: c2, name: "Arjun Patel", niche: "Tech", followers: "890K", engagement: "8.1%", location: "Bengaluru" },
  { img: c3, name: "Meera Nair", niche: "Fitness", followers: "1.2M", engagement: "7.4%", location: "Hyderabad" },
  { img: c4, name: "Kabir Singh", niche: "Food", followers: "640K", engagement: "9.2%", location: "Delhi NCR" },
  { img: c5, name: "Ishita Verma", niche: "Travel", followers: "1.8M", engagement: "5.9%", location: "Goa" },
  { img: c6, name: "Riya Kapoor", niche: "Beauty", followers: "2.1M", engagement: "6.2%", location: "Chandigarh" },
];

const niches = ["All", "Fashion", "Tech", "Fitness", "Food", "Travel", "Beauty"];

function CreatorsPage() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = creators.filter(
    (c) =>
      (filter === "All" || c.niche === filter) &&
      c.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <PageShell>
      <PageHero
        eyebrow="For Influencers"
        title="Join us and collaborate with"
        highlight="growth-focused brands"
        description="If you are a creator who wants serious, long-term brand deals, we onboard you and represent your collaborations professionally."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
            <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
              What you get when you onboard with us
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-secondary/30 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-[var(--shadow-glow)]"
              >
                Influencers Join Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-sm text-muted-foreground">
                Submit your profile and collaboration interests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
