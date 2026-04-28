import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link to="/" className="group flex items-center" aria-label="Match Collab">
      <img
        src={logo}
        alt="Match Collab — Connect, Collaborate, Elevate"
        className={cn(
          "w-auto object-contain transition-transform group-hover:scale-[1.02]",
          className
        )}
      />
    </Link>
  );
}