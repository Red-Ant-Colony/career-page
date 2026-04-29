import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { jobs } from "@/data/jobs";

export const Route = createFileRoute("/karir/")({
  component: KarirPage,
  head: () => ({
    meta: [
      { title: "Karir | Red Ant Colony" },
      { name: "description", content: "Bergabunglah dengan koloni Red Ant. Temukan posisi karir yang sesuai dengan keahlian Anda." },
    ],
  }),
});

function KarirPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => jobs.filter((j) => j.title.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-soft py-20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand">JOIN OUR COLONY</p>
            <h1 className="mt-3 text-6xl font-bold text-brand">Karir</h1>
            <p className="mt-6 max-w-4xl text-sm leading-relaxed text-foreground/80">
              Selamat datang di halaman karir Red Ant Colony, tempat di mana kami mencari individu berbakat,
              bersemangat dan kreatif yang ingin bergabung dengan koloni kami. Dengan lingkungan kerja yang
              mendukung pertumbuhan profesional, ciptakan jejak karir dan alami perkembangan yang tak terbatas
              dalam diri Anda. Temukan posisi yang sesuai dengan keahlian Anda dan ikut serta dalam perjalanan
              kami mengubah dunia teknologi.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari Posisi Karir"
                className="w-full rounded-full border-2 border-brand bg-transparent px-7 py-4 pr-16 text-sm text-foreground placeholder:text-brand/60 outline-none focus:ring-2 focus:ring-brand/20"
              />
              <button
                aria-label="Search"
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full text-brand hover:bg-brand-soft"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            <ul className="mt-12 divide-y divide-brand/15">
              {filtered.map((job) => (
                <li
                  key={job.slug}
                  className="grid grid-cols-1 items-center gap-4 py-6 md:grid-cols-[2fr_1fr_1fr_auto]"
                >
                  <h3 className="text-lg font-bold text-brand">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.type}</p>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                  <Link
                    to="/karir/$jobId"
                    params={{ jobId: job.slug }}
                    className="inline-flex items-center gap-2 justify-self-start rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition-colors hover:opacity-90 md:justify-self-end"
                  >
                    Lihat Detail <Search className="h-4 w-4" />
                  </Link>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="py-10 text-center text-sm text-muted-foreground">
                  Tidak ada posisi yang cocok.
                </li>
              )}
            </ul>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-card shadow-[0_30px_60px_-30px_rgba(160,24,40,0.25)]">
            <div className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 bg-brand/40 [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)]" />
            <div className="pointer-events-none absolute -right-16 -top-10 h-56 w-56 bg-brand [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)]" />
            <div className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-56 -translate-x-1/2 bg-brand/20 [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)]" />

            <div className="relative z-10 px-6 py-16 text-center">
              <div className="mx-auto h-[2px] w-10 bg-brand" />
              <h2 className="mt-5 text-4xl font-bold text-brand md:text-5xl">Mari Bekerja Sama!</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
                Mari bersama mewujudkan sistem yang sesuai dengan keinginan Anda. Segera hubungi kami untuk lebih lanjut!
              </p>
              <a
                href="/kontak-kami"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-colors hover:opacity-90"
              >
                Kontak Kami <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
