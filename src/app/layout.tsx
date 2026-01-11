import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/ui/layouts/header";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth/auth";
import AppLoader from "@/hoc/app-loader";
import Title from "@/components/ui/layouts/title";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mainHeight = `calc(100vh - ${layoutConfig.headerHeight} - ${layoutConfig.footerHeight})`;
  const session = await auth();

  return (
    <html lang="en">
      <body className={`antialiased `}>
        <Providers>
          <SessionProvider session={session}>
            <AppLoader>
              <Header />
              <Title />
              <main
                className="flex flex-col items-center justify-center w-full"
                style={{ height: `${mainHeight}` }}
              >
                {children}
              </main>
              <footer
                className="flex flex-col w-full justify-center items-center"
                style={{ height: `${layoutConfig.footerHeight}` }}
              >
                <p className="text-sm text-gray-500 mb-4">
                  {siteConfig.description}
                </p>
                <p className="text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} {siteConfig.title}. All
                  rights reserved.
                </p>
              </footer>
            </AppLoader>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
