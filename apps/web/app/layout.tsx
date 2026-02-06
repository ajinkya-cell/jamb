import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { galaxieCopernicus } from "./fonts";


export const metadata: Metadata = {
  title: "Jamb",
  description: "Luxury fireplaces, lighting & furniture",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${galaxieCopernicus.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
