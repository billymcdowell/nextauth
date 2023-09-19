import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/client"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Client
      </Link>
      <Link
        href="/server"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Server
      </Link>
      <Link
        href="/admin-only"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Admin only
      </Link>
    </nav>
  );
}
