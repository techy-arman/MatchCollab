import { Search, Handshake, MessageSquare, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Influencer Discovery & Matching",
    desc: "We map your campaign brief to creators in our network based on fit, audience, and goals.",
  },
  {
    icon: Handshake,
    title: "Negotiation & Contracts",
    desc: "Complete negotiation on pricing, scope, deliverables, and collaboration terms — done for you.",
  },
  {
    icon: MessageSquare,
    title: "End-to-End Execution",
    desc: "Communication, approvals, timelines and delivery management handled professionally.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Strategy",
    desc: "Campaign reporting, learnings and recommendations to plan your next collaboration.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-20">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            What we do
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Influencer collaborations, <span className="text-gradient">managed</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Match Collab solves the biggest gap in influencer marketing — helping brands find
            reliable creators and helping creators get consistent, relevant opportunities.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                <div className="absolute right-0 top-0 font-display text-5xl font-bold text-secondary/20">
                  0{i + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
