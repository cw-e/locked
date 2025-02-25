import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "locked",
  description: "A secure chat platform.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased tracking-tight`}
      >
        {children}
      </body>
    </html>
  );
}
