import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Contact";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Match Collab — Influencer Marketing Agency" },
      {
        name: "description",
        content:
          "Brands: share campaign goals, budget and timeline. Influencers: share your profile and niche. Match Collab replies within one business day.",
      },
      { property: "og:title", content: "Contact — Match Collab" },
      {
        property: "og:description",
        content: "Let us onboard and manage your next collaboration.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let us onboard and manage your"
        highlight="next collaboration"
        description="For brands: share campaign goals, budget range, and timeline. For influencers: share your profile and niche so we can onboard you and connect you with suitable brands."
      />
      <Contact />
    </PageShell>
  );
}
