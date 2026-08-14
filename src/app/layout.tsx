import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "زيت الجسم السحري Besque | عرض خاص",
  description: "زيت الجسم السحري من Besque — مرطب طبيعي بزيوت نباتية لبشرة نضرة ومشدودة",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ar" dir="rtl" suppressHydrationWarning><body>{children}</body></html>;
}
