import "@pulzeup/ui/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "./components/header";
import Footer from "./components/footer";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata: Metadata = {
  title: "PulzeUp",
  description: "Generated by create turbo",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
