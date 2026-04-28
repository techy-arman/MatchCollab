import { Instagram, Verified } from "lucide-react";
import c1 from "@/assets/creator-1.jpg";
import c2 from "@/assets/creator-2.jpg";
import c3 from "@/assets/creator-3.jpg";
import c4 from "@/assets/creator-4.jpg";
import c5 from "@/assets/creator-5.jpg";
import c6 from "@/assets/creator-6.jpg";

const creators = [
  { img: c1, name: "Sofia Reyes", niche: "Fashion", followers: "2.4M" },
  { img: c2, name: "Arjun Patel", niche: "Tech", followers: "890K" },
  { img: c3, name: "Maya Chen", niche: "Fitness", followers: "1.2M" },
  { img: c4, name: "Luca Romano", niche: "Food", followers: "640K" },
  { img: c5, name: "Emma Wilde", niche: "Travel", followers: "1.8M" },
  { img: c6, name: "Zara Kim", niche: "Beauty", followers: "3.1M" },
];

export function Creators() {
  return (
    <section id="creators" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Our network
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Meet the <span className="text-gradient">creators</span> shaping culture
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A curated roster of premium talent across every niche, vetted for engagement, brand
            safety and performance.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {creators.map((c) => (
            <article
              key={c.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-smooth hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={768}
                  height={896}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  {c.niche}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-display text-xl font-bold">{c.name}</h3>
                      <Verified className="h-4 w-4 fill-primary text-primary-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">{c.followers} followers</p>
                  </div>
                  <button
                    aria-label="View profile"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-soft transition-smooth group-hover:scale-110"
                  >
                    <Instagram className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
