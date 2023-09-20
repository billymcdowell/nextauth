import "./globals.css";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/ui/main-nav";
import { UserNav } from "@/components/ui/user-nav";
import { Search } from "@/components/ui/search";
import AuthProvider from "./context/AuthProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/theme-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextAuth Template",
  description: "NextAuth, Shadcn/ui & useKeyboardShortcut Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <div className="border-b">
              <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                  <Search />
                  <UserNav />
                  <ModeToggle />
                </div>
              </div>
            </div>
            <main>{children}</main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
