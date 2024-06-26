import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dhsrlab.com",
  description: "Software engineer based in Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <script
          defer
          src="https://analytics.eu.umami.is/script.js"
          data-website-id="68f9a927-1842-401b-8947-816c6f8d4b91"
        ></script>
      </Head>

      <html lang="en">
        <body className={inter.className + " overflow-x-hidden"}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
