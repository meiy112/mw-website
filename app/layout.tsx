import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mweng.dev",
  description: "Personal website - Maggie Weng",
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
