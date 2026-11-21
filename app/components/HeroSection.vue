<template>
  <section id="about" class="relative py-20 md:py-32 overflow-hidden">
    <canvas
      ref="codeRainCanvas"
      class="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
      aria-hidden="true"
    ></canvas>

    <div
      class="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none"
    ></div>

    <div class="scan-line pointer-events-none"></div>

    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_50%)]"
    ></div>
    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div class="text-right">
        <span
          class="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
        >
          آماده برای پروژه‌های جدید
        </span>
        <h1
          class="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
        >
          <span
            class="glitch-wrapper block mb-3"
            dir="ltr"
            data-text="Ali Arabpour"
          >
            <span class="glitch-text text-emerald-400">Ali Arabpour</span>
          </span>
        </h1>
        <h1
          class="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
        >
          <span>سلام، من </span>
          <span
            class="bg-gradient-to-l from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            برنامه‌نویس فرانت‌اند
          </span>
          <span> هستم</span>
        </h1>

        <p class="mt-6 text-lg text-slate-400 leading-relaxed h-16">
          {{ dynamicText }}<span class="animate-pulse text-emerald-400">|</span>
        </p>

        <div class="mt-10 flex flex-wrap gap-4 justify-start">
          <a
            href="#projects"
            class="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-lg transition-all duration-300 shadow-lg shadow-emerald-500/10"
          >
            مشاهده نمونه‌کارها
          </a>
          <a
            href="#contact"
            class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg border border-slate-700 transition-all duration-300"
          >
            ارتباط با من
          </a>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="relative group">
          <div
            class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"
          ></div>

          <div
            class="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden bg-slate-900 border border-emerald-500/30 shadow-[0_0_60px_rgba(16,185,129,0.25)] flex items-center justify-center"
          >
            <img
              src="/me.jpg"
              alt="My Profile"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              @error="onImageError"
              v-if="!imageError"
            />

            <div v-else class="text-center p-6">
              <div
                class="w-24 h-24 mx-auto rounded-full bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center text-3xl mb-4 text-emerald-400"
              >
                👨‍💻
              </div>
              <p class="text-xs text-slate-400">
                تصویرت را با نام
                <code class="text-emerald-400 bg-slate-800 px-1 py-0.5 rounded"
                  >me.jpg</code
                >
                داخل پوشه
                <code class="text-cyan-400 bg-slate-800 px-1 py-0.5 rounded"
                  >public</code
                >
                قرار بده.
              </p>
            </div>
          </div>
        </div>
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

const dynamicText = ref("");
const roles = [
  "توسعه‌دهنده وب با تمرکز بر رابط‌های کاربری چشم‌نواز",
  "برنامه‌نویس متخصص با استفاده از Vue 3 و Nuxt",
  " علاقه‌مند به مشارکت تیمی و دنیای متن‌باز (GitHub)",
  "عاشق کدهای بهینه و با کارایی بالا",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeWriter = () => {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    dynamicText.value = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    dynamicText.value = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 30 : 60;

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500;
  }

  setTimeout(typeWriter, typeSpeed);
};
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
  typeWriter();
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
