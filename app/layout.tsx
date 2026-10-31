import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "BAMDA | Architecture Studio",
  description:
    "BAMDA Architecture Studio — Contemporary Architecture, Interior Design and Competitions.",
  icons: {
    icon: "/logo/monogram.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-zinc-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}