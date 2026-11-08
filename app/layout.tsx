import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Next Move | Clarity. Direction. Action.",
  description: "A guided coaching programme for professionals who know there is more in them but need clarity on what to do next.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}