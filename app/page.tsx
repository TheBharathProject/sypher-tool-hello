import { redirect } from "next/navigation";

// Bare URL of the tool's Vercel deployment (sypher-tool-hello.vercel.app)
// is not the canonical surface — everything lives under /hello.
export default function RootRedirect() {
  redirect("/hello");
}
