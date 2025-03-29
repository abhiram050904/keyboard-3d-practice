import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3d preview Next App",
  description: "3d preview Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-stone-950">
      <body>
        {children}
      </body>
    </html>
  );
}
