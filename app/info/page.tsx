import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "info · hello · sypher",
  robots: { index: false },
};

// Renders at sypher.in/hello/info via the shell rewrite + basePath.
export default function HelloInfo() {
  const buildTime = new Date().toISOString();

  return (
    <main className="min-h-screen bg-[#0c0a09] text-[#f5f0e6] flex flex-col">
      <header className="border-b border-[rgba(245,240,230,0.1)] px-6 py-4 md:px-10">
        <div className="mx-auto flex max-w-[900px] items-center justify-between">
          <Link href="/" className="font-mono text-sm">
            <span className="inline-block size-2 rounded-full bg-[#ffe600] mr-2 align-middle" />
            sypher<span className="text-[#8a847b]">/hello</span>
          </Link>
          <nav className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a847b]">
            <Link href="/" className="hover:text-[#f5f0e6] transition-colors">
              ← /hello
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex-1 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a847b]">
            // demo tool · 00.01 / proof
          </p>

          <h1
            className="mt-8 text-[clamp(36px,6vw,60px)] leading-[0.95]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Routing{" "}
            <span style={{ fontStyle: "italic", color: "#e85d04" }}>
              works.
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-mono text-[14px] leading-relaxed text-[#8a847b]">
            You reached <code className="text-[#f5f0e6]">/hello/info</code>{" "}
            through the same shell rewrite. Deeper paths inside the tool repo
            are reachable, the URL bar still shows{" "}
            <code className="text-[#ffe600]">sypher.in</code>, and the page is
            server-rendered fresh on every request.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
            <Stat label="rendered at (server)" value={buildTime} />
            <Stat label="render mode" value="dynamic SSR" />
            <Stat label="served by" value="sypher-tool-hello.vercel.app" />
            <Stat label="seen by browser as" value="sypher.in/hello/info" />
          </dl>

          <div className="mt-12 flex gap-3">
            <Link
              href="/"
              className="rounded border border-[rgba(245,240,230,0.1)] px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#8a847b] transition-colors hover:border-[#f5f0e6] hover:text-[#f5f0e6]"
            >
              ← back
            </Link>
            <a
              href="/"
              className="rounded bg-[#f5f0e6] px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#0c0a09] transition-colors hover:bg-[#ffe600]"
            >
              sypher.in/ ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[rgba(245,240,230,0.1)] px-6 py-6 md:px-10">
        <div className="mx-auto max-w-[900px] font-mono text-[10px] uppercase tracking-[0.18em] text-[#4a4641]">
          sypher-tool-hello · demo tool · v0.0.2 · basePath edition
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-[rgba(245,240,230,0.1)] bg-[#070605] p-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8a847b]">
        {label}
      </dt>
      <dd className="mt-2 font-mono text-[13px] text-[#f5f0e6] break-all">
        {value}
      </dd>
    </div>
  );
}
