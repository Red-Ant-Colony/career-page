import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { href: "https://redantcolony.com/", label: "Home" },
  { href: "https://redantcolony.com/tentang-kami/", label: "Tentang Kami" },
  { href: "https://redantcolony.com/layanan/", label: "Layanan" },
  { href: "https://redantcolony.com/portofolio/", label: "Portofolio" },
  { href: "https://redantcolony.com/blog/", label: "Blog" },
  { href: "https://recruitment.redantcolony.com/", label: "Karir" },
  { href: "https://redantcolony.com/tentang-kami/", label: "Kontak Kami" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-brand-soft/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-foreground/80 transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          className="lg:hidden text-brand"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-brand/10 bg-brand-soft px-6 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-brand"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
