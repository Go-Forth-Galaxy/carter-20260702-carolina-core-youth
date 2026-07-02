import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carolina Core FC Youth | Kernersville, NC",
  description:
    "Carolina Core FC Youth — youth soccer in Kernersville, NC. Recreational, Academy, and competitive programs building the player pathway from first touch to the pros.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
