import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { PreEntryModal } from "@/components/PreEntryModal";

export const metadata: Metadata = {
  title: "BrainVers — Build. Test. Learn. Repeat.",
  description: "BrainVers is building a student-centered learning and testing ecosystem connecting learning, practice, assessment and continuous improvement.",
  openGraph: {
    title: "BrainVers — Build. Test. Learn. Repeat.",
    description: "BrainVers is building a student-centered learning and testing ecosystem connecting learning, practice, assessment and continuous improvement.",
    type: "website",
    images: ["/og-image-placeholder.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text" suppressHydrationWarning>
        <PreEntryModal />
        {children}
      </body>
    </html>
  );
}
