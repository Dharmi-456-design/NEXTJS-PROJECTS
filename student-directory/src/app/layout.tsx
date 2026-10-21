import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Directory",
  description: "Next.js App Router Student Directory Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
