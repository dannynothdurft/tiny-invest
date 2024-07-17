import type { Metadata } from "next";
import "@/styles/globals.scss";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Tiny Invest",
  description: "Werde mit Tiny Invest zum Meister deiner Finanzen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
