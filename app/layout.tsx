import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manar Kabbara — Architecture & Graphic Design",
  description: "Portfolio of Manar Kabbara, architecture engineering student, AutoCAD drafter, and graphic designer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
