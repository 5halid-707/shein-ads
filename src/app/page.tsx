"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Baby, Sparkles, Tag, ShoppingBag, ExternalLink, Star, Clock, Gift, Heart, Zap } from "lucide-react";

const SHEIN_URL = "https://onelink.shein.com/47/5ytahxdk60ir";
const COUPON_CODE = "53PP8N5";

export default function Home() {
  const [copied, setCopied] = useState(false);
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

  const copyCode = () => {
    navigator.clipboard.writeText(COUPON_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FF6B9D 0%, #FFC75F 25%, #6BBEFF 50%, #ABE9FF 75%, #FF9A8B 100%)" }}>
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${30 + Math.random() * 80}px`,
              height: `${30 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(255,255,255,${0.1 + Math.random() * 0.2})`,
              backdropFilter: "blur(10px)",
            }}
            animate={{ y: [0, -30, 0], x: [0, Math.random() * 20 - 10, 0], rotate: [0, 360] }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* Top bar */}
      <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className="relative bg-black/20 backdrop-blur-md text-white text-center py-3 text-sm sm:text-base font-bold z-10">
        🔥 عرض محدود — خصم يصل إلى 50% على الأطفال والرضع! 🔥
      </motion.div>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", duration: 1 }} className="mb-8">
            <div className="inline-block bg-white/30 backdrop-blur-xl rounded-3xl px-8 py-4 shadow-2xl border-2 border-white/40" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15), inset 0 2px 10px rgba(255,255,255,0.5)" }}>
              <span className="text-4xl sm:text-6xl font-extrabold text-white" style={{ textShadow: "2px 2px 0 #00000020, 4px 4px 0 #00000010" }}>SHEIN</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl sm:text-7xl font-extrabold mb-4 text-white" style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.1), 6px 6px 20px rgba(0,0,0,0.15)" }}>
            لا تفوّت هذه
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent" style={{ filter: "drop-shadow(2px 2px 0 #00000020)" }}>
              العروض الرائعة!
            </span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-6 py-3 mb-8 border-2 border-white/50">
            <Baby size={24} className="text-white" />
            <span className="text-lg sm:text-xl font-extrabold text-white">الأطفال والرضع | خصم يصل إلى 50%</span>
          </motion.div>

          {/* 3D Coupon card */}
          <motion.div initial={{ opacity: 0, y: 50, rotateX: -20 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.6, type: "spring" }} className="relative max-w-md mx-auto mb-8" style={{ perspective: "1000px" }}>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 border-dashed border-pink-400" style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.2), inset 0 -4px 20px rgba(0,0,0,0.05)" }}>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full" style={{ background: "linear-gradient(135deg, #FF6B9D, #FFC75F)" }} />
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full" style={{ background: "linear-gradient(135deg, #FF6B9D, #FFC75F)" }} />

              <div className="flex justify-center mb-4">
                <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center shadow-lg">
                  <Tag size={32} className="text-white" />
                </motion.div>
              </div>

              <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">كود الخصم</p>

              <div className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-2xl py-4 px-6 mb-4 border-2 border-pink-200">
                <p className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wider">{COUPON_CODE}</p>
              </div>

              <button onClick={copyCode} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 rounded-xl hover:scale-[1.02] transition-transform shadow-lg">
                {copied ? <><Check size={20} /> تم النسخ!</> : <><Copy size={20} /> نسخ الكود</>}
              </button>

              <p className="text-center text-xs text-gray-400 mt-3">ابحث عن الكود في تطبيق SHEIN</p>
            </div>

            <motion.div animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-6 -right-6">
              <Sparkles size={32} className="text-yellow-300" />
            </motion.div>
            <motion.div animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} className="absolute -bottom-4 -left-4">
              <Gift size={28} className="text-pink-400" />
            </motion.div>
          </motion.div>

          {/* Countdown */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex items-center justify-center gap-3 mb-8">
            <Clock size={20} className="text-white" />
            <span className="text-white font-bold text-sm">ينتهي خلال:</span>
            <div className="flex gap-2">
              {[{v:timeLeft.hours,l:"س"},{v:timeLeft.minutes,l:"د"},{v:timeLeft.seconds,l:"ث"}].map((t,i) => (
                <div key={i} className="bg-white/40 backdrop-blur-md rounded-xl px-3 py-1.5 min-w-[50px] border border-white/30">
                  <span className="text-xl font-extrabold text-white block">{String(t.v).padStart(2,'0')}</span>
                  <span className="text-[10px] text-white/70">{t.l}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA button */}
          <motion.a href={SHEIN_URL} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, type: "spring" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-white text-pink-600 font-extrabold px-10 py-5 rounded-full text-lg sm:text-xl shadow-2xl mb-4" style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.2)" }}>
            <ShoppingBag size={26} />
            اضغط للبدء!
            <ExternalLink size={20} />
          </motion.a>

          <p className="text-white/70 text-sm">🌟 اضغط على الرابط للبدء! 🌟</p>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-5xl font-extrabold text-center text-white mb-12" style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}>
            لماذا تستخدم الكود؟
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: "خصم 50%", desc: "أعلى خصم متاح", color: "from-pink-500 to-red-400" },
              { icon: Baby, title: "الأطفال والرضع", desc: "كل منتجات الأطفال", color: "from-blue-400 to-cyan-300" },
              { icon: Star, title: "تقييم 4.8", desc: "آلاف العملاء السعداء", color: "from-yellow-400 to-orange-400" },
              { icon: Gift, title: "شحن مجاني", desc: "على الطلبات المؤهلة", color: "from-green-400 to-emerald-400" },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8, scale: 1.05 }} className="bg-white/30 backdrop-blur-xl rounded-3xl p-6 text-center border-2 border-white/40" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-3 shadow-lg`}>
                  <f.icon size={28} className="text-white" />
                </div>
                <h3 className="font-extrabold text-white text-lg mb-1">{f.title}</h3>
                <p className="text-white/70 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="relative py-16 px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-5xl font-extrabold text-center text-white mb-12" style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}>
            كيف تستخدم الكود؟
          </motion.h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "اضغط على الرابط", desc: "اضغط على زر «اضغط للبدء» لفتح تطبيق SHEIN" },
              { num: "2", title: "ابحث عن الكود", desc: `ابحث عن ${COUPON_CODE} في تطبيق SHEIN` },
              { num: "3", title: "تسوّق واستمتع", desc: "أضف منتجات الأطفال والرضع إلى سلتك واستمتع بالخصم!" },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex items-center gap-4 bg-white/30 backdrop-blur-xl rounded-2xl p-5 border-2 border-white/40">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-extrabold text-xl shrink-0 shadow-lg">{step.num}</div>
                <div><h3 className="font-bold text-white text-lg mb-0.5">{step.title}</h3><p className="text-white/70 text-sm">{step.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-xl mx-auto text-center bg-white/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border-2 border-white/50" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="inline-block mb-4">
            <Heart size={48} className="text-pink-500 fill-current" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}>جاهز للتسوّق؟</h2>
          <p className="text-white/70 text-lg mb-6">انسخ الكود واضغط على الرابط لبدء التسوّق بخصم 50%</p>

          <div className="bg-white rounded-2xl py-3 px-6 mb-6 border-2 border-dashed border-pink-400">
            <p className="text-2xl font-extrabold text-gray-800 tracking-wider">{COUPON_CODE}</p>
          </div>

          <a href={SHEIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-extrabold px-10 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-xl">
            <ShoppingBag size={24} /> تسوّق الآن على SHEIN
          </a>
          <p className="text-white/50 text-xs mt-4">💰 لا تفوّت العروض الرائعة على شي إن 💰</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 text-center z-10">
        <p className="text-white/50 text-xs">© 2026 صفحة كوبونات SHEIN • العروض محدودة</p>
      </footer>
    </main>
  );
}
