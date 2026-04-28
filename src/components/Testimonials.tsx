import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ananya Iyer",
    role: "CMO, D2C Brand",
    rating: 5,
    quote:
      "Match Collab made influencer marketing actually feel professional. Briefing, negotiation, approvals — handled end-to-end. We just signed off the deliverables.",
  },
  {
    name: "Rohan Mehta",
    role: "Startup Founder",
    rating: 4,
    quote:
      "They treat our P&L like their own — strategic, fast and ruthless on results. Easily the best creator agency we've worked with in India.",
  },
  {
    name: "Sneha Kapoor",
    role: "Head of Growth, Startup",
    rating: 5,
    quote:
      "Transparent rate cards, smooth approvals and a steady pipeline of relevant creators. Our highest-ROAS partner of FY25 so far.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Loved by <span className="text-gradient">brands & creators</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-secondary/30" />
              <div className="flex gap-1">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-primary">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
