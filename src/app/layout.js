import { Inter, Jersey_10  } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Samantha Chavez Portfolio",
  description: "Professional portfolio for Samantha Chavez",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jersey.variable} h-full antialiased`}>
      <body className="min-h-screen bg-[linear-gradient(90deg,#A6A6A6_0%,#EAEAEA_35%,#FFFFFF_50%,#FFFFFF_100%)]">{children}</body>
    </html>
  );
}
