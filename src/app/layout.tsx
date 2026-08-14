import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "خصم 50% على SHEIN | كوبون 53PP8N5 — الأطفال والرضع",
  description: "لا تفوّت العروض الرائعة على شي إن! خصم يصل إلى 50% على الأطفال والرضع. ابحث عن 53PP8N5 في تطبيق SHEIN أو اضغط على الرابط للبدء!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ar" dir="rtl" suppressHydrationWarning><body>{children}</body></html>;
}
