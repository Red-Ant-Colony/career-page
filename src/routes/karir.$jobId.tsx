import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getJobBySlug } from "@/data/jobs";

export const Route = createFileRoute("/karir/$jobId")({
  component: KarirDetailPage,
  loader: ({ params }) => {
    const job = getJobBySlug(params.jobId);
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.job.title ?? "Karir"} | Red Ant Colony` },
      {
        name: "description",
        content: `Lowongan ${loaderData?.job.title} di Red Ant Colony. ${loaderData?.job.type} - ${loaderData?.job.location}.`,
      },
    ],
  }),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-6">
        <p className="text-sm text-muted-foreground">{error.message}</p>
      </main>
      <Footer />
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center gap-4 p-6">
        <h1 className="text-2xl font-bold text-brand">Lowongan tidak ditemukan</h1>
        <Link to="/karir" className="text-sm text-brand underline">
          Kembali ke daftar karir
        </Link>
      </main>
      <Footer />
    </div>
  ),
});

function KarirDetailPage() {
  const { job } = Route.useLoaderData();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-soft py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-4xl font-bold text-brand md:text-5xl">{job.title}</h1>
            <p className="mt-3 text-sm text-foreground/80">
              {job.type} - {job.location}
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_360px]">
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-bold text-brand">Deskripsi Pekerjaan</h2>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-foreground">
                  {job.descriptions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-xl font-bold text-brand">Persyaratan</h2>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-foreground">
                  {job.requirements.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-xl font-bold text-brand">Benefit</h2>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-foreground">
                  {job.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="h-fit rounded-2xl bg-card p-8 shadow-[0_20px_50px_-30px_rgba(148,24,36,0.35)] ring-1 ring-brand/10">
              <div className="space-y-6 text-center">
                <div>
                  <h3 className="text-base font-bold text-brand">Lokasi Penempatan</h3>
                  <p className="mt-1 text-sm text-foreground">{job.location}</p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand">Jenis Pekerjaan</h3>
                  <p className="mt-1 text-sm text-foreground">{job.type}</p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand">Terakhir Pendaftaran</h3>
                  <p className="mt-1 text-sm text-foreground">{job.deadline}</p>
                </div>
                <button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-colors hover:opacity-90">
                  Lamar Posisi Ini <Search className="h-4 w-4" />
                </button>
                <p className="text-xs leading-relaxed text-brand">
                  Pastikan Anda telah mempersiapkan CV, Ijazah,
                  <br /> dan dokumen pendukung lainnya
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-card shadow-[0_30px_60px_-30px_rgba(148,24,36,0.25)]">
            <div className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 bg-brand/40 [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)]" />
            <div className="pointer-events-none absolute -right-16 -top-10 h-56 w-56 bg-brand [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)]" />
            <div className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-56 -translate-x-1/2 bg-brand/20 [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)]" />

            <div className="relative z-10 px-6 py-16 text-center">
              <div className="mx-auto h-[2px] w-10 bg-brand" />
              <h2 className="mt-5 text-4xl font-bold text-brand md:text-5xl">Mari Bekerja Sama!</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
                Mari bersama mewujudkan sistem yang sesuai dengan keinginan Anda. Segera hubungi kami untuk lebih lanjut!
              </p>
              <Link
                to="/kontak-kami"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-colors hover:opacity-90"
              >
                Kontak Kami <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}