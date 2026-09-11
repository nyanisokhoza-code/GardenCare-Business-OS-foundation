import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GardenCare Business OS",
  description: "GardenCare operations, pricing, recruitment, training, jobs and AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
