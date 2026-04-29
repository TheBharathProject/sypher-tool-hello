import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "hello · sypher",
  description:
    "Demo tool that proves the subdirectory rewrite. Served from sypher-tool-hello, mounted at sypher.in/hello.",
  robots: { index: false }, // demo tool — keep it out of Google
};

export default function HelloLanding() {
  return (
    <main className="min-h-screen bg-[#0c0a09] text-[#f5f0e6] flex flex-col">
      <header className="border-b border-[rgba(245,240,230,0.1)] px-6 py-4 md:px-10">
        <div className="mx-auto flex max-w-[900px] items-center justify-between">
          <Link href="/hello" className="font-mono text-sm">
            <span className="inline-block size-2 rounded-full bg-[#ffe600] mr-2 align-middle" />
            sypher<span className="text-[#8a847b]">/hello</span>
          </Link>
          <nav className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a847b]">
            <Link href="/" className="hover:text-[#f5f0e6] transition-colors">
              ← back to sypher.in
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex-1 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a847b]">
            // demo tool · 00 / hello
          </p>

          <h1
            className="mt-8 text-[clamp(40px,7vw,72px)] leading-[0.95] font-serif"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Hello, world.
            <br />
            <span style={{ fontStyle: "italic", color: "#e85d04" }}>
              Routed via rewrite.
            </span>
          </h1>

          <p className="mt-8 max-w-xl font-mono text-[14px] leading-relaxed text-[#8a847b]">
            This page lives in a totally separate GitHub repo
            (<code className="text-[#f5f0e6]">sypher-tool-hello</code>) and a
            separate Vercel deployment
            (<code className="text-[#f5f0e6]">sypher-tool-hello.vercel.app</code>).
            But you&rsquo;re seeing it at <code className="text-[#ffe600]">sypher.in/hello</code> &mdash;
            because the shell repo&rsquo;s
            <code className="text-[#f5f0e6]"> next.config.ts</code>
            rewrites <code className="text-[#f5f0e6]">/hello/*</code> to this
            deployment server-side.
          </p>

          <p className="mt-4 max-w-xl font-mono text-[14px] leading-relaxed text-[#8a847b]">
            The browser never sees the underlying <code>vercel.app</code>{" "}
            domain. Cookies set on <code>.sypher.in</code> work everywhere.
            SEO authority compounds on the apex.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
            <Card
              label="proof of routing"
              title="check the deeper path"
              href="/hello/info"
              cta="open /hello/info →"
            />
            <Card
              label="back to factory"
              title="see other tools"
              href="/"
              cta="sypher.in/ ↗"
            />
          </div>

          <pre className="mt-12 overflow-x-auto rounded border border-[rgba(245,240,230,0.1)] bg-[#070605] p-5 font-mono text-[12px] leading-relaxed text-[#8a847b]">
{`# in sypher-shell/next.config.ts
{
  source: '/hello/:path*',
  destination: 'https://sypher-tool-hello.vercel.app/hello/:path*',
}

# served at:
https://sypher.in/hello       ← marketing / demo
https://sypher.in/hello/info  ← deeper path, same rewrite
`}
          </pre>
        </div>
      </section>

      <footer className="border-t border-[rgba(245,240,230,0.1)] px-6 py-6 md:px-10">
        <div className="mx-auto max-w-[900px] font-mono text-[10px] uppercase tracking-[0.18em] text-[#4a4641]">
          sypher-tool-hello · demo tool · v0.0.1
        </div>
      </footer>
    </main>
  );
}

function Card({
  label,
  title,
  href,
  cta,
}: {
  label: string;
  title: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded border border-[rgba(245,240,230,0.1)] bg-[#070605] p-5 transition-colors hover:border-[#f5f0e6]"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#ffe600]">
        {label}
      </p>
      <h3
        className="mt-3 text-[22px] leading-[1.1]"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {title}
      </h3>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#8a847b]">
        {cta}
      </p>
    </Link>
  );
}
