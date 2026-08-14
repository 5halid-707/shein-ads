import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "كوبونات شي إن SHEIN 2026 | 17+ كوبون وخصم حصري — خصومات تصل إلى 90%",
  description: "كوبونات شي إن SHEIN 2026! أكبر صفحة أكواد خصم شي إن — خصومات تصل إلى 90% على الأطفال والرجال والنساء والتجميل والمجوهرات والأحذية. كوبونات شي ين، عروض شي إن، خصومات SHEIN. انسخ الكود ووفّر آلاف الريالات!",
  keywords: [
    "كوبونات شي إن", "كوبون شي إن", "كود خصم شي إن", "أكواد شي إن", "عروض شي إن",
    "خصومات شي إن", "SHEIN coupons", "SHEIN promo code", "كوبون SHEIN",
    "خصم شي إن للأطفال", "خصم شي إن للرجال", "خصم شي إن للنساء", "خصم شي إن للتجميل",
    "كوبون شي إن 2026", "أكواد خصم SHEIN", "تخفيضات شي إن", "عروض SHEIN",
    "كوبون شي إن مجاني", "كود شي إن", "شي إن كوبون", "SHEIN discount code",
    "53PP8N5", "2PE6FY4", "K2S4T26", "KU2E656", "799632W", "832GD55",
    "CD3X24F", "H433454", "UZ5E5U8", "V37EZHZ", "WBEU339", "XVHPP34",
    "5P4UNYM", "832J633", "42646ZP", "726473D",
  ],
  authors: [{ name: "SHEIN Coupons" }],
  creator: "SHEIN Coupons",
  publisher: "SHEIN Coupons",
  alternates: { canonical: "/" },
  openGraph: {
    title: "كوبونات شي إن SHEIN 2026 | 17+ كوبون وخصم حصري",
    description: "أكبر صفحة أكواد خصم شي إن — خصومات تصل إلى 90%! كوبونات للأطفال، الرجال، النساء، التجميل، المجوهرات والمزيد.",
    siteName: "كوبونات SHEIN",
    type: "website",
    locale: "ar_SA",
    images: ["/coupons/baby.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "كوبونات شي إن SHEIN 2026 | خصومات تصل إلى 90%",
    description: "17+ كوبون وخصم حصري على شي إن — انسخ الكود ووفّر آلاف الريالات!",
    images: ["/coupons/baby.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "كوبونات شي إن SHEIN 2026",
    description: "أكبر صفحة أكواد خصم شي إن SHEIN — 17+ كوبون وخصم حصري، خصومات تصل إلى 90%",
    url: "https://shein-couponse.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://shein-couponse.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLd2 = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "كوبونات وخصومات SHEIN شي إن 2026",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "كوبون شي إن للأطفال 50%", url: "https://onelink.shein.com/47/5ytahxdk60ir" },
      { "@type": "ListItem", position: 2, name: "كوبون شي إن للرجال 80%", url: "https://onelink.shein.com/47/5ytabog1dv7c" },
      { "@type": "ListItem", position: 3, name: "كوبون شي إن للنساء 80%", url: "https://onelink.shein.com/47/5yt8c7jqgwte" },
      { "@type": "ListItem", position: 4, name: "كوبون شي إن للتجميل 90%", url: "https://onelink.shein.com/47/5yt9dv1yulxc" },
      { "@type": "ListItem", position: 5, name: "كوبون شي إن للمجوهرات 90%", url: "https://onelink.shein.com/47/5yt8ph17phkc" },
    ],
  };

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }} />
        <meta name="google-site-verification" content="shein-coupons-khalid" />
      </head>
      <body>{children}</body>
    </html>
  );
}
