import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { navigationLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="pb-12 pt-20">
      <div className="mx-auto max-w-5xl px-6">
        <Separator className="mb-12"/>

        {/* Info */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="font-mono text-sm font-medium text-foreground"
            >
              fitzsystems
            </Link>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Software Engineering
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          {"2026 fitzsystems. All rights reserved."}
        </p>

      </div>
    </footer>
  );
}
