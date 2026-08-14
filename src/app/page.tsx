"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Star, Truck, Shield, Leaf, Droplet, Sparkles, ChevronDown, Heart, ShoppingBag } from "lucide-react";

const WALMART_URL = "https://www.walmart.com/ip/Besque-Magic-Body-Oil-Unscented-Fragrance-Free-Hydrating-Firming-Body-Moisturizer-Natural-Plant-Based-Ingredients-Lightweight-Non-Greasy-Vegan-Skinca/17344871408?classType=VARIANT";

const FEATURES = [
  { icon: Droplet, title: "ترطيب عميق", desc: "يحبس الرطوبة في البشرة لمدة 48 ساعة" },
  { icon: Leaf, title: "مكونات نباتية", desc: "100% طبيعية وخالية من المواد الكيميائية" },
  { icon: Sparkles, title: "شد وتقوية", desc: "يحسّن مرونة البشرة ويمنحها إشراقة" },
  { icon: Shield, title: "خالٍ من العطور", desc: "مناسب للبشرة الحساسة والعرضة للحساسية" },
];

const INGREDIENTS = [
  { name: "زيت الجوجوبا", desc: "يرطب البشرة بعمق دون ترك أثر دهني" },
  { name: "زيت الأرغان", desc: "غني بفيتامين E لمحاربة علامات التقدم في العمر" },
  { name: "زيت اللوز الحلو", desc: "يغذي البشرة ويمنحها نعومة حريرية" },
  { name: "فيتامين E", desc: "مضاد أكسدة قوي يحمي البشرة من الجذور الحرة" },
  { name: "زيت جوز الهند", desc: "مرطب طبيعي مضاد للبكتيريا" },
  { name: "زيت الورد", desc: "يهدئ البشرة ويمنحها إشراقة طبيعية" },
];

const STEPS = [
  { num: "1", title: "نظّف بشرتك", desc: "اغسل المنطقة المراد علاجها بالماء الفاتر والصابون اللطيف" },
  { num: "2", title: "ضع كمية صغيرة", desc: "ضع 2-3 قطرات على راحة يدك" },
  { num: "3", title: "دلّك بلطف", desc: "دلّك الزيت على البشرة بحركات دائرية حتى يمتص بالكامل" },
  { num: "4", title: "استمتع بالنتائج", desc: "استخدمه يومياً صباحاً ومساءً للحصول على أفضل النتائج" },
];

const REVIEWS = [
  { name: "نورة الأحمد", rating: 5, text: "أفضل زيت جسم جربته! بشرتي أصبحت ناعمة جداً وإشراقتها واضحة من أول أسبوع. أنصح به بشدة.", date: "قبل 3 أيام" },
  { name: "سارة المطيري", rating: 5, text: "خفيف وغير دهني نهائياً، يمتص بسرعة. رائحته طبيعية ومريحة. اشتريته 3 مرات!", date: "قبل أسبوع" },
  { name: "ريم العتيبي", rating: 5, text: "بشرتي كانت جافة جداً وهذا الزيت غيّر حياتي. أصبحت نضرة ومشدودة. تستاهل كل ريال!", date: "قبل أسبوعين" },
  { name: "فاطمة القحطاني", rating: 4, text: "منتج ممتاز، الترطيب يدوم طويلاً. أتمنى لو كان الحجم أكبر بقليل.", date: "قبل شهر" },
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 59, seconds: 59 });

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

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0510] via-[#1a0a20] to-[#0a0510]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#f5d061]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#ff6b9d]/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Product info */}
          <div className="text-center lg:text-right">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="inline-flex items-center gap-2 bg-[#f5d061]/10 border border-[#f5d061]/30 text-[#f5d061] px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6">
                <Sparkles size={14} /> الأكثر مبيعاً هذا الأسبوع
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
              زيت الجسم <span className="text-gradient-gold">السحري</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg sm:text-xl text-white/70 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              مرطب طبيعي بزيوت نباتية لبشرة نضرة ومشدودة. خفيف، غير دهني، وخالٍ من العطور.
            </motion.p>

            {/* Rating */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-2 justify-center lg:justify-start mb-6">
              <div className="flex">
                {[1,2,3,4,5].map((s) => <Star key={s} size={20} className="text-[#f5d061] fill-current" />)}
              </div>
              <span className="text-white/60 text-sm">4.8 (2,847 تقييم)</span>
            </motion.div>

            {/* Price */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex items-center gap-3 justify-center lg:justify-start mb-6">
              <span className="text-4xl sm:text-5xl font-extrabold text-gradient-gold">$12.97</span>
              <span className="text-xl text-white/30 line-through">$24.99</span>
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">خصم 48%</span>
            </motion.div>

            {/* Countdown */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 mb-6 inline-block">
              <p className="text-xs text-red-400 mb-2 font-bold">⏰ ينتهي العرض خلال:</p>
              <div className="flex gap-3 text-center">
                {[{v:timeLeft.hours,l:"ساعة"},{v:timeLeft.minutes,l:"دقيقة"},{v:timeLeft.seconds,l:"ثانية"}].map((t,i) => (
                  <div key={i} className="bg-[#1a0a20] rounded-xl px-4 py-2 min-w-[60px]">
                    <div className="text-2xl font-extrabold text-white">{String(t.v).padStart(2,'0')}</div>
                    <div className="text-[10px] text-white/50">{t.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href={WALMART_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f5d061] to-[#d4a017] text-[#0a0510] font-extrabold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg animate-pulse-glow">
                <ShoppingBag size={22} /> اشترِ الآن من وول مارت
              </a>
            </motion.div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
              <span className="flex items-center gap-1 text-xs text-white/50"><Truck size={14} /> شحن سريع</span>
              <span className="flex items-center gap-1 text-xs text-white/50"><Shield size={14} /> ضمان الاسترجاع</span>
              <span className="flex items-center gap-1 text-xs text-white/50"><Leaf size={14} /> نباتي 100%</span>
            </div>
          </div>

          {/* Right: Product image */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5d061]/30 to-[#ff6b9d]/20 blur-3xl rounded-full" />
              {/* Product bottle (CSS) */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative animate-float">
                  {/* Bottle */}
                  <div className="w-40 h-64 sm:w-52 sm:h-80 bg-gradient-to-b from-[#2a1530] to-[#1a0a20] rounded-3xl border-2 border-[#f5d061]/30 shadow-2xl relative overflow-hidden shine-effect" style={{ boxShadow: "0 20px 60px rgba(245,208,97,0.2)" }}>
                    {/* Cap */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-12 bg-gradient-to-b from-[#f5d061] to-[#d4a017] rounded-t-xl"></div>
                    {/* Label */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center w-full px-4">
                      <p className="text-[#f5d061] text-xs font-bold tracking-widest">BESQUE</p>
                      <p className="text-white text-sm font-extrabold mt-1">MAGIC</p>
                      <p className="text-white text-sm font-extrabold">BODY OIL</p>
                      <div className="w-12 h-0.5 bg-[#f5d061]/30 mx-auto my-2"></div>
                      <p className="text-white/50 text-[8px]">Natural • Vegan</p>
                      <p className="text-white/50 text-[8px]">Fragrance Free</p>
                    </div>
                    {/* Oil level */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#f5d061]/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">لماذا <span className="text-gradient-gold">زيت Besque؟</span></h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center card-3d">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#f5d061]/20 to-[#ff6b9d]/10 flex items-center justify-center mb-4">
                  <f.icon size={28} className="text-[#f5d061]" />
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/60">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product description */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-[#1a0a20]/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">عن <span className="text-gradient-gold">المنتج</span></h2>
          <div className="space-y-4 text-white/70 text-lg leading-relaxed text-right">
            <p>
              زيت الجسم السحري من Besque هو مرطب فاخر مصمم خصيصاً لمنح بشرتك ترطيباً عميقاً وثباتاً مذهلاً. مصنوع من مكونات نباتية طبيعية 100%، يجمع بين أفخر الزيوت لتغذية بشرتك من الأعماق.
            </p>
            <p>
              تركيبته الخفيفة وغير الدهنية تمتص بسرعة في البشرة، تاركة إياها ناعمة، نضرة، ومشرقة دون أي شعور لزج. خالٍ من العطور والإضافات الكيميائية، مما يجعله مثالياً للبشرة الحساسة.
            </p>
            <p>
              يعمل الزيت على تحسين مرونة البشرة، تقليل ظهور علامات التقدم في العمر، ومنح البشرة مظهراً صحياً ومتجدداً. منتج نباتي (Vegan) ولم يُختبر على الحيوانات.
            </p>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">المكونات <span className="text-gradient-gold">الطبيعية</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INGREDIENTS.map((ing, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-3 card-3d">
                <div className="w-10 h-10 rounded-full bg-[#f5d061]/15 flex items-center justify-center shrink-0">
                  <Leaf size={20} className="text-[#f5d061]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">{ing.name}</h3>
                  <p className="text-xs text-white/60">{ing.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-[#1a0a20]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">طريقة <span className="text-gradient-gold">الاستخدام</span></h2>
          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f5d061] to-[#d4a017] flex items-center justify-center text-[#0a0510] font-extrabold text-xl shrink-0">{step.num}</div>
                <div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-white/60">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">آراء <span className="text-gradient-gold">العملاء</span></h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">{[1,2,3,4,5].map((s) => <Star key={s} size={20} className="text-[#f5d061] fill-current" />)}</div>
              <span className="text-white/60">4.8 من 5 — 2,847 تقييم</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 card-3d">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f5d061] to-[#d4a017] flex items-center justify-center text-[#0a0510] font-bold">{review.name.charAt(0)}</div>
                  <div>
                    <p className="font-bold text-white text-sm">{review.name}</p>
                    <p className="text-xs text-white/40">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">{[1,2,3,4,5].map((s) => <Star key={s} size={14} className={s <= review.rating ? "text-[#f5d061] fill-current" : "text-white/20"} />)}</div>
                <p className="text-sm text-white/70 leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-b from-[#f5d061]/10 to-[#ff6b9d]/5 border-2 border-[#f5d061]/20 rounded-3xl p-8 sm:p-12">
            <Sparkles size={48} className="mx-auto text-[#f5d061] mb-4" />
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">احصل عليه <span className="text-gradient-gold">الآن!</span></h2>
            <p className="text-white/70 text-lg mb-6">لا تفوّت العرض — خصم 48% لفترة محدودة فقط!</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl font-extrabold text-gradient-gold">$12.97</span>
              <span className="text-xl text-white/30 line-through">$24.99</span>
            </div>
            <a href={WALMART_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f5d061] to-[#d4a017] text-[#0a0510] font-extrabold px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform shadow-lg animate-pulse-glow">
              <ShoppingBag size={24} /> اشترِ الآن من وول مارت
            </a>
            <p className="text-xs text-white/40 mt-4">✓ شحن سريع • ✓ ضمان الاسترجاع • ✓ دفع آمن</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 text-center">
        <p className="text-white/40 text-sm">© 2026 صفحة إعلانية — المنتج يُباع عبر Walmart.com</p>
        <p className="text-white/30 text-xs mt-2">هذه صفحة هبوط تسويقية. المنتج والشحن عبر Walmart الرسمي.</p>
      </footer>
    </main>
  );
}
