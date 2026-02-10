import Link from "next/link";

import { email } from "@/lib/constants";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-2xl w-full px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">Coming Soon</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We&apos;re working on a lil something. The site will be back shortly — Check in again later.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href={`mailto:${email}`} className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
