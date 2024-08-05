import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
const dmSans = DM_Sans({ subsets: ["latin"] });

import opengraphimage from "../../opengraph-image.png";

export const metadata: Metadata = {
  title: "Light Saas Landing Page Built With NextJS",
  description:
    "Sample landing page for a SAAS with beautiful gradients and animations to hold user's attention.",
  openGraph: {
    title: "Light Saas Landing Page Built With NextJS",
    description:
      "Sample landing page for a SAAS with beautiful gradients and animations to hold user's attention.",
    url: "https://model-saas-landing-page.vercel.app/",
    images: [
      //   {
      //     url: "../../opengraph-image.png", // Must be an absolute URL
      //     width: 800,
      //     height: 600,
      //   },
      {
        url: "../../opengraph-image.png", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "bg-[#EAEEFE] antialiased")}>
        {children}
      </body>
    </html>
  );
}
