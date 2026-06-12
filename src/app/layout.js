import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Samantha Chavez Portfolio",
  description: "Professional portfolio for Samantha Chavez",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen bg-[linear-gradient(90deg,#A6A6A6_0%,#EAEAEA_35%,#FFFFFF_50%,#FFFFFF_100%)]">{children}</body>
    </html>
  );
}
