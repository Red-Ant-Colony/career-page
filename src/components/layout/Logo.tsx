import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/logo-red-ant.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="Red Ant Colony">
      <img src={logoUrl} alt="Red Ant Colony" className="h-10 w-auto object-contain" />
    </Link>
  );
}