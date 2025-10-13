import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uzi's Favorite Sport Teams | Soccer, Football & Basketball",
  description:
    "Explore favorite sports teams including F.C. Maccabi Tel Aviv, FC Barcelona, Dallas Cowboys, Portland Trail Blazers, and more. View schedules and highlights.",
  keywords: [
    "sports teams",
    "soccer",
    "football",
    "basketball",
    "F.C. Maccabi Tel Aviv",
    "FC Barcelona",
    "Dallas Cowboys",
    "schedules",
    "highlights",
  ],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Uzi's Favorite Sport Teams",
    description:
      "Your hub for favorite sports teams with schedules and highlights",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 512,
        height: 512,
        alt: "Uzi's Favorite Sport Teams Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

