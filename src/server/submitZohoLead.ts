import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SOCIAL_OPTIONS = ["Instagram", "Facebook", "Youtube", "Moj", "Tiktok"] as const;
const FOLLOWER_BUCKETS = ["Less than 10k", "10k – 50k", "50k – 100k", "100k – 1M"] as const;
const NICHE_OPTIONS = [
  "Fashion",
  "Food",
  "Beauty",
  "Travel",
  "Fitness",
  "Tech",
  "Finance / Investing",
  "Gaming",
  "Education",
  "Couple Content",
  "Family / Parenting",
] as const;
const OTHER_PROFILE_OPTIONS = ["-None-", "Instagram", "Youtube", "Facebook", "Moj", "Tiktoh"] as const;

export const zohoLeadSchema = z.object({
  fullName: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z.string().trim().min(10).max(30),
  address: z.string().trim().min(5),
  social: z.enum(SOCIAL_OPTIONS),
  profileLink: z.string().trim().url(),
  followersCount: z.enum(FOLLOWER_BUCKETS),
  otherProfile: z.enum(OTHER_PROFILE_OPTIONS),
  secondaryProfileLink: z.string().trim().optional().or(z.literal("")),
  followersExact: z.string().trim().optional().or(z.literal("")),
  niche: z.enum(NICHE_OPTIONS),
});

export type ZohoLeadInput = z.input<typeof zohoLeadSchema>;

export const submitZohoLead = createServerFn({ method: "POST" })
  .inputValidator((data: ZohoLeadInput) => zohoLeadSchema.parse(data))
  .handler(async ({ data }) => {
    const formData = new FormData();

    // Required Zoho hidden fields (do not remove).
    formData.set(
      "xnQsjsdp",
      "70956d19b389fa03e75055954d7b4d94885625ae0081fcb6c1cfcc4387adcac2"
    );
    formData.set("zc_gad", "");
    formData.set(
      "xmIwtLD",
      "1fbe27841da1ca645f76c2d062a9956491f80e13723050f01df405ab3aa68ec7817f05cf20801e4f75abcd4f1fb5b875"
    );
    formData.set("actionType", "TGVhZHM=");
    formData.set("returnURL", "null");
    formData.set("aG9uZXlwb3Q", "");

    // Field mapping (Zoho field names must match exactly).
    formData.set("Last Name", data.fullName);
    formData.set("Email", data.email);
    formData.set("Phone", data.phone);
    formData.set("LEADCF5", data.address);
    formData.set("LEADCF7", data.social);
    formData.set("Website", data.profileLink);
    formData.set("LEADCF8", data.followersCount);
    formData.set("LEADCF9", data.otherProfile);
    if (data.secondaryProfileLink) formData.set("LEADCF4", data.secondaryProfileLink);
    if (data.followersExact) formData.set("LEADCF51", data.followersExact);
    formData.set("LEADCF6", data.niche);

    const res = await fetch("https://crm.zoho.in/crm/WebToLeadForm", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`Zoho returned ${res.status}`);
    }

    return { ok: true as const };
  });

