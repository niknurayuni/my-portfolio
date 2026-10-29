import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayuni | My Portfolio - Software Engineering Student",
  description:
    "Personal portfolio of Ayuni, Software Engineering student at Universiti Tenaga Nasional (UNITEN). Explore projects, technical skills, and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white text-[#363C47] selection:bg-[#FCE7F3] selection:text-[#9D174D] min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

