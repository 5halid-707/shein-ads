"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ShoppingBag, Clock, Sparkles, Search } from "lucide-react";

const COUPONS = [
  { code: "53PP8N5", title: "الأطفال والرضع", subtitle: "خصم يصل إلى 50%", desc: "تخفيضات رائعة على كل منتجات الأطفال والرضع", url: "https://onelink.shein.com/47/5ytahxdk60ir", emoji: "👶", color: "from-pink-500 to-orange-400" },
  { code: "2PE6FY4", title: "أفضل اختيارات الرجال", subtitle: "خصم يصل إلى 80%", desc: "تخفيضات ضخمة على أزياء ومستلزمات الرجال", url: "https://onelink.shein.com/47/5ytabog1dv7c", emoji: "👔", color: "from-blue-500 to-cyan-400" },
  { code: "K2S4T26", title: "أنماط Curve", subtitle: "تخفيضات الصيف حتى 50%", desc: "تخفيضات الصيف على أنماط Curve", url: "https://onelink.shein.com/47/5yta2ixvkpav", emoji: "👗", color: "from-purple-500 to-pink-400" },
  { code: "KU2E656", title: "SHEIN Lifestyle", subtitle: "نسّق مساحتك", desc: "زيّن مساحتك واجعل كل مساحة تبدو أنيقة بلا مجهود!", url: "https://onelink.shein.com/47/5yt9y72foda1", emoji: "🏠", color: "from-green-500 to-emerald-400" },
  { code: "799632W", title: "الحقائب والأحذية", subtitle: "خصم يصل إلى 90%", desc: "كوبون خصم 60% لكل مستخدم جديد على الحقائب والأحذية!", url: "https://onelink.shein.com/47/5yt9tfeqthkz", emoji: "👠", color: "from-red-500 to-rose-400" },
  { code: "832GD55", title: "أيام الدنيم", subtitle: "خصم حتى 80%", desc: "أيام الدنيم — تسوّق الآن!", url: "https://onelink.shein.com/47/5yt9quoal0jq", emoji: "👖", color: "from-indigo-500 to-blue-400" },
  { code: "CD3X24F", title: "موسم جديد، حركات جديدة", subtitle: "خصم حتى 90%", desc: "موسم جديد بخصومات تصل إلى 90%", url: "https://onelink.shein.com/47/5yt9no8i1u13", emoji: "🆕", color: "from-orange-500 to-amber-400" },
  { code: "H433454", title: "أشهر 500 اختيار من SHEIN", subtitle: "خصم إضافي 50%", desc: "95% تقييمات 5 نجوم! كوبون خصم إضافي 50% للمستخدمين الجدد!", url: "https://onelink.shein.com/47/5yt9kjrqklml", emoji: "🏆", color: "from-yellow-500 to-orange-400" },
  { code: "UZ5E5U8", title: "اكتشافات جمال متألقة", subtitle: "خصم حتى 90%", desc: "تخفيضات ضخمة على منتجات التجميل", url: "https://onelink.shein.com/47/5yt9dv1yulxc", emoji: "💄", color: "from-pink-500 to-rose-400" },
  { code: "HTQZD9V", title: "الأكثر مبيعاً من Anewsta", subtitle: "خصم يصل إلى 50%", desc: "تصاميم راقية وتفاصيل فاخرة وحرفية خالدة", url: "https://onelink.shein.com/47/5yt91d6x6sul", emoji: "✨", color: "from-amber-500 to-yellow-400" },
  { code: "V37EZHZ", title: "SHEGLAM | تخفيضات سوبر", subtitle: "خصم حتى 70%", desc: "تخفيضات سوبر على منتجات SHEGLAM", url: "https://onelink.shein.com/47/5yt8w9p1qebw", emoji: "💎", color: "from-violet-500 to-purple-400" },
  { code: "WBEU339", title: "MOTF — أفضل الاختيارات", subtitle: "خصم حتى 60%", desc: "أناقتك تبدأ هنا — خصم حتى 60% على أفضل الاختيارات", url: "https://onelink.shein.com/47/5yt8tf3fvjnq", emoji: "👗", color: "from-teal-500 to-cyan-400" },
  { code: "XVHPP34", title: "المجوهرات والإكسسوارات", subtitle: "خصم يصل إلى 90%", desc: "خصم إضافي 50% للمستخدمين الجدد على المجوهرات والإكسسوارات", url: "https://onelink.shein.com/47/5yt8ph17phkc", emoji: "💍", color: "from-fuchsia-500 to-pink-400" },
  { code: "5P4UNYM", title: "أفضل الماركات", subtitle: "خصم حتى 60%", desc: "خصم حتى 60% على أفضل الماركات + كوبون 50% للمستخدمين الجدد", url: "https://onelink.shein.com/47/5yt8kvam8vne", emoji: "🏷️", color: "from-cyan-500 to-blue-400" },
  { code: "832J633", title: "ملابس النساء", subtitle: "تخفيضات تصل إلى 80%", desc: "تخفيضات كبيرة على ملابس النساء", url: "https://onelink.shein.com/47/5yt8c7jqgwte", emoji: "👚", color: "from-rose-500 to-red-400" },
  { code: "42646ZP", title: "مختارات الجمال", subtitle: "خصم حتى 80%", desc: "خصم يصل حتى 80% على أفضل ماركات التجميل + كوبون 50% للمستخدم الجديد", url: "https://onelink.shein.com/47/5yt88r8scr39", emoji: "🧴", color: "from-lime-500 to-green-400" },
  { code: "726473D", title: "أفضل المنتجات المختارة", subtitle: "خصومات لفترة محدودة", desc: "منتجات مختارة، لا تفوت الخصومات لفترة محدودة!", url: "https://onelink.shein.com/47/5yt85or23sb0", emoji: "🎁", color: "from-sky-500 to-indigo-400" },
];

export default function Home() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else { seconds = 59; if (minutes > 0) minutes--; else { minutes = 59; if (hours > 0) hours--; } }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredCoupons = search
    ? COUPONS.filter(c => c.title.includes(search) || c.code.includes(search) || c.subtitle.includes(search))
    : COUPONS;

  return (
    <main className="min-h-screen relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FF6B9D 0%, #FFC75F 25%, #6BBEFF 50%, #ABE9FF 75%, #FF9A8B 100%)" }}>
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full" style={{ width: `${20 + Math.random() * 80}px`, height: `${20 + Math.random() * 80}px`, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, background: `rgba(255,255,255,${0.1 + Math.random() * 0.2})`, backdropFilter: "blur(10px)" }} animate={{ y: [0, -30, 0], x: [0, Math.random() * 20 - 10, 0], rotate: [0, 360] }} transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 3 }} />
        ))}
      </div>

      {/* Top bar */}
      <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className="relative bg-black/20 backdrop-blur-md text-white text-center py-3 text-sm sm:text-base font-bold z-10">
        💸 لا تفوّت هذه العروض الرائعة على شي إن! خصومات تصل إلى 90%! 💸
      </motion.div>

      {/* Hero */}
      <section className="relative pt-12 pb-8 px-4 z-10 text-center">
        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", duration: 1 }} className="mb-6">
          <div className="inline-block bg-white/30 backdrop-blur-xl rounded-3xl px-8 py-4 shadow-2xl border-2 border-white/40" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
            <span className="text-4xl sm:text-6xl font-extrabold text-white" style={{ textShadow: "2px 2px 0 #00000020" }}>SHEIN</span>
          </div>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl sm:text-6xl font-extrabold text-white mb-4" style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.1)" }}>
          {COUPONS.length}+ كوبون وخصم حصري
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-white/80 text-lg mb-6">انسخ الكود واضغط على الرابط للبدء!</motion.p>

        {/* Countdown */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center justify-center gap-3 mb-6">
          <Clock size={18} className="text-white" />
          <span className="text-white font-bold text-sm">ينتهي خلال:</span>
          <div className="flex gap-2">
            {[{v:timeLeft.hours,l:"س"},{v:timeLeft.minutes,l:"د"},{v:timeLeft.seconds,l:"ث"}].map((t,i) => (
              <div key={i} className="bg-white/40 backdrop-blur-md rounded-xl px-3 py-1 min-w-[45px] border border-white/30 text-center">
                <span className="text-lg font-extrabold text-white block">{String(t.v).padStart(2,'0')}</span>
                <span className="text-[9px] text-white/70">{t.l}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Search */}
        <div className="max-w-md mx-auto relative mb-4">
          <Search size={18} className="absolute top-1/2 -translate-y-1/2 right-4 text-white/50" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="ابحث عن كوبون..." className="w-full bg-white/30 backdrop-blur-md border-2 border-white/40 rounded-full px-12 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/60" />
        </div>
      </section>

      {/* Coupons grid */}
      <section className="relative px-4 pb-16 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCoupons.map((coupon, idx) => (
              <motion.div key={coupon.code} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(idx * 0.05, 0.5) }} whileHover={{ y: -5 }} className="relative bg-white/30 backdrop-blur-xl rounded-2xl p-5 border-2 border-white/40" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                {/* Emoji + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${coupon.color} flex items-center justify-center text-2xl shadow-lg shrink-0`}>{coupon.emoji}</div>
                  <div className="min-w-0">
                    <h3 className="font-extrabold text-white text-sm truncate" style={{ textShadow: "1px 1px 0 rgba(0,0,0,0.1)" }}>{coupon.title}</h3>
                    <p className={`text-xs font-bold bg-gradient-to-r ${coupon.color} bg-clip-text text-transparent`}>{coupon.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 text-xs mb-3 line-clamp-2 leading-relaxed">{coupon.desc}</p>

                {/* Code */}
                <div className="bg-white rounded-xl py-2.5 px-4 mb-3 border-2 border-dashed border-pink-300 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-gray-800 tracking-wider">{coupon.code}</span>
                  <button onClick={() => copyCode(coupon.code)} className={`flex items-center gap-1 bg-gradient-to-r ${coupon.color} text-white font-bold px-3 py-1.5 rounded-lg hover:scale-105 transition-transform text-xs`}>
                    {copiedCode === coupon.code ? <><Check size={12} /> تم</> : <><Copy size={12} /> نسخ</>}
                  </button>
                </div>

                {/* CTA */}
                <a href={coupon.url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 w-full bg-gradient-to-r ${coupon.color} text-white font-bold py-2.5 rounded-xl hover:scale-[1.02] transition-transform shadow-lg text-sm`}>
                  <ShoppingBag size={16} /> تسوّق الآن
                </a>
              </motion.div>
            ))}
          </div>

          {filteredCoupons.length === 0 && (
            <div className="text-center py-20"><p className="text-white/60 text-lg">لا توجد كوبونات مطابقة</p></div>
          )}
        </div>
      </section>

      {/* How to use */}
      <section className="relative py-12 px-4 z-10">
        <div className="max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-extrabold text-center text-white mb-8" style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}>كيف تستخدم الكوبون؟</motion.h2>
          <div className="space-y-3">
            {[
              { num: "1", title: "انسخ الكود", desc: "اضغط على زر «نسخ» بجانب أي كوبون" },
              { num: "2", title: "اضغط على «تسوّق الآن»", desc: "سيفتح تطبيق شي إن مباشرة" },
              { num: "3", title: "ابحث عن الكود", desc: "ابحث عن الكود في تطبيق شي إن" },
              { num: "4", title: "استمتع بالخصم!", desc: "أضف منتجاتك واستمتع بالخصم" },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 bg-white/30 backdrop-blur-xl rounded-2xl p-4 border-2 border-white/40">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-extrabold shrink-0 shadow-lg">{step.num}</div>
                <div><h3 className="font-bold text-white text-sm">{step.title}</h3><p className="text-white/60 text-xs">{step.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-6 px-4 text-center z-10">
        <p className="text-white/40 text-xs">© 2026 صفحة كوبونات SHEIN • {COUPONS.length} كوبون نشط • العروض محدودة</p>
      </footer>
    </main>
  );
}
