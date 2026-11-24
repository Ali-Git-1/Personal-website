<template>
  <section id="about" class="relative py-20 md:py-32 overflow-hidden">
    <canvas
      ref="codeRainCanvas"
      class="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
      aria-hidden="true"
    ></canvas>

    <div class="scan-line pointer-events-none"></div>

    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none"
    ></div>
    <div
      class="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 sm:px-6 lg:grid-cols-[320px_1fr] lg:grid-rows-[auto_auto_1fr] lg:px-8"
    >
      <AboutProfileCard
        class="order-3 lg:order-none lg:col-start-1 lg:row-span-3 lg:row-start-1"
      />

      <p
        class="order-1 text-right text-3xl sm:text-4xl lg:order-none lg:col-start-2 lg:row-start-1 lg:text-5xl font-black text-white leading-tight"
      >
        <span class="glitch-wrapper block" dir="ltr" data-text="Ali Arabpour">
          <span class="glitch-text text-emerald-400">Ali Arabpour</span>
        </span>
      </p>

      <div
        class="relative rounded-2xl border border-emerald-500/20 bg-slate-900/60 backdrop-blur-sm p-6 sm:p-8 shadow-xl shadow-emerald-500/5 order-2 text-center lg:order-none lg:col-start-2 lg:row-start-2"
      >
        <h1
          class="text-base min-[360px]:text-lg sm:text-4xl lg:text-4xl font-black text-white whitespace-nowrap sm:whitespace-normal"
        >
          سلام، علی هستم؛
          <span
            class="bg-gradient-to-l from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            توسعه‌دهنده وب
          </span>
        </h1>

        <p class="mt-6 mx-auto text-base text-slate-400 leading-loose max-w-xl">
          من به طراحی و توسعه وب‌سایت‌هایی علاقه دارم که در کنار ظاهر مدرن و
          جذاب، عملکرد مناسبی داشته باشند و تجربه کاربری خوبی ارائه دهند. تمرکز
          اصلی من روی توسعه رابط‌های کاربری با JavaScript، Vue.js و Nuxt است و
          تلاش می‌کنم با استفاده از ابزارهایی مانند Tailwind CSS، رابط‌هایی
          واکنش‌گرا، منظم و قابل نگهداری ایجاد کنم. در مسیر توسعه مهارت‌هایم،
          صرفاً به پیاده‌سازی ظاهر صفحات اکتفا نمی‌کنم؛ بلکه سعی دارم ساختار
          کدها، نحوه ارتباط بخش‌های مختلف برنامه و دلیل استفاده از هر ابزار را
          به‌خوبی درک کنم. یادگیری مستمر، حل مسئله و بهبود کیفیت پروژه‌ها از
          مهم‌ترین اولویت‌های من در مسیر حرفه‌ای برنامه‌نویسی هستند.
        </p>
      </div>

      <div
        class="order-4 flex flex-wrap justify-center gap-4 lg:order-none lg:col-start-2 lg:row-start-3"
      >
        <a
          href="#projects"
          class="px-6 py-3 bg-gradient-to-l from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300"
        >
          مشاهده نمونه‌کارها
        </a>
        <a
          href="#contact"
          class="px-6 py-3 bg-transparent hover:bg-emerald-500/10 text-emerald-300 font-semibold rounded-xl border border-emerald-500/40 hover:border-emerald-400 transition-all duration-300"
        >
          ارتباط با من
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const imageError = ref(false);

useSeoMeta({
  title: "علی عرب پور | Ali Arabpour - برنامه‌نویس فرانت‌اند Vue و Nuxt",
  description:
    "پورتفولیو و نمونه کارهای علی عرب پور (Ali Arabpour)، توسعه‌دهنده فرانت‌اند و وب مسلط به Vue.js ،Nuxt و Tailwind CSS.",
  ogTitle: "علی عرب پور | Ali Arabpour",
  ogDescription: "توسعه‌دهنده فرانت‌اند مسلط به اکوسیستم Vue و جاوااسکریپت",
});

const codeRainCanvas = ref(null);
let stopCodeRain = null;

function startCodeRain(canvas) {
  const ctx = canvas.getContext("2d");
  const symbols = [
    "{",
    "}",
    "(",
    ")",
    "[",
    "]",
    "<",
    ">",
    "=>",
    "==",
    "!=",
    "&&",
    "||",
    "++",
    "--",
    "+=",
    "?:",
    "??",
    "/",
    "\\",
    ";",
    ":",
    "$",
    "#",
    "@",
    "*",
    "%",
    "~",
    "_",
    "//",
    "0",
    "1",
    "01",
    "10",
    "fn",
    "if",
    "do",
    "OK",
  ];

  const fontSize = 22;
  const trailLength = 50;

  let columns = [];
  let width = 0;
  let height = 0;
  let frameId = 0;
  let lastTime = 0;

  const randomSymbol = () =>
    symbols[Math.floor(Math.random() * symbols.length)];

  function createColumn() {
    return {
      y: -Math.random() * height,
      speed: 70 + Math.random() * 90,
      cell: 0,
      chars: Array.from({ length: trailLength }, randomSymbol),
    };
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const newWidth = canvas.offsetWidth;
    const newHeight = canvas.offsetHeight;

    if (
      newWidth === width &&
      newHeight === height &&
      canvas.width === newWidth * dpr
    )
      return;

    width = newWidth;
    height = newHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = `${fontSize}px monospace`;

    const count = Math.floor(width / fontSize);
    if (count > columns.length) {
      while (columns.length < count) columns.push(createColumn());
    } else {
      columns.length = count;
    }
  }

  function draw(time) {
    frameId = requestAnimationFrame(draw);
    const dt = Math.min((time - lastTime) / 1000, 0.05);
    lastTime = time;

    ctx.clearRect(0, 0, width, height);

    columns.forEach((col, i) => {
      col.y += col.speed * dt;

      const cell = Math.floor(col.y / fontSize);
      if (cell !== col.cell) {
        col.chars.unshift(randomSymbol());
        col.chars.pop();
        col.cell = cell;
      }

      for (let k = 0; k < trailLength; k++) {
        const y = col.y - k * fontSize;
        if (y < -fontSize || y > height) continue;
        ctx.globalAlpha = (1 - k / trailLength) ** 2;
        ctx.fillStyle = k === 0 ? "#6ee7b7" : "#10b981";
        ctx.fillText(col.chars[k], i * fontSize, y);
      }

      if (col.y - trailLength * fontSize > height) {
        Object.assign(col, createColumn(), {
          y: -Math.random() * height * 0.5,
        });
      }
    });

    ctx.globalAlpha = 1;
  }

  resize();
  window.addEventListener("resize", resize);
  frameId = requestAnimationFrame(draw);

  return () => {
    cancelAnimationFrame(frameId);
    window.removeEventListener("resize", resize);
  };
}

const onImageError = () => {
  imageError.value = true;
};
onMounted(() => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (codeRainCanvas.value && !reduceMotion) {
    stopCodeRain = startCodeRain(codeRainCanvas.value);
  }

  onUnmounted(() => {
    stopCodeRain?.();
  });
});
</script>

<style>
@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-float-slow {
    animation: none;
  }
}

@keyframes blob-float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(60px, -60px) scale(1.25);
  }
  66% {
    transform: translate(-40px, 40px) scale(0.9);
  }
}
.animate-blob {
  animation: blob-float 12s infinite ease-in-out;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes scanline {
  0% {
    top: -10%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: 110%;
    opacity: 0;
  }
}
.scan-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(52, 211, 153, 0.4),
    transparent
  );
  animation: scanline 8s linear infinite;
}

.glitch-wrapper {
  position: relative;
  display: inline-block;
  font-family: "Courier New", monospace;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.glitch-wrapper::before,
.glitch-wrapper::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  opacity: 0;
}

.glitch-wrapper::before {
  color: #f43f5e;
  animation: glitch-anim-1 3s infinite linear alternate-reverse;
}

.glitch-wrapper::after {
  color: #22d3ee;
  animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
}

.glitch-text {
  color: #34d399;
  text-shadow: 0 0 12px rgba(52, 211, 153, 0.6);
}

@keyframes glitch-anim-1 {
  0%,
  88%,
  100% {
    opacity: 0;
    transform: translate(0);
  }
  90% {
    opacity: 0.8;
    transform: translate(-3px, 1px);
    clip-path: inset(20% 0 40% 0);
  }
  93% {
    opacity: 0.8;
    transform: translate(3px, -1px);
    clip-path: inset(60% 0 10% 0);
  }
  96% {
    opacity: 0.8;
    transform: translate(-2px, 0);
    clip-path: inset(0 0 70% 0);
  }
}

@keyframes glitch-anim-2 {
  0%,
  85%,
  100% {
    opacity: 0;
    transform: translate(0);
  }
  87% {
    opacity: 0.7;
    transform: translate(3px, -1px);
    clip-path: inset(40% 0 30% 0);
  }
  91% {
    opacity: 0.7;
    transform: translate(-3px, 1px);
    clip-path: inset(10% 0 60% 0);
  }
  95% {
    opacity: 0.7;
    transform: translate(2px, 0);
    clip-path: inset(70% 0 5% 0);
  }
}
</style>
