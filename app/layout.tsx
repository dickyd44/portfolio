import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/src/layouts";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dicky Darmawan",
  description: "Portfolio using Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        <div className="flex">
          <AppSidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
