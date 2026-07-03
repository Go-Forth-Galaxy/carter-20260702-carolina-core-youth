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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
