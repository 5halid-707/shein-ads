import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shein-couponse.vercel.app"),
  title: "كوبونات SHEIN 2026 | خصم 90% — 17+ كوبون نشط (أكواد محدّثة)",
  description: "أحدث كوبونات شي إن SHEIN 2026! خصم يصل إلى 90% على الأطفال والرجال والنساء والتجميل والمجوهرات والأحذية والدنيم. 17+ كوبون نشط — انسخ الكود ووفّر آلاف الريالات اليوم!",
  keywords: [
    "كوبونات SHEIN", "كود خصم شي إن", "SHEIN coupon", "SHEIN promo code",
    "خصم شي إن", "كوبون SHEIN 2026", "SHEIN discount", "شي إن كوبون",
    "كود خصم SHEIN", "SHEIN كوبونات", "خصومات شي إن", "SHEIN deals",
    "كوبون شي إن الأطفال", "كوبون شي إن الرجال", "كوبون شي إن النساء",
    "SHEIN coupon code 2026", "شي إن تخفيضات", "SHEIN sale",
    "كوبون SHEIN مجوهرات", "كوبون SHEIN تجميل", "SHEIN beauty coupon",
    "SHEIN men coupon", "SHEIN women coupon", "SHEIN kids coupon",
    "تخفيضات SHEIN", "SHEIN promotions", "عروض شي إن",
    "كوبون SHEIN مجاني", "free SHEIN coupon", "SHEIN voucher",
    "53PP8N5", "2PE6FY4", "K2S4T26", "KU2E656", "799632W",
    "832GD55", "CD3X24F", "H433454", "UZ5E5U8", "HTQZD9V",
    "V37EZHZ", "WBEU339", "XVHPP34", "5P4UNYM", "832J633",
    "42646ZP", "726473D",
  ],
  authors: [{ name: "SHEIN Coupons" }],
  creator: "SHEIN Coupons",
  publisher: "SHEIN Coupons",
  alternates: {
    canonical: "/",
    languages: { "ar-SA": "/", "en-US": "/" },
  },
  openGraph: {
    title: "كوبونات SHEIN 2026 | خصم 90% — 17+ كوبون نشط",
    description: "أحدث كوبونات شي إن! خصم يصل إلى 90% على الأطفال والرجال والنساء والتجميل والمجوهرات. انسخ الكود الآن!",
    url: "https://shein-couponse.vercel.app",
    siteName: "كوبونات SHEIN",
    images: [{ url: "/coupons/baby.jpg", width: 1024, height: 1024, alt: "كوبونات SHEIN" }],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "كوبونات SHEIN 2026 | خصم 90%",
    description: "17+ كوبون نشط — انسخ الكود ووفّر آلاف الريالات!",
    images: ["/coupons/baby.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ar" dir="rtl" suppressHydrationWarning><body>{children}</body></html>;
}
