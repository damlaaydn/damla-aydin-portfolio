import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Damla Aydın | Big Data Analytics Student",
  description:
    "Damla Aydın'ın kişisel portfolyosu. Veri analizi, Business Intelligence, Power BI, Python, SQL ve makine öğrenmesi projeleri.",
  keywords: [
    "Damla Aydın",
    "Big Data Analytics",
    "Data Analytics",
    "Power BI",
    "Python",
    "SQL",
    "Business Intelligence",
    "Machine Learning",
  ],
  openGraph: {
    title: "Damla Aydın | Big Data Analytics Student",
    description:
      "Veri analizi, Business Intelligence, Power BI, Python, SQL ve makine öğrenmesi projeleri.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
