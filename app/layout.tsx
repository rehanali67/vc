import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRISM 2026 — The Future of Technology",
  description: "The Future of Technology · Decoded. Sept 15–17, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
