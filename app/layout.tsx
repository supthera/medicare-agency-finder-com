import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medicare Agency Finder",
  description: "Find Medicare-enrolled Home Health Care Agencies across the United States. Data sourced from CMS.gov.",
  keywords: "Medicare, Home Health Care, Agencies, CMS, Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
