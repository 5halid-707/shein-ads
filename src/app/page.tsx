"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ShoppingBag, Clock, Sparkles, Search, Flame, TrendingUp, Zap, Volume2, VolumeX, X, ChevronLeft, ChevronRight } from "lucide-react";

const COUPONS = [
  { code: "53PP8N5", title: "الأطفال والرضع", subtitle: "خصم يصل إلى 50%", desc: "🔥 الأكثر طلباً! كل ما يحتاجه طفلك بأسعار لا تُصدّق — ملابس، ألعاب، ومستلزمات الرضع!", url: "https://onelink.shein.com/47/5ytahxdk60ir", image: "/coupons/baby.jpg", emoji: "👶", color: "from-pink-500 to-rose-400", textColor: "#2d1b0e", hot: true },
  { code: "2PE6FY4", title: "أفضل اختيارات الرجال", subtitle: "خصم يصل إلى 80%", desc: "💪 أزياء رجالية عصرية بخصم 80%! جدّد خزانتك بأقل الأسعار — قمصان، بناطيل، أحذية!", url: "https://onelink.shein.com/47/5ytabog1dv7c", image: "/coupons/men.jpg", emoji: "👔", color: "from-blue-500 to-cyan-400", textColor: "#0a1a2d", hot: true },
  { code: "K2S4T26", title: "أنماط Curve", subtitle: "تخفيضات الصيف حتى 50%", desc: "✨ أناقة لكل المقاسات! تخفيضات الصيف على أنماط Curve — أفخم التصاميم بأفضل الأسعار!", url: "https://onelink.shein.com/47/5yta2ixvkpav", image: "/coupons/curve.jpg", emoji: "👗", color: "from-purple-500 to-pink-400", textColor: "#1a0a2d", hot: false },
  { code: "KU2E656", title: "SHEIN Lifestyle", subtitle: "نسّق مساحتك", desc: "🏠 اجعل منزلك تحفة! ديكور وأثاث وإكسسوارات منزلية أنيقة بأسعار مذهلة!", url: "https://onelink.shein.com/47/5yt9y72foda1", image: "/coupons/lifestyle.jpg", emoji: "🏠", color: "from-green-500 to-emerald-400", textColor: "#0a2d1a", hot: false },
  { code: "799632W", title: "الحقائب والأحذية", subtitle: "خصم يصل إلى 90%!", desc: "👠 جنون! خصم 90% على أرقى الحقائب والأحذية + كوبون 60% للمستخدمين الجدد!", url: "https://onelink.shein.com/47/5yt9tfeqthkz", image: "/coupons/shoes.jpg", emoji: "👠", color: "from-red-500 to-orange-400", textColor: "#2d0a0a", hot: true },
  { code: "832GD55", title: "أيام الدنيم", subtitle: "خصم حتى 80%", desc: "👖 أيام الدنيم! خصم 80% على كل تشكيلات الجينز — بناطيل، جاكيتات، وقمصان!", url: "https://onelink.shein.com/47/5yt9quoal0jq", image: "/coupons/denim.jpg", emoji: "👖", color: "from-indigo-500 to-blue-400", textColor: "#0a0a2d", hot: false },
  { code: "CD3X24F", title: "موسم جديد، حركات جديدة", subtitle: "خصم حتى 90%", desc: "🆕 صيحات جديدة، حركات جديدة! خصم 90% على أحدث صيحات الموضة لهذا الموسم!", url: "https://onelink.shein.com/47/5yt9no8i1u13", image: "/coupons/newseason.jpg", emoji: "🆕", color: "from-orange-500 to-amber-400", textColor: "#2d1a0a", hot: true },
  { code: "H433454", title: "أشهر 500 اختيار من SHEIN", subtitle: "خصم إضافي 50%", desc: "🏆 الأكثر مبيعاً على الإطلاق! 95% تقييمات 5 نجوم — اكتشف لماذا يختارها الآلاف!", url: "https://onelink.shein.com/47/5yt9kjrqklml", image: "/coupons/top500.jpg", emoji: "🏆", color: "from-yellow-500 to-orange-400", textColor: "#2d2d0a", hot: false },
  { code: "UZ5E5U8", title: "اكتشافات جمال متألقة", subtitle: "خصم حتى 90%", desc: "💄 عالم الجمال بانتظارك! مكياج، عطور، وكريمات بخصم يصل إلى 90%!", url: "https://onelink.shein.com/47/5yt9dv1yulxc", image: "/coupons/beauty.jpg", emoji: "💄", color: "from-pink-500 to-fuchsia-400", textColor: "#2d0a1a", hot: true },
  { code: "HTQZD9V", title: "الأكثر مبيعاً من Anewsta", subtitle: "خصم يصل إلى 50%", desc: "✨ أناقة فاخرة بأسعار في المتناول! تصاميم راقية وتفاصيل دقيقة وحرفية خالدة!", url: "https://onelink.shein.com/47/5yt91d6x6sul", image: "/coupons/anewsta.jpg", emoji: "✨", color: "from-amber-500 to-yellow-400", textColor: "#2d2a0a", hot: false },
  { code: "V37EZHZ", title: "SHEGLAM | تخفيضات سوبر", subtitle: "خصم حتى 70%", desc: "💎 SHEGLAM بخصم 70%! منتجات تجميل احترافية بأسعار لا تُقاوَم!", url: "https://onelink.shein.com/47/5yt8w9p1qebw", image: "/coupons/sheglam.jpg", emoji: "💎", color: "from-violet-500 to-purple-400", textColor: "#1a0a2d", hot: true },
  { code: "WBEU339", title: "MOTF — أفضل الاختيارات", subtitle: "خصم حتى 60%", desc: "👗 أناقتك تبدأ هنا! MOTF بخصم 60% — أرقى الأقمشة والتصاميم العصرية!", url: "https://onelink.shein.com/47/5yt8tf3fvjnq", image: "/coupons/motf.jpg", emoji: "👗", color: "from-teal-500 to-cyan-400", textColor: "#0a2d2d", hot: false },
  { code: "XVHPP34", title: "المجوهرات والإكسسوارات", subtitle: "خصم يصل إلى 90%", desc: "💍 تألقي بأقل سعر! خصم 90% على المجوهرات والإكسسوارات + 50% إضافي للجدد!", url: "https://onelink.shein.com/47/5yt8ph17phkc", image: "/coupons/jewelry.jpg", emoji: "💍", color: "from-fuchsia-500 to-pink-400", textColor: "#2d0a2d", hot: true },
  { code: "5P4UNYM", title: "أفضل الماركات", subtitle: "خصم حتى 60%", desc: "🏷️ ماركات عالمية بأسعار محلية! خصم 60% + كوبون 50% للمستخدم الجديد!", url: "https://onelink.shein.com/47/5yt8kvam8vne", image: "/coupons/brands.jpg", emoji: "🏷️", color: "from-cyan-500 to-blue-400", textColor: "#0a1a2d", hot: false },
  { code: "832J633", title: "ملابس النساء", subtitle: "تخفيضات تصل إلى 80%", desc: "👚 أكبر تخفيضات نسائية! فساتين، بلوزات، تنانير — كل ما تطمحين إليه بخصم 80%!", url: "https://onelink.shein.com/47/5yt8c7jqgwte", image: "/coupons/women.jpg", emoji: "👚", color: "from-rose-500 to-red-400", textColor: "#2d0a0a", hot: true },
  { code: "42646ZP", title: "مختارات الجمال المُنتقاة", subtitle: "خصم حتى 80%", desc: "🧴 ماركات تجميل كبيرة بأسعار صغيرة! خصم 80% + 50% إضافي للمستخدم الجديد!", url: "https://onelink.shein.com/47/5yt88r8scr39", image: "/coupons/beauty2.jpg", emoji: "🧴", color: "from-lime-500 to-green-400", textColor: "#0a2d0a", hot: false },
  { code: "726473D", title: "أفضل المنتجات المختارة", subtitle: "خصومات لفترة محدودة", desc: "🎁 لا تفوتها! منتجات مختارة بعناية بخصومات حصرية لفترة محدودة فقط!", url: "https://onelink.shein.com/47/5yt85or23sb0", image: "/coupons/selected.jpg", emoji: "🎁", color: "from-sky-500 to-indigo-400", textColor: "#0a0a2d", hot: false },
];

// Hero carousel images
const HERO_IMAGES = ["/coupons/baby.jpg", "/coupons/men.jpg", "/coupons/women.jpg", "/coupons/beauty.jpg", "/coupons/jewelry.jpg", "/coupons/shoes.jpg"];

export default function Home() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [search, setSearch] = useState("");
  const [liveViewers, setLiveViewers] = useState(1247);
  const [audioStarted, setAudioStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const [modalCoupon, setModalCoupon] = useState<typeof COUPONS[0] | null>(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else { seconds = 59; if (minutes > 0) minutes--; else { minutes = 59; if (hours > 0) hours--; } }
        return { hours, minutes, seconds };
      });
    }, 1000);
    const viewerTimer = setInterval(() => setLiveViewers(v => v + Math.floor(Math.random() * 7) - 3), 3000);
    const heroTimer = setInterval(() => setHeroSlide(s => (s + 1) % HERO_IMAGES.length), 3000);
    return () => { clearInterval(timer); clearInterval(viewerTimer); clearInterval(heroTimer); };
  }, []);

  // Auto-play audio on first user interaction
  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && !audioStarted) {
        audioRef.current.volume = 0.7;
        audioRef.current.play().then(() => { setAudioStarted(true); setMuted(false); }).catch(() => {});
      }
    };
    document.addEventListener("click", startAudio, { once: true });
    document.addEventListener("touchstart", startAudio, { once: true });
    document.addEventListener("keydown", startAudio, { once: true });
    return () => {
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("keydown", startAudio);
    };
  }, [audioStarted]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (muted) { audioRef.current.play().catch(() => {}); setMuted(false); }
    else { audioRef.current.pause(); setMuted(true); }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const openModal = (coupon: typeof COUPONS[0]) => setModalCoupon(coupon);

  const filteredCoupons = search
    ? COUPONS.filter(c => c.title.includes(search) || c.code.includes(search) || c.subtitle.includes(search))
    : COUPONS;

  return (
    <main className="min-h-screen relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FF1744 0%, #FF6B9D 15%, #FFC75F 35%, #00E5FF 55%, #7C4DFF 80%, #FF1744 100%)" }}>
      <audio ref={audioRef} src="/voice-ad.wav" loop preload="auto" />

      {/* Hidden SEO content */}
      <div className="sr-only">
        <h1>كوبونات SHEIN شي إن 2026 — خصم يصل إلى 90%</h1>
        <p>أحدث كوبونات وأكواد خصم شي إن SHEIN لعام 2026. خصومات تصل إلى 90% على جميع المنتجات: ملابس الأطفال والرضع، أزياء الرجال، ملابس النساء، منتجات التجميل، المجوهرات والإكسسوارات، الحقائب والأحذية، الدنيم، SHEGLAM، MOTF، Anewsta، وأكثر. ابحث عن الأكواد: 53PP8N5، 2PE6FY4، K2S4T26، KU2E656، 799632W، 832GD55، CD3X24F، H433454، UZ5E5U8، HTQZD9V، V37EZHZ، WBEU339، XVHPP34، 5P4UNYM، 832J633، 42646ZP، 726473D.</p>
        <p>SHEIN coupon codes 2026. Discount up to 90% on kids, men, women, beauty, jewelry, shoes, denim. Active codes: 53PP8N5, 2PE6FY4, K2S4T26, 799632W, CD3X24F, UZ5E5U8, V37EZHZ, XVHPP34.</p>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full" style={{ width: `${15 + Math.random() * 90}px`, height: `${15 + Math.random() * 90}px`, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, background: `rgba(255,255,255,${0.08 + Math.random() * 0.25})`, backdropFilter: "blur(8px)" }} animate={{ y: [0, -40, 0], x: [0, Math.random() * 30 - 15, 0], rotate: [0, 360], scale: [1, 1.2, 1] }} transition={{ duration: 4 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 3 }} />
        ))}
      </div>

      {/* Flash top bar */}
      <motion.div animate={{ backgroundColor: ["rgba(255,23,68,0.9)", "rgba(255,107,157,0.9)", "rgba(255,199,95,0.9)", "rgba(255,23,68,0.9)"] }} transition={{ duration: 2, repeat: Infinity }} className="relative text-white text-center py-2.5 text-sm sm:text-base font-extrabold z-20 flex items-center justify-center gap-2">
        <Flame size={18} className="animate-pulse" /> لا تفوّت هذه العروض الرائعة على شي إن! خصومات تصل إلى 90%! <Flame size={18} className="animate-pulse" />
      </motion.div>

      {/* Live viewers + audio toggle */}
      <div className="relative z-20 flex justify-center items-center gap-3 py-2">
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          {liveViewers} شخص يتصفح الآن
        </motion.div>
        <button onClick={toggleAudio} className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold border border-white/20 hover:bg-black/60 transition-colors">
          {muted ? <><VolumeX size={14} /> تشغيل الصوت</> : <><Volume2 size={14} className="animate-pulse" /> صوت الإعلان</>}
        </button>
      </div>

      {/* Hero with image carousel */}
      <section className="relative pt-6 pb-6 px-4 z-10 text-center">
        <motion.div initial={{ scale: 0, rotate: -360 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", duration: 1.2 }} className="mb-4">
          <div className="inline-block bg-white/20 backdrop-blur-xl rounded-3xl px-8 py-4 shadow-2xl border-2 border-white/30" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
            <span className="text-4xl sm:text-6xl font-extrabold" style={{ background: "linear-gradient(135deg, #FF1744, #FFC75F, #00E5FF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(2px 2px 0 rgba(0,0,0,0.1))" }}>SHEIN</span>
          </div>
        </motion.div>

        {/* Hero image carousel */}
        <div className="relative w-full max-w-2xl mx-auto h-48 sm:h-64 rounded-3xl overflow-hidden mb-4 shadow-2xl border-2 border-white/30">
          {HERO_IMAGES.map((img, i) => (
            <motion.div key={i} className="absolute inset-0" animate={{ opacity: i === heroSlide ? 1 : 0, scale: i === heroSlide ? 1 : 1.1 }} transition={{ duration: 0.8 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="SHEIN products" className="w-full h-full object-cover" />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {HERO_IMAGES.map((_, i) => (
              <button key={i} onClick={() => setHeroSlide(i)} className={`h-2 rounded-full transition-all ${i === heroSlide ? "bg-white w-8" : "bg-white/40 w-2"}`} />
            ))}
          </div>
          {/* Hero text overlay */}
          <div className="absolute bottom-10 inset-x-0 text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl sm:text-5xl font-extrabold" style={{ background: "linear-gradient(135deg, #FFEB3B, #FFFFFF, #FFEB3B)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(3px 3px 0 rgba(0,0,0,0.2))" }}>
              {COUPONS.length}+ كوبون وخصم حصري
            </motion.h1>
          </div>
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-base sm:text-lg mb-4 font-semibold" style={{ color: "#1a0a0a", textShadow: "0 1px 2px rgba(255,255,255,0.5)" }}>
          🔥 انسخ الكود واضغط على الرابط — وفّر آلاف الريالات اليوم!
        </motion.p>

        {/* Countdown */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-md rounded-2xl px-5 py-3 mb-4 border border-white/20">
          <Clock size={18} className="text-yellow-300" />
          <span className="text-yellow-300 font-bold text-sm">ينتهي خلال:</span>
          <div className="flex gap-2">
            {[{v:timeLeft.hours,l:"س"},{v:timeLeft.minutes,l:"د"},{v:timeLeft.seconds,l:"ث"}].map((t,i) => (
              <div key={i} className="bg-white/15 rounded-lg px-2.5 py-1 min-w-[40px] text-center border border-white/20">
                <span className="text-lg font-extrabold text-white block">{String(t.v).padStart(2,'0')}</span>
                <span className="text-[8px] text-white/60">{t.l}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Search */}
        <div className="max-w-md mx-auto relative mb-4">
          <Search size={18} className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-600" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="🔍 ابحث عن كوبون..." className="w-full bg-white/80 backdrop-blur-md border-2 border-white/50 rounded-full px-12 py-3 font-semibold focus:outline-none focus:border-pink-400 transition-colors" style={{ color: "#1a0a0a" }} />
        </div>
      </section>

      {/* Coupons grid */}
      <section className="relative px-4 pb-12 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap size={20} className="text-yellow-300 animate-pulse" />
            <span className="text-yellow-300 font-extrabold text-sm">اضغط على أي كوبون لرؤية الصور والتفاصيل</span>
            <Zap size={20} className="text-yellow-300 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCoupons.map((coupon, idx) => (
              <motion.div key={coupon.code} initial={{ opacity: 0, y: 40, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: Math.min(idx * 0.05, 0.4), type: "spring" }} whileHover={{ y: -8, scale: 1.03 }} className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-white/50 cursor-pointer" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }} onClick={() => openModal(coupon)}>
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={coupon.image} alt={`${coupon.title} - كوبون ${coupon.code}`} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-2 right-2 bg-gradient-to-r ${coupon.color} text-white font-extrabold px-3 py-1 rounded-full text-xs shadow-lg`}>{coupon.subtitle}</div>
                  {coupon.hot && (
                    <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1, repeat: Infinity }} className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Flame size={10} /> HOT
                    </motion.div>
                  )}
                  <div className="absolute bottom-2 right-3 flex items-center gap-1.5">
                    <span className="text-xl">{coupon.emoji}</span>
                    <span className="text-white font-bold text-sm" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>{coupon.title}</span>
                  </div>
                </div>
                <div className="p-4" style={{ background: "white" }}>
                  <p className="text-xs leading-relaxed mb-3 font-medium line-clamp-2" style={{ color: coupon.textColor }}>{coupon.desc}</p>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl py-2 px-3 mb-3 border-2 border-dashed border-gray-300 flex items-center justify-between">
                    <span className="text-base font-extrabold text-gray-800 tracking-wider">{coupon.code}</span>
                    <button onClick={(e) => { e.stopPropagation(); copyCode(coupon.code); }} className={`flex items-center gap-1 bg-gradient-to-r ${coupon.color} text-white font-bold px-3 py-1.5 rounded-lg hover:scale-110 transition-transform text-xs shadow-md`}>
                      {copiedCode === coupon.code ? <><Check size={12} /> تم!</> : <><Copy size={12} /> نسخ</>}
                    </button>
                  </div>
                  <a href={coupon.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`flex items-center justify-center gap-2 w-full bg-gradient-to-r ${coupon.color} text-white font-extrabold py-2.5 rounded-xl hover:scale-[1.02] transition-transform shadow-lg text-sm`}>
                    <ShoppingBag size={16} /> تسوّق الآن
                  </a>
                </div>
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }} className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                </div>
              </motion.div>
            ))}
          </div>
          {filteredCoupons.length === 0 && <div className="text-center py-20"><p className="text-white/80 text-lg font-bold">لا توجد كوبونات مطابقة</p></div>}
        </div>
      </section>

      {/* Social proof */}
      <section className="relative py-8 px-4 z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: TrendingUp, label: "مستخدم نشط", value: "2.4M+", color: "text-green-300" },
            { icon: ShoppingBag, label: "طلب اليوم", value: "47K+", color: "text-yellow-300" },
            { icon: Sparkles, label: "كوبون نشط", value: `${COUPONS.length}`, color: "text-pink-300" },
            { icon: Flame, label: "خصم يصل إلى", value: "90%", color: "text-orange-300" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black/30 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
              <s.icon size={24} className={`mx-auto ${s.color} mb-1`} />
              <div className={`text-2xl font-extrabold ${s.color}`}>{s.value}</div>
              <div className="text-white/60 text-xs">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How to use */}
      <section className="relative py-12 px-4 z-10">
        <div className="max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-extrabold text-center mb-8" style={{ background: "linear-gradient(135deg, #FFEB3B, #FFFFFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>كيف تستخدم الكوبون؟</motion.h2>
          <div className="space-y-3">
            {[
              { num: "1", title: "اضغط على الكوبون", desc: "اضغط على أي كوبون لرؤية الصورة الكاملة والتفاصيل" },
              { num: "2", title: "انسخ الكود", desc: "اضغط على زر «نسخ» لنسخ كود الخصم" },
              { num: "3", title: "اضغط «تسوّق الآن»", desc: "سيفتح تطبيق شي إن مباشرة" },
              { num: "4", title: "استمتع بالخصم!", desc: "ابحث عن الكود واستمتع بالخصم الفوري!" },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-extrabold shrink-0 shadow-lg">{step.num}</div>
                <div><h3 className="font-bold text-white text-sm">{step.title}</h3><p className="text-white/60 text-xs">{step.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content section */}
      <section className="relative py-12 px-4 z-10 max-w-4xl mx-auto">
        <div className="bg-black/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 text-white/70 text-sm leading-relaxed">
          <h2 className="text-xl font-extrabold text-white mb-3">كوبونات وأكواد خصم SHEIN شي إن 2026</h2>
          <p className="mb-3">مرحباً بك في أكبر صفحة كوبونات شي إن SHEIN! نوفّر لك أحدث أكواد الخصم لعام 2026 على جميع الفئات: ملابس الأطفال والرضع، أزياء الرجال، ملابس النساء، منتجات التجميل والجمال، المجوهرات والإكسسوارات، الحقائب والأحذية، أيام الدنيم، SHEGLAM، MOTF، Anewsta، أنماط Curve، SHEIN Lifestyle، وأكثر.</p>
          <p className="mb-3">خصومات تصل إلى 90% على منتجاتك المفضلة! كل ما عليك فعله هو نسخ الكود والبحث عنه في تطبيق شي إن. الأكواد النشطة حالياً: 53PP8N5 (الأطفال 50%)، 2PE6FY4 (الرجال 80%)، K2S4T26 (Curve 50%)، 799632W (الأحذية 90%)، CD3X24F (موسم جديد 90%)، UZ5E5U8 (الجمال 90%)، V37EZHZ (SHEGLAM 70%)، XVHPP34 (المجوهرات 90%)، 832J633 (النساء 80%).</p>
          <p>احصل على كوبون خصم إضافي 50% إذا كنت مستخدم جديد! العروض محدودة — سارع بالتسوّق الآن ووفّر آلاف الريالات على مشترياتك من شي إن SHEIN.</p>
        </div>
      </section>

      {/* Promo Video Section */}
      <section className="relative py-12 px-4 z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-2" style={{ background: "linear-gradient(135deg, #FFEB3B, #FFFFFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>شاهد الفيديو الترويجي</h2>
            <p className="text-white/70 text-sm">🔥 كل العروض في فيديو واحد — شاهد الآن!</p>
          </motion.div>

          {/* Video player with autoplay */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/30" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <video
              src="/shein-coupons-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-auto"
              style={{ aspectRatio: "9/16", maxHeight: "70vh" }}
            />
          </div>
          <p className="text-center text-white/50 text-xs mt-3">👆 اضغط على الفيديو للتشغيل بالصوت</p>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="relative py-12 px-4 z-10">
        <div className="max-w-md mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl sm:text-3xl font-extrabold mb-3" style={{ background: "linear-gradient(135deg, #FFEB3B, #FFFFFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>امسح وشارك</h2>
            <p className="text-white/60 text-sm mb-6">وجّه كاميرا جوالك للوصول السريع لكل الكوبونات</p>
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-yellow-300/20 blur-3xl rounded-full" />
              <div className="relative bg-yellow-300 p-5 rounded-3xl shadow-2xl" style={{ boxShadow: "0 10px 40px rgba(255,235,59,0.3)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/qr-code.png" alt="باركود كوبونات SHEIN" className="w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-2xl" />
              </div>
            </div>
            <p className="text-yellow-300 text-sm font-bold mt-4">shein-couponse.vercel.app</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-6 px-4 text-center z-10">
        <p className="text-white/50 text-xs">© 2026 صفحة كوبونات SHEIN • {COUPONS.length} كوبون نشط • العروض محدودة</p>
      </footer>

      {/* Coupon detail modal */}
      <AnimatePresence>
        {modalCoupon && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setModalCoupon(null)} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[80] flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Large image */}
              <div className="relative h-64 sm:h-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={modalCoupon.image} alt={`${modalCoupon.title} - كوبون ${modalCoupon.code}`} className="w-full h-full object-cover" />
                <button onClick={() => setModalCoupon(null)} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80"><X size={18} /></button>
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {modalCoupon.hot && <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><Flame size={12} /> HOT</span>}
                  <span className={`bg-gradient-to-r ${modalCoupon.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>{modalCoupon.subtitle}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">{modalCoupon.emoji}</span>
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-800">{modalCoupon.title}</h3>
                    <p className={`text-sm font-bold bg-gradient-to-r ${modalCoupon.color} bg-clip-text text-transparent`}>{modalCoupon.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{modalCoupon.desc}</p>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl py-3 px-4 mb-4 border-2 border-dashed border-gray-300 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">كود الخصم</p>
                    <p className="text-2xl font-extrabold text-gray-800 tracking-wider">{modalCoupon.code}</p>
                  </div>
                  <button onClick={() => copyCode(modalCoupon.code)} className={`flex items-center gap-1 bg-gradient-to-r ${modalCoupon.color} text-white font-bold px-4 py-2 rounded-lg hover:scale-105 transition-transform text-sm shadow-lg`}>
                    {copiedCode === modalCoupon.code ? <><Check size={16} /> تم!</> : <><Copy size={16} /> نسخ</>}
                  </button>
                </div>
                <a href={modalCoupon.url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 w-full bg-gradient-to-r ${modalCoupon.color} text-white font-extrabold py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg`}>
                  <ShoppingBag size={20} /> تسوّق الآن على SHEIN
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
