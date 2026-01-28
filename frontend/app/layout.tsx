import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | AI-powered career readiness`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Knowly is an AI-powered education platform helping students explore careers and gain practical, job-ready skills.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
