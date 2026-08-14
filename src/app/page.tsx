"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Star, Truck, Shield, Leaf, Droplet, Sparkles, ShoppingBag, Heart, Share2, Plus, Minus } from "lucide-react";

const WALMART_URL = "https://www.walmart.com/ip/Besque-Magic-Body-Oil-Unscented-Fragrance-Free-Hydrating-Firming-Body-Moisturizer-Natural-Plant-Based-Ingredients-Lightweight-Non-Greasy-Vegan-Skinca/17344871408?classType=VARIANT";

const PRODUCT_IMG = "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80&auto=format&fit=crop";
const PRODUCT_IMG_2 = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80&auto=format&fit=crop";
const PRODUCT_IMG_3 = "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80&auto=format&fit=crop";
const PRODUCT_IMG_4 = "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80&auto=format&fit=crop";

const FEATURES = [
  { icon: Droplet, title: "ترطيب عميق", desc: "ترطيب يدوم طويلاً بدون إضافات عطرية" },
  { icon: Leaf, title: "مكونات نباتية 100%", desc: "زيوت طبيعية: اللوز الحلو، الجوجوبا، الأفوكادو، بذور العنب" },
  { icon: Sparkles, title: "شد وتقوية", desc: "يحسّن مرونة البشرة ويقلل علامات التمدد" },
  { icon: Shield, title: "خالٍ من العطور", desc: "آمن للبشرة الحساسة وحتى بشرة الأطفال" },
];

const INGREDIENTS = [
  { name: "زيت اللوز الحلو", desc: "يرطب ويغذي البشرة بعمق" },
  { name: "زيت الجوجوبا", desc: "يوازن إفراز الدهون ويهدئ البشرة" },
  { name: "زيت بذور العنب", desc: "مضاد أكسدة خفيف وسريع الامتصاص" },
  { name: "زيت الأفوكادو", desc: "غني بالفيتامينات A و D و E" },
  { name: "زيت زهرة الربيع المسائية", desc: "يقلل الالتهابات ويحسّن مرونة البشرة" },
  { name: "فيتامين E", desc: "مضاد أكسدة قوي يحمي من الجذور الحرة" },
  { name: "زيت الورد البري", desc: "يجدّد الخلايا ويوحّد لون البشرة" },
];

const STEPS = [
  { num: "1", title: "نظّف بشرتك", desc: "اغسل المنطقة بالماء الفاتر والصابون اللطيف" },
  { num: "2", title: "ضع كمية صغيرة", desc: "ضع 2-3 قطرات على راحة يدك" },
  { num: "3", title: "دلّك بلطف", desc: "دلّك بحركات دائرية حتى يمتص بالكامل" },
  { num: "4", title: "استمتع بالنتائج", desc: "استخدمه يومياً صباحاً ومساءً" },
];

const REVIEWS = [
  { name: "نورة الأحمد", rating: 5, text: "أفضل زيت جسم جربته! بشرتي أصبحت ناعمة جداً وإشراقتها واضحة. أنصح به بشدة.", date: "قبل 3 أيام", verified: true },
  { name: "سارة المطيري", rating: 5, text: "خفيف وغير دهني نهائياً، يمتص بسرعة. اشتريته 3 مرات وما راح أغيره!", date: "قبل أسبوع", verified: true },
  { name: "ريم العتيبي", rating: 4, text: "بشرتي كانت جافة جداً وهذا الزيت غيّر حياتي. تستاهل كل ريال.", date: "قبل أسبوعين", verified: true },
  { name: "فاطمة القحطاني", rating: 5, text: "منتج رائع وخالٍ من العطور، مناسب لبشرتي الحساسة. النتائج ظاهرة من أول أسبوع.", date: "قبل شهر", verified: true },
];

const PACKAGES = [
  { qty: "1", price: "$64.99", perUnit: "$64.99", popular: false },
  { qty: "2", price: "$120.00", perUnit: "$60.00", popular: true, save: "وفّر $10" },
  { qty: "4", price: "$220.00", perUnit: "$55.00", popular: false, save: "وفّر $40" },
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 59, seconds: 59 });
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedPack, setSelectedPack] = useState(1);
  const [qty, setQty] = useState(1);

  const images = [PRODUCT_IMG, PRODUCT_IMG_2, PRODUCT_IMG_3, PRODUCT_IMG_4];

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
    <main className="min-h-screen bg-gradient-to-b from-[#0d0b14] via-[#1a1525] to-[#0d0b14]">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-[#c9a96a] via-[#e6c885] to-[#c9a96a] text-[#0d0b14] text-center py-2 text-xs sm:text-sm font-bold">
        ✦ عرض خاص: شحن مجاني + خصم على الكميات ✦ توفر محدود
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#c9a96a]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#d4a5a5]/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Images */}
          <div className="flex flex-col items-center gap-4">
            {/* Main image */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96a]/20 to-[#d4a5a5]/10 blur-2xl rounded-3xl" />
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl" style={{ boxShadow: "0 20px 60px rgba(201,169,106,0.2)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={images[selectedImage]} alt="Besque Magic Body Oil" className="w-full h-full object-cover" />
              </div>
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">الأكثر مبيعاً</div>
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button key={i} onClick={() => setSelectedImage(i)} className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === i ? "border-[#c9a96a]" : "border-white/10 opacity-60"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="text-center lg:text-right">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="text-xs text-[#c9a96a] font-bold uppercase tracking-widest">Besque Store</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl sm:text-5xl font-extrabold mt-2 mb-3 leading-tight">
              زيت الجسم السحري <span className="bg-gradient-to-r from-[#c9a96a] to-[#e6c885] bg-clip-text text-transparent">Besque</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-base text-white/60 mb-4">
              خالٍ من العطور • مرطب ومقوّي • مكونات نباتية طبيعية • خفيف وغير دهني • نباتي (Vegan) • 3.4 أونصة سائلة
            </motion.p>

            {/* Rating */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-2 justify-center lg:justify-start mb-6">
              <div className="flex">{[1,2,3,4,5].map((s) => <Star key={s} size={18} className={s <= 4 ? "text-[#c9a96a] fill-current" : "text-white/20"} />)}</div>
              <span className="text-white/50 text-sm">3.9 من 5 (21 تقييم)</span>
            </motion.div>

            {/* Package options */}
            <div className="space-y-2 mb-6">
              {PACKAGES.map((pack, i) => (
                <button key={i} onClick={() => setSelectedPack(i)} className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all ${selectedPack === i ? "border-[#c9a96a] bg-[#c9a96a]/10" : "border-white/10 bg-white/5"}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPack === i ? "border-[#c9a96a]" : "border-white/20"}`}>
                      {selectedPack === i && <div className="w-2.5 h-2.5 rounded-full bg-[#c9a96a]" />}
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-white text-sm">{pack.qty} عبوة</span>
                      {pack.save && <span className="text-xs text-green-400 mr-2">{pack.save}</span>}
                      {pack.popular && <span className="bg-[#c9a96a] text-[#0d0b14] text-[10px] font-bold px-2 py-0.5 rounded-full mr-2">الأكثر طلباً</span>}
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="font-extrabold text-[#c9a96a] text-lg">{pack.price}</span>
                    <span className="text-xs text-white/40 block">{pack.perUnit} للعبوة</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Countdown */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 mb-6">
              <p className="text-xs text-red-400 mb-2 font-bold text-center">⏰ ينتهي العرض خلال:</p>
              <div className="flex gap-3 justify-center">
                {[{v:timeLeft.hours,l:"ساعة"},{v:timeLeft.minutes,l:"دقيقة"},{v:timeLeft.seconds,l:"ثانية"}].map((t,i) => (
                  <div key={i} className="bg-[#1a1525] rounded-xl px-4 py-2 min-w-[60px] text-center">
                    <div className="text-2xl font-extrabold text-white">{String(t.v).padStart(2,'0')}</div>
                    <div className="text-[10px] text-white/50">{t.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a href={WALMART_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#c9a96a] to-[#e6c885] text-[#0d0b14] font-extrabold px-8 py-4 rounded-full text-lg hover:scale-[1.02] transition-transform shadow-lg">
              <ShoppingBag size={22} /> اشترِ الآن من وول مارت
            </a>

            {/* Trust */}
            <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
              <span className="flex items-center gap-1 text-xs text-white/40"><Truck size={14} /> شحن سريع</span>
              <span className="flex items-center gap-1 text-xs text-white/40"><Shield size={14} /> ضمان الاسترجاع</span>
              <span className="flex items-center gap-1 text-xs text-white/40"><Leaf size={14} /> نباتي وغير مُختبر على الحيوانات</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-10">لماذا <span className="bg-gradient-to-r from-[#c9a96a] to-[#e6c885] bg-clip-text text-transparent">Besque؟</span></h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:border-[#c9a96a]/30 transition-colors">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#c9a96a]/10 flex items-center justify-center mb-3"><f.icon size={24} className="text-[#c9a96a]" /></div>
                <h3 className="font-bold text-white text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-white/50">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product description */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-8">تفاصيل <span className="bg-gradient-to-r from-[#c9a96a] to-[#e6c885] bg-clip-text text-transparent">المنتج</span></h2>
          <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
            <p>
              زيت Besque Magic Body Oil هو زيت عطر خالٍ من العطور (Unscented)، مصمم خصيصاً للبشرة الحساسة والمعرضة للحساسية. يوفّر ترطيباً عميقاً ويدوم طويلاً دون التسبب في أي تهيج.
            </p>
            <p>
              مصنوع من مزيج فاخر من الزيوت النباتية النقية: زيت بذور العنب، زيت الجوجوبا، زيت الأفوكادو، وزيت اللوز الحلو. كل مكون اختير بعناية لفوائده الغذائية والمضادة للالتهابات.
            </p>
            <p>
              تركيبته الخفيفة تمتص بسرعة دون ترك أثر دهني، مما يجعله مثالياً للاستخدام تحت واقي الشمس أو المكياج. مع الاستخدام المنتظم، يحسّن ملمس البشرة، يقلل من علامات التمدد، ويدعم حاجز البشرة الطبيعي.
            </p>
            <p>
              منتج نظيف (Clean Beauty) متعدد الاستخدامات: زيت جسم يومي، زيت تدليك مهدّئ، أو زيت أطفال لطيف. خالٍ من العطور الاصطناعية، البارابين، السلفات، والزيت المعدني. نباتي (Vegan) وغير مُختبر على الحيوانات (Cruelty-Free).
            </p>
          </div>

          {/* Specs table */}
          <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-x-reverse divide-white/10">
              {[
                {label:"العلامة",value:"Besque"},
                {label:"نوع البشرة",value:"كل الأنواع"},
                {label:"الحجم",value:"3.4 أونصة سائلة"},
                {label:"الاستخدام",value:"تدليك وترطيب"},
              ].map((s,i) => (
                <div key={i} className="p-4 text-center">
                  <p className="text-xs text-white/40 mb-1">{s.label}</p>
                  <p className="font-bold text-white text-sm">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-16 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-10">المكونات <span className="bg-gradient-to-r from-[#c9a96a] to-[#e6c885] bg-clip-text text-transparent">الطبيعية</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {INGREDIENTS.map((ing, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c9a96a]/15 flex items-center justify-center shrink-0"><Leaf size={16} className="text-[#c9a96a]" /></div>
                <div><h3 className="font-bold text-white text-sm">{ing.name}</h3><p className="text-xs text-white/50">{ing.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-10">طريقة <span className="bg-gradient-to-r from-[#c9a96a] to-[#e6c885] bg-clip-text text-transparent">الاستخدام</span></h2>
          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a96a] to-[#e6c885] flex items-center justify-center text-[#0d0b14] font-extrabold shrink-0">{step.num}</div>
                <div><h3 className="font-bold text-white text-sm mb-0.5">{step.title}</h3><p className="text-xs text-white/50">{step.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">آراء <span className="bg-gradient-to-r from-[#c9a96a] to-[#e6c885] bg-clip-text text-transparent">العملاء</span></h2>
            <div className="flex items-center justify-center gap-2"><div className="flex">{[1,2,3,4,5].map((s) => <Star key={s} size={18} className={s <= 4 ? "text-[#c9a96a] fill-current" : "text-white/20"} />)}</div><span className="text-white/50 text-sm">3.9 من 5 — 21 تقييم</span></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {REVIEWS.map((review, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a96a] to-[#e6c885] flex items-center justify-center text-[#0d0b14] font-bold">{review.name.charAt(0)}</div>
                  <div><p className="font-bold text-white text-sm">{review.name}</p><p className="text-xs text-white/40">{review.date}</p></div>
                  {review.verified && <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full mr-auto">✓ مشترى موثّق</span>}
                </div>
                <div className="flex gap-1 mb-2">{[1,2,3,4,5].map((s) => <Star key={s} size={12} className={s <= review.rating ? "text-[#c9a96a] fill-current" : "text-white/20"} />)}</div>
                <p className="text-sm text-white/70 leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-gradient-to-b from-[#c9a96a]/10 to-transparent border-2 border-[#c9a96a]/20 rounded-3xl p-8 sm:p-12">
            <Sparkles size={40} className="mx-auto text-[#c9a96a] mb-4" />
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">احصل عليه <span className="bg-gradient-to-r from-[#c9a96a] to-[#e6c885] bg-clip-text text-transparent">الآن!</span></h2>
            <p className="text-white/60 text-base mb-6">منتج طبيعي فاخر لبشرة صحية ومشرقة</p>
            <a href={WALMART_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#c9a96a] to-[#e6c885] text-[#0d0b14] font-extrabold px-10 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg">
              <ShoppingBag size={22} /> اشترِ الآن من وول مارت
            </a>
            <p className="text-xs text-white/30 mt-4">✓ شحن سريع • ✓ ضمان الاسترجاع • ✓ دفع آمن</p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-white/5 text-center">
        <p className="text-white/30 text-xs">© 2026 صفحة إعلانية • المنتج يُباع عبر Walmart.com</p>
      </footer>
    </main>
  );
}
