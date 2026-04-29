import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Red Ant Colony — Software Development & Digital Solutions" },
      { name: "description", content: "Red Ant Colony membangun solusi digital end-to-end: web, mobile, dan sistem enterprise." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-soft py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand">WELCOME TO THE COLONY</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-bold text-brand">
              Membangun Sistem Digital,<br />Memperkuat Bisnis Anda
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-foreground/80">
              Tim engineering Red Ant Colony siap membantu Anda merancang, membangun, dan menumbuhkan produk digital yang andal.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link
                to="/karir"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-medium text-brand-foreground hover:opacity-90"
              >
                Lihat Karir <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/kontak-kami"
                className="inline-flex items-center gap-2 rounded-md border-2 border-brand px-6 py-3 text-sm font-medium text-brand hover:bg-brand hover:text-brand-foreground transition-colors"
              >
                Kontak Kami
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
