"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Baby, Sparkles, Tag, ShoppingBag, ExternalLink, Star, Clock, Gift, Heart, Zap, Shirt } from "lucide-react";

const COUPONS = [
  {
    id: "baby",
    code: "53PP8N5",
    title: "الأطفال والرضع",
    subtitle: "خصم يصل إلى 50%",
    desc: "تخفيضات رائعة على كل منتجات الأطفال والرضع",
    url: "https://onelink.shein.com/47/5ytahxdk60ir",
    image: "/coupon-baby.jpg",
    icon: Baby,
    color: "from-pink-500 to-orange-400",
    bgGradient: "from-pink-400/20 to-orange-300/10",
  },
  {
    id: "men",
    code: "2PE6FY4",
    title: "أفضل اختيارات الرجال",
    subtitle: "خصم يصل إلى 80%",
    desc: "تخفيضات ضخمة على أزياء ومستلزمات الرجال",
    url: "https://onelink.shein.com/47/5ytabog1dv7c",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&q=80&auto=format&fit=crop",
    icon: Shirt,
    color: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-400/20 to-cyan-300/10",
  },
];

export default function Home() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

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
        💸 لا تفوّت هذه العروض الرائعة على شي إن! 💸
      </motion.div>

      {/* Hero */}
      <section className="relative pt-12 pb-8 px-4 z-10 text-center">
        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", duration: 1 }} className="mb-6">
          <div className="inline-block bg-white/30 backdrop-blur-xl rounded-3xl px-8 py-4 shadow-2xl border-2 border-white/40" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
            <span className="text-4xl sm:text-6xl font-extrabold text-white" style={{ textShadow: "2px 2px 0 #00000020" }}>SHEIN</span>
          </div>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl sm:text-6xl font-extrabold text-white mb-4" style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.1)" }}>
          كوبونات وخصومات حصرية
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center justify-center gap-3 mb-2">
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
      </section>

      {/* Coupons */}
      <section className="relative px-4 pb-16 z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {COUPONS.map((coupon, idx) => (
            <motion.div key={coupon.id} initial={{ opacity: 0, y: 50, rotateX: -15 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2, type: "spring" }} className={`relative bg-gradient-to-br ${coupon.bgGradient} backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-white/40`} style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={coupon.image} alt={coupon.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Discount badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${coupon.color} text-white font-extrabold px-4 py-2 rounded-full text-sm shadow-lg`}>
                  {coupon.subtitle}
                </div>
                {/* Title overlay */}
                <div className="absolute bottom-3 right-4 flex items-center gap-2">
                  <coupon.icon size={20} className="text-white" />
                  <span className="text-white font-bold text-lg" style={{ textShadow: "1px 1px 0 rgba(0,0,0,0.3)" }}>{coupon.title}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <p className="text-white/70 text-sm mb-3">{coupon.desc}</p>

                {/* Coupon code */}
                <div className="bg-white rounded-2xl py-3 px-4 mb-4 border-2 border-dashed border-pink-300">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">كود الخصم</p>
                  <p className="text-2xl font-extrabold text-gray-800 tracking-wider">{coupon.code}</p>
                </div>

                {/* Copy + CTA */}
                <div className="flex gap-2">
                  <button onClick={() => copyCode(coupon.code)} className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${coupon.color} text-white font-bold py-2.5 rounded-xl hover:scale-[1.02] transition-transform shadow-lg text-sm`}>
                    {copiedCode === coupon.code ? <><Check size={16} /> تم النسخ!</> : <><Copy size={16} /> نسخ</>}
                  </button>
                  <a href={coupon.url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-800 font-bold py-2.5 rounded-xl hover:scale-[1.02] transition-transform shadow-lg text-sm">
                    <ShoppingBag size={16} /> تسوّق الآن
                  </a>
                </div>

                <p className="text-white/50 text-xs mt-3">🌟 ابحث عن {coupon.code} في تطبيق شي إن 🌟</p>
              </div>

              {/* Floating sparkles */}
              <motion.div animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }} className="absolute -top-3 -right-3">
                <Sparkles size={24} className="text-yellow-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative py-12 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-extrabold text-center text-white mb-8" style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}>لماذا تستخدم أكوادنا؟</motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: Zap, title: "خصم حتى 80%", desc: "أعلى خصومات", color: "from-pink-500 to-red-400" },
              { icon: Star, title: "موثّق 100%", desc: "أكواد رسمية", color: "from-yellow-400 to-orange-400" },
              { icon: Gift, title: "شحن مجاني", desc: "على الطلبات", color: "from-green-400 to-emerald-400" },
              { icon: Clock, title: "سريع وسهل", desc: "انسخ واستخدم", color: "from-blue-400 to-cyan-300" },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} className="bg-white/30 backdrop-blur-xl rounded-2xl p-4 text-center border-2 border-white/40">
                <div className={`w-10 h-10 mx-auto rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-2 shadow-lg`}>
                  <f.icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-white text-sm">{f.title}</h3>
                <p className="text-white/60 text-xs">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="relative py-12 px-4 z-10">
        <div className="max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-extrabold text-center text-white mb-8" style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}>كيف تستخدم الكوبون؟</motion.h2>
          <div className="space-y-3">
            {[
              { num: "1", title: "انسخ الكود", desc: "اضغط على زر «نسخ» بجانب الكوبون" },
              { num: "2", title: "اضغط على الرابط", desc: "اضغط «تسوّق الآن» لفتح تطبيق شي إن" },
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

      {/* Final CTA */}
      <section className="relative py-16 px-4 z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-lg mx-auto text-center bg-white/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/50" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="inline-block mb-4">
            <Heart size={40} className="text-pink-500 fill-current" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3" style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}>جاهز للتسوّق؟</h2>
          <p className="text-white/70 text-base mb-6">اختر الكوبون المناسب وابدأ التسوّق بخصم يصل إلى 80%</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={COUPONS[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-extrabold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg text-sm">
              <Baby size={18} /> كوبون الأطفال 50%
            </a>
            <a href={COUPONS[1].url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-extrabold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg text-sm">
              <Shirt size={18} /> كوبون الرجال 80%
            </a>
          </div>
          <p className="text-white/50 text-xs mt-4">💰 لا تفوّت العروض الرائعة على شي إن 💰</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-6 px-4 text-center z-10">
        <p className="text-white/40 text-xs">© 2026 صفحة كوبونات SHEIN • العروض محدودة</p>
      </footer>
    </main>
  );
}
