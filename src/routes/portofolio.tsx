import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/portofolio")({
  component: Page,
  head: () => ({ meta: [{ title: "Portofolio | Red Ant Colony" }] }),
});

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-soft py-20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand">OUR WORK</p>
            <h1 className="mt-3 text-5xl font-bold text-brand">Portofolio</h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-foreground/80">
              Halaman ini sedang dalam pengembangan.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
