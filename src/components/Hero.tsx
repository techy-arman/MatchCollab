import { ArrowRight, Users, Sparkles, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
      {/* floating brand orbs */}
      <div className="pointer-events-none absolute -left-20 top-32 h-72 w-72 rounded-full bg-secondary/30 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            Connect · Collaborate · Elevate
          </div>

          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            India's Influencer <br className="hidden sm:block" />
            Marketing Agency for <span className="text-gradient">Real Results</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
            Match Collab onboards Indian creators and manages brand collaborations end-to-end —
            from negotiation to delivery — across all social media platforms.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-muted-foreground/80">
          From creator selection to final ROI, we handle everything.
          You focus on scaling your business.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/services"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-[var(--shadow-glow)] sm:w-auto"
            >
              For Brands
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-card px-7 py-4 text-base font-semibold text-primary transition-smooth hover:bg-primary hover:text-primary-foreground sm:w-auto"
            >
              <Users className="h-4 w-4" />
              Join as Creator
            </Link>
          </div>

          {/* stats */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { v: "200+", l: "creators onboarded" },
              { v: "100Cr+", l: "Views Across Campaigns" },
              { v: "4.8/5", l: "Avg Brand Rating", icon: true },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-5 text-left shadow-soft">
                <div className="flex items-center gap-1 font-display text-3xl font-bold text-primary">
                  {s.v}
                  {s.icon && <Star className="h-5 w-5 fill-secondary text-secondary" />}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
