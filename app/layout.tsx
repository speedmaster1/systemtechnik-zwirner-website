import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const title = "Systemtechnik Zwirner | Automation · Smart Home · Energie · IT";
const description = "Systemtechnik Zwirner entwickelt individuelle Lösungen für Automatisierung, Smart Home, Energieoptimierung und vernetzte technische Systeme.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.systemtechnik-zwirner.de"), title, description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "Systemtechnik Zwirner", locale: "de_DE", type: "website" },
  twitter: { card: "summary_large_image", title, description },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080a0c" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de" className={geist.variable}><body>{children}</body></html>;
}
