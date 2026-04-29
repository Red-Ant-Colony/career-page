import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/tentang-kami")({
  component: Page,
  head: () => ({ meta: [{ title: "Tentang Kami | Red Ant Colony" }] }),
});

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-soft py-20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand">ABOUT US</p>
            <h1 className="mt-3 text-5xl font-bold text-brand">Tentang Kami</h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-foreground/80">
              Red Ant Colony adalah rumah bagi para inovator dan kreator teknologi yang berdedikasi membangun solusi digital terbaik untuk bisnis Anda.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}