import { Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "https://redantcolony.com/tentang-kami/", label: "Tentang Kami" },
  { href: "https://redantcolony.com/layanan/", label: "Layanan" },
  { href: "https://redantcolony.com/portofolio/", label: "Portofolio" },
  { href: "https://redantcolony.com/blog/", label: "Blog" },
  { href: "https://recruitment.redantcolony.com/", label: "Karir" },
  { href: "https://redantcolony.com/tentang-kami/", label: "Kontak Kami" },
] as const;

export function Footer() {
  return (
    <footer className="bg-brand-soft mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              Gedung Merah, Perum De'Asmaradana Residence Jl. Sugeng Jeroni, Patangpuluhan, Wirobrajan,
              Kota Yogyakarta, Daerah Istimewa Yogyakarta 55251
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-md bg-brand text-brand-foreground hover:opacity-90">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-md bg-brand text-brand-foreground hover:opacity-90">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap items-start justify-start gap-x-8 gap-y-3 lg:justify-end">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-foreground/80 hover:text-brand">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-brand/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <span>Copyright 2026 © PT. Red Ant Tech</span>
          <span>Powered by Red Ant Colony</span>
        </div>
      </div>
    </footer>
  );
}
