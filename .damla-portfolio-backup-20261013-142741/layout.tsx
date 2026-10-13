import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Damla Aydın | Veri Analizi & İş Zekâsı",
  description: "Damla Aydın'ın veri analizi, iş zekâsı, Power BI ve veri odaklı karar süreçlerine odaklanan kişisel portfolyosu.",
  applicationName: "Damla Aydın Portfolio",
  keywords: ["Damla Aydın", "Büyük Veri Analistliği", "Veri Analizi", "Power BI", "İş Zekâsı", "Python", "K-Means", "Dashboard"],
  authors: [{ name: "Damla Aydın" }],
  openGraph: {
    title: "Damla Aydın | Veri Analizi & İş Zekâsı",
    description: "Veriyi keşfediyor, anlamlı içgörülere dönüştürüyorum.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}