import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "كوبونات SHEIN | خصم 50% للأطفال + 80% للرجال — أكواد حصرية",
  description: "لا تفوّت العروض الرائعة على شي إن! خصم 50% على الأطفال (53PP8N5) + خصم 80% على الرجال (2PE6FY4). ابحث عن الكود في تطبيق شي إن أو اضغط على الرابط!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ar" dir="rtl" suppressHydrationWarning><body>{children}</body></html>;
}
