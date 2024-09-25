// RootLayout.tsx (Server Component)
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

// Server component that wraps the client layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Dicky Darmawan</title>
        <meta name="description" content="Portfolio using Next.JS" />
        <body className={rubik.className}>{children}</body>
      </head>
    </html>
  );
}
