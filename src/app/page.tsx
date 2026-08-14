"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ShoppingBag, Clock, Sparkles, Search, Flame, TrendingUp, Zap, Volume2, VolumeX, X, ChevronLeft, ChevronRight, Star, Tag, Gift } from "lucide-react";

const COUPONS = [
  { code: "53PP8N5", title: "الأطفال والرضع", subtitle: "خصم يصل إلى 50%", desc: "🔥 الأكثر طلباً! كل ما يحتاجه طفلك بأسعار لا تُصدّق — ملابس، ألعاب، ومستلزمات الرضع!", url: "https://onelink.shein.com/47/5ytahxdk60ir", image: "/coupons/baby.jpg", emoji: "👶", color: "from-pink-500 to-rose-400", textColor: "#2d1b0e", hot: true, keywords: "كوبونات شي إن للأطفال، خصم الأطفال والرضع، عروض شي إن الأطفال، كود خصم شي إن 53PP8N5" },
  { code: "2PE6FY4", title: "أفضل اختيارات الرجال", subtitle: "خصم يصل إلى 80%", desc: "💪 أزياء رجالية عصرية بخصم 80%! جدّد خزانتك بأقل الأسعار — قمصان، بناطيل، أحذية!", url: "https://onelink.shein.com/47/5ytabog1dv7c", image: "/coupons/men.jpg", emoji: "👔", color: "from-blue-500 to-cyan-400", textColor: "#0a1a2d", hot: true, keywords: "كوبونات شي إن للرجال، خصم أزياء رجالية، عروض شي إن الرجال، كود خصم شي إن 2PE6FY4" },
  { code: "K2S4T26", title: "أنماط Curve", subtitle: "تخفيضات الصيف حتى 50%", desc: "✨ أناقة لكل المقاسات! تخفيضات الصيف على أنماط Curve — أفخم التصاميم بأفضل الأسعار!", url: "https://onelink.shein.com/47/5yta2ixvkpav", image: "/coupons/curve.jpg", emoji: "👗", color: "from-purple-500 to-pink-400", textColor: "#1a0a2d", hot: false, keywords: "كوبونات شي إن Curve، خصم أنماط Curve، عروض شي إن الصيف، كود خصم شي إن K2S4T26" },
  { code: "KU2E656", title: "SHEIN Lifestyle", subtitle: "نسّق مساحتك", desc: "🏠 اجعل منزلك تحفة! ديكور وأثاث وإكسسوارات منزلية أنيقة بأسعار مذهلة!", url: "https://onelink.shein.com/47/5yt9y72foda1", image: "/coupons/lifestyle.jpg", emoji: "🏠", color: "from-green-500 to-emerald-400", textColor: "#0a2d1a", hot: false, keywords: "كوبونات شي إن Lifestyle، خصم ديكور منزل، عروض شي إن المنزل، كود خصم شي إن KU2E656" },
  { code: "799632W", title: "الحقائب والأحذية", subtitle: "خصم يصل إلى 90%!", desc: "👠 جنون! خصم 90% على أرقى الحقائب والأحذية + كوبون 60% للمستخدمين الجدد!", url: "https://onelink.shein.com/47/5yt9tfeqthkz", image: "/coupons/shoes.jpg", emoji: "👠", color: "from-red-500 to-orange-400", textColor: "#2d0a0a", hot: true, keywords: "كوبونات شي إن للأحذية، خصم الحقائب والأحذية، عروض شي إن الأحذية، كود خصم شي إن 799632W" },
  { code: "832GD55", title: "أيام الدنيم", subtitle: "خصم حتى 80%", desc: "👖 أيام الدنيم! خصم 80% على كل تشكيلات الجينز — بناطيل، جاكيتات، وقمصان!", url: "https://onelink.shein.com/47/5yt9quoal0jq", image: "/coupons/denim.jpg", emoji: "👖", color: "from-indigo-500 to-blue-400", textColor: "#0a0a2d", hot: false, keywords: "كوبونات شي إن دنيم، خصم الجينز، عروض شي إن الدنيم، كود خصم شي إن 832GD55" },
  { code: "CD3X24F", title: "موسم جديد، حركات جديدة", subtitle: "خصم حتى 90%", desc: "🆕 صيحات جديدة، حركات جديدة! خصم 90% على أحدث صيحات الموضة لهذا الموسم!", url: "https://onelink.shein.com/47/5yt9no8i1u13", image: "/coupons/newseason.jpg", emoji: "🆕", color: "from-orange-500 to-amber-400", textColor: "#2d1a0a", hot: true, keywords: "كوبونات شي إن موسم جديد، خصم الموضة الجديدة، عروض شي إن الجديدة، كود خصم شي إن CD3X24F" },
  { code: "H433454", title: "أشهر 500 اختيار من SHEIN", subtitle: "خصم إضافي 50%", desc: "🏆 الأكثر مبيعاً على الإطلاق! 95% تقييمات 5 نجوم — اكتشف لماذا يختارها الآلاف!", url: "https://onelink.shein.com/47/5yt9kjrqklml", image: "/coupons/top500.jpg", emoji: "🏆", color: "from-yellow-500 to-orange-400", textColor: "#2d2d0a", hot: false, keywords: "كوبونات شي إن الأكثر مبيعاً، خصم أشهر المنتجات، عروض شي إن الأفضل، كود خصم شي إن H433454" },
  { code: "UZ5E5U8", title: "اكتشافات جمال متألقة", subtitle: "خصم حتى 90%", desc: "💄 عالم الجمال بانتظارك! مكياج، عطور، وكريمات بخصم يصل إلى 90%!", url: "https://onelink.shein.com/47/5yt9dv1yulxc", image: "/coupons/beauty.jpg", emoji: "💄", color: "from-pink-500 to-fuchsia-400", textColor: "#2d0a1a", hot: true, keywords: "كوبونات شي إن للتجميل، خصم المكياج والعطور، عروض شي إن الجمال، كود خصم شي إن UZ5E5U8" },
  { code: "HTQZD9V", title: "الأكثر مبيعاً من Anewsta", subtitle: "خصم يصل إلى 50%", desc: "✨ أناقة فاخرة بأسعار في المتناول! تصاميم راقية وتفاصيل دقيقة وحرفية خالدة!", url: "https://onelink.shein.com/47/5yt91d6x6sul", image: "/coupons/anewsta.jpg", emoji: "✨", color: "from-amber-500 to-yellow-400", textColor: "#2d2a0a", hot: false, keywords: "كوبونات شي إن Anewsta، خصم الأنيق، عروض شي إن الفاخرة، كود خصم شي إن HTQZD9V" },
  { code: "V37EZHZ", title: "SHEGLAM | تخفيضات سوبر", subtitle: "خصم حتى 70%", desc: "💎 SHEGLAM بخصم 70%! منتجات تجميل احترافية بأسعار لا تُقاوَم!", url: "https://onelink.shein.com/47/5yt8w9p1qebw", image: "/coupons/sheglam.jpg", emoji: "💎", color: "from-violet-500 to-purple-400", textColor: "#1a0a2d", hot: true, keywords: "كوبونات شي إن SHEGLAM، خصم التجميل، عروض شي إن SHEGLAM، كود خصم شي إن V37EZHZ" },
  { code: "WBEU339", title: "MOTF — أفضل الاختيارات", subtitle: "خصم حتى 60%", desc: "👗 أناقتك تبدأ هنا! MOTF بخصم 60% — أرقى الأقمشة والتصاميم العصرية!", url: "https://onelink.shein.com/47/5yt8tf3fvjnq", image: "/coupons/motf.jpg", emoji: "👗", color: "from-teal-500 to-cyan-400", textColor: "#0a2d2d", hot: false, keywords: "كوبونات شي إن MOTF، خصم الأزياء الراقية، عروض شي إن MOTF، كود خصم شي إن WBEU339" },
  { code: "XVHPP34", title: "المجوهرات والإكسسوارات", subtitle: "خصم يصل إلى 90%", desc: "💍 تألقي بأقل سعر! خصم 90% على المجوهرات والإكسسوارات + 50% إضافي للجدد!", url: "https://onelink.shein.com/47/5yt8ph17phkc", image: "/coupons/jewelry.jpg", emoji: "💍", color: "from-fuchsia-500 to-pink-400", textColor: "#2d0a2d", hot: true, keywords: "كوبونات شي إن للمجوهرات، خصم الإكسسوارات، عروض شي إن المجوهرات، كود خصم شي إن XVHPP34" },
  { code: "5P4UNYM", title: "أفضل الماركات", subtitle: "خصم حتى 60%", desc: "🏷️ ماركات عالمية بأسعار محلية! خصم 60% + كوبون 50% للمستخدم الجديد!", url: "https://onelink.shein.com/47/5yt8kvam8vne", image: "/coupons/brands.jpg", emoji: "🏷️", color: "from-cyan-500 to-blue-400", textColor: "#0a1a2d", hot: false, keywords: "كوبونات شي إن للماركات، خصم الماركات العالمية، عروض شي إن الماركات، كود خصم شي إن 5P4UNYM" },
  { code: "832J633", title: "ملابس النساء", subtitle: "تخفيضات تصل إلى 80%", desc: "👚 أكبر تخفيضات نسائية! فساتين، بلوزات، تنانير — كل ما تطمحين إليه بخصم 80%!", url: "https://onelink.shein.com/47/5yt8c7jqgwte", image: "/coupons/women.jpg", emoji: "👚", color: "from-rose-500 to-red-400", textColor: "#2d0a0a", hot: true, keywords: "كوبونات شي إن للنساء، خصم ملابس النساء، عروض شي إن النسائية، كود خصم شي إن 832J633" },
  { code: "42646ZP", title: "مختارات الجمال المُنتقاة", subtitle: "خصم حتى 80%", desc: "🧴 ماركات تجميل كبيرة بأسعار صغيرة! خصم 80% + 50% إضافي للمستخدم الجديد!", url: "https://onelink.shein.com/47/5yt88r8scr39", image: "/coupons/beauty2.jpg", emoji: "🧴", color: "from-lime-500 to-green-400", textColor: "#0a2d0a", hot: false, keywords: "كوبونات شي إن للجمال، خصم ماركات التجميل، عروض شي إن الجمال، كود خصم شي إن 42646ZP" },
  { code: "726473D", title: "أفضل المنتجات المختارة", subtitle: "خصومات لفترة محدودة", desc: "🎁 لا تفوتها! منتجات مختارة بعناية بخصومات حصرية لفترة محدودة فقط!", url: "https://onelink.shein.com/47/5yt85or23sb0", image: "/coupons/selected.jpg", emoji: "🎁", color: "from-sky-500 to-indigo-400", textColor: "#0a0a2d", hot: false, keywords: "كوبونات شي إن المختارة، خصم منتجات مختارة، عروض شي إن المحدودة، كود خصم شي إن 726473D" },
];

// Hero carousel images (use coupon images)
const HERO_IMAGES = COUPONS.slice(0, 8).map(c => c.image);

export default function Home() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [search, setSearch] = useState("");
  const [liveViewers, setLiveViewers] = useState(1247);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [modalCoupon, setModalCoupon] = useState<typeof COUPONS[0] | null>(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const musicGainRef = useRef<GainNode | null>(null);

  // Countdown
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

  // Live viewers
  useEffect(() => {
    const viewerTimer = setInterval(() => setLiveViewers(v => Math.max(800, v + Math.floor(Math.random() * 11) - 5)), 3000);
    return () => clearInterval(viewerTimer);
  }, []);

  // Hero carousel auto-advance
  useEffect(() => {
    const heroTimer = setInterval(() => setHeroSlide(s => (s + 1) % HERO_IMAGES.length), 3000);
    return () => clearInterval(heroTimer);
  }, []);

  // Auto-play Arabic TTS + background music on first user interaction
  const startAudio = () => {
    if (audioPlaying) return;

    // 1. Background music using Web Audio API
    const ctx = new AudioContext();
    audioContextRef.current = ctx;

    // Create ambient music (simple chord progression)
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 2); // gradual volume up
    gainNode.connect(ctx.destination);
    musicGainRef.current = gainNode;

    // Create musical notes (C major arpeggio loop)
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    const playNote = (freq: number, startTime: number, duration: number) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      oscGain.gain.setValueAtTime(0, startTime);
      oscGain.gain.linearRampToValueAtTime(0.5, startTime + 0.1);
      oscGain.gain.linearRampToValueAtTime(0, startTime + duration);
      osc.connect(oscGain);
      oscGain.connect(gainNode);
      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    // Loop the music
    let timeOffset = ctx.currentTime;
    const playLoop = () => {
      if (!audioContextRef.current) return;
      notes.forEach((note, i) => playNote(note, timeOffset + i * 0.5, 0.8));
      playNote(196.00, timeOffset, 2); // bass note G3
      timeOffset += 2;
      setTimeout(playLoop, 1900);
    };
    playLoop();

    // 2. Arabic TTS using Web Speech API
    if ("speechSynthesis" in window) {
      const text = "لا تفوّت العروض الرائعة على شي إن! خصومات تصل إلى تسعين بالمئة على الأطفال والرجال والنساء والتجميل والمجوهرات! انسخ الكود واضغط على الرابط للبدء! وفّر آلاف الريالات اليوم! العرض محدود، سارع الآن!";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ar-SA";
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 1.0;

      // Try to find Arabic voice
      const voices = window.speechSynthesis.getVoices();
      const arabicVoice = voices.find(v => v.lang.startsWith("ar"));
      if (arabicVoice) utterance.voice = arabicVoice;

      utterance.onend = () => {
        // Restart after a pause
        setTimeout(() => {
          if (audioPlaying) {
            window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
          }
        }, 3000);
      };

      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }

    setAudioPlaying(true);
  };

  const stopAudio = () => {
    if (audioContextRef.current) {
      musicGainRef.current?.gain.linearRampToValueAtTime(0, audioContextRef.current.currentTime + 0.5);
      setTimeout(() => audioContextRef.current?.close(), 500);
      audioContextRef.current = null;
    }
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setAudioPlaying(false);
  };

  // Auto-start on first click anywhere
  useEffect(() => {
    const handleFirstClick = () => {
      if (!audioPlaying) startAudio();
      document.removeEventListener("click", handleFirstClick);
    };
    document.addEventListener("click", handleFirstClick);
    return () => document.removeEventListener("click", handleFirstClick);
  }, [audioPlaying]);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredCoupons = search
    ? COUPONS.filter(c => c.title.includes(search) || c.code.includes(search) || c.subtitle.includes(search))
    : COUPONS;

  return (
    <main className="min-h-screen relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FF1744 0%, #FF6B9D 15%, #FFC75F 35%, #00E5FF 55%, #7C4DFF 80%, #FF1744 100%)" }}>
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
        <button onClick={(e) => { e.stopPropagation(); audioPlaying ? stopAudio() : startAudio(); }} className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold border transition-colors ${audioPlaying ? "bg-green-500/40 text-green-300 border-green-400/40" : "bg-black/40 text-yellow-300 border-white/20 animate-pulse"}`}>
          {audioPlaying ? <><Volume2 size={14} className="animate-pulse" /> الصوت يعمل</> : <><VolumeX size={14} /> 🔊 اضغط لتشغيل الصوت</>}
        </button>
      </div>

      {/* Hero with product image carousel */}
      <section className="relative pt-4 pb-6 px-4 z-10 text-center">
        <motion.div initial={{ scale: 0, rotate: -360 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", duration: 1.2 }} className="mb-4">
          <div className="inline-block bg-white/20 backdrop-blur-xl rounded-3xl px-8 py-4 shadow-2xl border-2 border-white/30" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
            <span className="text-4xl sm:text-6xl font-extrabold" style={{ background: "linear-gradient(135deg, #FF1744, #FFC75F, #00E5FF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(2px 2px 0 rgba(0,0,0,0.1))" }}>SHEIN</span>
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl sm:text-6xl font-extrabold mb-3" style={{ background: "linear-gradient(135deg, #FFEB3B, #FFFFFF, #FFEB3B)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(3px 3px 0 rgba(0,0,0,0.15))" }}>
          {COUPONS.length}+ كوبون وخصم حصري على شي إن
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-base sm:text-lg mb-4 font-semibold" style={{ color: "#1a0a0a", textShadow: "0 1px 2px rgba(255,255,255,0.5)" }}>
          🔥 كوبونات شي إن، خصومات شي إن، عروض شي إن — وفّر آلاف الريالات اليوم!
        </motion.p>

        {/* Hero image carousel */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="relative w-full max-w-lg mx-auto h-40 sm:h-56 rounded-3xl overflow-hidden mb-4 shadow-2xl border-4 border-white/30">
          <AnimatePresence mode="wait">
            <motion.div key={heroSlide} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.8 }} className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={HERO_IMAGES[heroSlide]} alt="عروض شي إن" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 right-4 text-white font-bold text-sm" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
                {COUPONS[heroSlide]?.title}
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {HERO_IMAGES.map((_, i) => (
              <button key={i} onClick={() => setHeroSlide(i)} className={`h-1.5 rounded-full transition-all ${i === heroSlide ? "bg-white w-6" : "bg-white/40 w-1.5"}`} />
            ))}
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-md rounded-2xl px-5 py-3 mb-4 border border-white/20">
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
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="🔍 ابحث عن كوبون شي إن..." className="w-full bg-white/80 backdrop-blur-md border-2 border-white/50 rounded-full px-12 py-3 font-semibold focus:outline-none focus:border-pink-400 transition-colors" style={{ color: "#1a0a0a" }} />
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
              <motion.div key={coupon.code} initial={{ opacity: 0, y: 40, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: Math.min(idx * 0.05, 0.4), type: "spring" }} whileHover={{ y: -8, scale: 1.03 }} className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-white/50 cursor-pointer" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }} onClick={() => setModalCoupon(coupon)}>
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={coupon.image} alt={`${coupon.title} - كوبون خصم شي إن`} className="w-full h-full object-cover" loading="lazy" />
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
                    <ShoppingBag size={16} /> تسوّق الآن على SHEIN
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

      {/* SEO content section */}
      <section className="relative py-12 px-4 z-10">
        <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4 text-center">كوبونات وخصومات SHEIN شي إن 2026</h2>
          <div className="space-y-3 text-white/60 text-sm leading-relaxed text-right">
            <p>مرحباً بك في أكبر صفحة كوبونات شي إن SHEIN! نوفّر لك أفضل أكواد الخصم لعام 2026 — خصومات تصل إلى 90% على منتجات شي إن المتنوعة. سواء كنت تبحث عن كوبونات شي إن للأطفال، كوبونات شي إن للرجال، كوبونات شي إن للنساء، كوبونات شي إن للتجميل، كوبونات شي إن للمجوهرات، أو كوبونات شي إن للأحذية — ستجدها كلها هنا!</p>
            <p>أكواد خصم شي إن المتوفرة: 53PP8N5 للأطفال، 2PE6FY4 للرجال، K2S4T26 لأنماط Curve، KU2E656 لـ SHEIN Lifestyle، 799632W للحقائب والأحذية، 832GD55 لأيام الدنيم، CD3X24F لموسم جديد، H433454 لأشهر 500 اختيار، UZ5E5U8 لاكتشافات الجمال، V37EZHZ لـ SHEGLAM، WBEU339 لـ MOTF، XVHPP34 للمجوهرات، 5P4UNYM للماركات، 832J633 لملابس النساء، 42646ZP لمختارات الجمال، 726473D للمنتجات المختارة.</p>
            <p>كيف أستخدم كوبون شي إن؟ ببساطة: انسخ الكود، اضغط على رابط التسوّق، ابحث عن الكود في تطبيق شي إن SHEIN، واستمتع بالخصم الفوري! عروض شي إن، تخفيضات شي إن، كوبونات شي إن — كل ذلك في مكان واحد.</p>
          </div>
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
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-extrabold text-center mb-8" style={{ background: "linear-gradient(135deg, #FFEB3B, #FFFFFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>كيف تستخدم كوبون شي إن؟</motion.h2>
          <div className="space-y-3">
            {[
              { num: "1", title: "اضغط على الكوبون", desc: "اضغط على أي كوبون لرؤية الصور والتفاصيل الكاملة" },
              { num: "2", title: "انسخ كود الخصم", desc: "اضغط على زر «نسخ» لنسخ كود خصم شي إن" },
              { num: "3", title: "اضغط «تسوّق الآن»", desc: "سيفتح تطبيق شي إن SHEIN مباشرة" },
              { num: "4", title: "استمتع بالخصم!", desc: "ابحث عن الكود في تطبيق شي إن واستمتع بالخصم الفوري!" },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-extrabold shrink-0 shadow-lg">{step.num}</div>
                <div><h3 className="font-bold text-white text-sm">{step.title}</h3><p className="text-white/60 text-xs">{step.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-6 px-4 text-center z-10">
        <p className="text-white/50 text-xs">© 2026 صفحة كوبونات SHEIN شي إن • {COUPONS.length} كوبون نشط • عروض محدودة</p>
        <p className="text-white/30 text-[10px] mt-2">كوبونات شي إن، خصومات شي إن، عروض شي إن، أكواد خصم شي إن، كوبون SHEIN</p>
      </footer>

      {/* Coupon detail modal */}
      <AnimatePresence>
        {modalCoupon && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setModalCoupon(null)} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[80] flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 sm:h-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={modalCoupon.image} alt={`${modalCoupon.title} - كوبون خصم شي إن`} className="w-full h-full object-cover" />
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
