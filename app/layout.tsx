import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oliviashi.design"),
  title: "Olivia Shi — Designer",
  description: "Shanghai-based brand designer specializing in identity, packaging, and advertising.",
  openGraph: {
    title: "Olivia Shi — Designer",
    description: "Brand Identity · Packaging · Advertising",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Olivia Shi — Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivia Shi — Designer",
    description: "Brand Identity · Packaging · Advertising",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
