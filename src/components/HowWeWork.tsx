import { ClipboardList, Users2, Handshake, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Onboard & brief",
    desc: "We onboard influencers into our network and collect detailed brand campaign briefs.",
  },
  {
    icon: Users2,
    title: "Match",
    desc: "We match the right influencers with the right brand opportunities based on fit, audience, and goals.",
  },
  {
    icon: Handshake,
    title: "Negotiate",
    desc: "We handle rates, deliverables, timelines, and collaboration terms on behalf of both sides.",
  },
  {
    icon: BarChart3,
    title: "Execute & report",
    desc: "Full execution, communication, reporting, and planning for your next collaboration.",
  },
];

export function HowWeWork() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            How we work
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            A simple, <span className="text-gradient">end-to-end</span> process
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four steps from first conversation to a campaign you can report on.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="relative">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="absolute right-0 top-0 font-display text-5xl font-bold text-secondary/30">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
