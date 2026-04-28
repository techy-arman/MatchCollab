import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useEffect, useId } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

function loadScript(src: string): void {
  const existing = document.querySelector(`script[src="${src}"]`);
  if (existing) return;
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  document.body.appendChild(s);
}

const SOCIAL_OPTIONS = ["Instagram", "Facebook", "Youtube", "Moj", "Tiktok"] as const;
const FOLLOWER_BUCKETS = ["Less than 10k", "10k – 50k", "50k – 100k", "100k – 1M","more than 1M"] as const;
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
const OTHER_PROFILE_OPTIONS = ["-None-", "Instagram", "Youtube", "Facebook", "Moj", "Tiktok"] as const;

const schema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid WhatsApp number")
    .max(30, "Enter a valid WhatsApp number")
    .regex(/^[0-9+()\-.\s]+$/, "Enter a valid WhatsApp number"),
  address: z.string().trim().min(5, "Enter your full address"),
  social: z.enum(SOCIAL_OPTIONS, { message: "Select your social media" }),
  profileLink: z.string().trim().url("Enter a valid profile link (URL)"),
  followersCount: z.enum(FOLLOWER_BUCKETS, { message: "Select a followers range" }),
  otherProfile: z.enum(OTHER_PROFILE_OPTIONS),
  secondaryProfileLink: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine((v) => !v || /^https?:\/\//i.test(v), { message: "Enter a valid URL (or leave blank)" }),
  followersExact: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine((v) => !v || /^[0-9]{1,9}$/.test(v), { message: "Use digits only (max 9)" }),
  niche: z.enum(NICHE_OPTIONS, { message: "Select your niche" }),
});

type Values = z.input<typeof schema>;

export function ZohoCrmLeadForm() {
  const reactId = useId().replace(/[:]/g, "");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      social: "Instagram",
      profileLink: "",
      followersCount: "Less than 10k",
      otherProfile: "-None-",
      secondaryProfileLink: "",
      followersExact: "",
      niche: "Fashion",
    },
  });

  useEffect(() => {
    // Zoho analytics tracking script (kept as-is).
    loadScript(
      "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=87c5c0f44d954c25f0a729fe1208d6050c1171b5907d52f2091f867e1cbeec325b05ac5885e15077977d3f3ccfd2e87egida57e06219bcd727f10f0f4195a6fec812dfca5c687708dad451ae3ec9fc653eagid8a973500cb437911854093d19a38a86f374e335be11df094fa8d65ee8acc104fgid1f042462c7a24c1ad5d3f6e4245e6bdc6c75d58593a7bcfbe256d02b78001708&tw=9474d28b621a9833c652d1272fa1d88e4a7fe702d26aee71d419266f6ff48277"
    );
  }, []);

  const onSubmit = async (values: Values) => {
    try {
      const res = await fetch("/api/zoho-lead", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      toast.success("Submitted! Our team will get back within one business day.");
      reset();
    } catch {
      toast.error("Could not submit right now. Please try again in a moment.");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition-smooth placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/30";
  const selectClass =
    "w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition-smooth focus:border-secondary focus:ring-2 focus:ring-secondary/30";
  const labelClass = "mb-2 block text-sm font-medium text-foreground";
  const errorClass = "mt-1 text-xs text-destructive";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full max-w-xl rounded-3xl border border-border bg-card p-8 shadow-soft"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-bold text-primary">Influencer onboarding</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Share your profile details so we can onboard you faster.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <label className={labelClass} htmlFor={`fullName_${reactId}`}>
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            id={`fullName_${reactId}`}
            placeholder="Your full name"
            className={inputClass}
            {...register("fullName")}
          />
          {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor={`email_${reactId}`}>
              Email <span className="text-destructive">*</span>
            </label>
            <input
              id={`email_${reactId}`}
              placeholder="you@email.com"
              className={inputClass}
              {...register("email")}
            />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          <div>
            <label className={labelClass} htmlFor={`phone_${reactId}`}>
              WhatsApp Number <span className="text-destructive">*</span>
            </label>
            <input
              id={`phone_${reactId}`}
              placeholder="+91 9XXXXXXXXX"
              className={inputClass}
              {...register("phone")}
            />
            {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor={`address_${reactId}`}>
            Full Address <span className="text-destructive">*</span>
          </label>
          <input
            id={`address_${reactId}`}
            placeholder="City, State, Country"
            className={inputClass}
            {...register("address")}
          />
          {errors.address && <p className={errorClass}>{errors.address.message}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor={`social_${reactId}`}>
              Social media <span className="text-destructive">*</span>
            </label>
            <select id={`social_${reactId}`} className={selectClass} {...register("social")}>
              {SOCIAL_OPTIONS.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
            {errors.social && <p className={errorClass}>{errors.social.message}</p>}
          </div>

          <div>
            <label className={labelClass} htmlFor={`followersCount_${reactId}`}>
              Followers Count <span className="text-destructive">*</span>
            </label>
            <select
              id={`followersCount_${reactId}`}
              className={selectClass}
              {...register("followersCount")}
            >
              {FOLLOWER_BUCKETS.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
            {errors.followersCount && <p className={errorClass}>{errors.followersCount.message}</p>}
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor={`profileLink_${reactId}`}>
            Profile link <span className="text-destructive">*</span>
          </label>
          <input
            id={`profileLink_${reactId}`}
            placeholder="https://instagram.com/yourhandle"
            className={inputClass}
            {...register("profileLink")}
          />
          {errors.profileLink && <p className={errorClass}>{errors.profileLink.message}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor={`niche_${reactId}`}>
              Niche <span className="text-destructive">*</span>
            </label>
            <select id={`niche_${reactId}`} className={selectClass} {...register("niche")}>
              {NICHE_OPTIONS.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
            {errors.niche && <p className={errorClass}>{errors.niche.message}</p>}
          </div>

          <div>
            <label className={labelClass} htmlFor={`otherProfile_${reactId}`}>
              Any other profile (optional)
            </label>
            <select
              id={`otherProfile_${reactId}`}
              className={selectClass}
              {...register("otherProfile")}
            >
              {OTHER_PROFILE_OPTIONS.map((v) => (
                <option key={v} value={v}>
                  {v === "-None-" ? "None" : v}
                </option>
              ))}
            </select>
            {errors.otherProfile && <p className={errorClass}>{errors.otherProfile.message}</p>}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor={`secondaryProfileLink_${reactId}`}>
              Secondary profile link (optional)
            </label>
            <input
              id={`secondaryProfileLink_${reactId}`}
              placeholder="https://youtube.com/@yourchannel"
              className={inputClass}
              {...register("secondaryProfileLink")}
            />
            {errors.secondaryProfileLink && (
              <p className={errorClass}>{errors.secondaryProfileLink.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass} htmlFor={`followersExact_${reactId}`}>
              Followers (optional)
            </label>
            <input
              id={`followersExact_${reactId}`}
              placeholder="e.g. 125000"
              className={inputClass}
              {...register("followersExact")}
            />
            {errors.followersExact && <p className={errorClass}>{errors.followersExact.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-[var(--shadow-glow)] disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              Submit details
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

