import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "كوبونات SHEIN | 17+ كوبون وخصم حصري — خصومات تصل إلى 90%",
  description: "لا تفوّت العروض الرائعة على شي إن! 17+ كوبون وخصم حصري على الأطفال، الرجال، النساء، التجميل، المجوهرات، الأحذية، الدنيم والمزيد. خصومات تصل إلى 90%!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ar" dir="rtl" suppressHydrationWarning><body>{children}</body></html>;
}
