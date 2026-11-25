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
        class="order-1 text-center text-3xl sm:text-4xl lg:order-none lg:col-start-2 lg:row-start-1 lg:text-5xl font-black text-white leading-tight"
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
          {{ t("about.intro.greeting") }}
          <span
            :class="[
              'bg-clip-text text-transparent',
              lang === 'fa' ? 'bg-gradient-to-l' : 'bg-gradient-to-r',
              'from-emerald-400 to-cyan-400',
            ]"
          >
            {{ t("about.intro.role") }}
          </span>
        </h1>

        <p class="mt-6 mx-auto text-base text-slate-400 leading-loose max-w-xl">
          {{ t("about.intro.paragraph") }}
        </p>
      </div>

      <div
        class="order-4 flex flex-col gap-4 lg:order-none lg:col-start-2 lg:row-start-3"
      >
        <div
          class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/15 sm:grid-cols-4"
          role="tablist"
        >
          <button
            v-for="(stat, index) in stats"
            :key="t(stat.labelKey)"
            type="button"
            role="tab"
            :aria-selected="selectedIndex === index"
            :class="[
              'group flex items-center gap-3 p-4 text-start transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60',
              selectedIndex === index
                ? 'bg-cyan-500/15'
                : 'bg-slate-950/90 hover:bg-cyan-500/5',
            ]"
            @click="selectStat(index)"
          >
            <span
              :class="[
                'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-110',
                selectedIndex === index
                  ? 'border-cyan-300/50 bg-cyan-400/20 text-cyan-200'
                  : 'border-white/10 bg-slate-900 text-cyan-300',
              ]"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path :d="stat.icon" />
              </svg>
            </span>
            <span class="flex flex-col">
              <span class="text-lg font-black text-white">{{
                stat.value
              }}</span>
              <span class="text-xs text-slate-400">{{ t(stat.labelKey) }}</span>
            </span>
          </button>
        </div>

        <Transition name="stat-fade" mode="out-in">
          <div
            :key="selectedIndex"
            class="rounded-2xl border border-cyan-400/15 bg-slate-950/70 p-4 text-start backdrop-blur-sm"
          >
            <p class="text-sm leading-7 text-slate-300">
              {{ t(selectedStat.detailKey) }}
            </p>

            <div v-if="selectedStat.progress !== null" class="mt-3">
              <div
                class="mb-1 flex items-center justify-between text-xs text-slate-400"
              >
                <span>{{ selectedStat.progress }}٪</span>
                <span>{{ t("about.progress") }}</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  class="h-full rounded-full bg-gradient-to-l from-cyan-400 to-emerald-400 transition-all duration-700"
                  :style="{ width: selectedStat.progress + '%' }"
                ></div>
              </div>
            </div>

            <div class="mt-3 flex flex-wrap justify-start gap-2">
              <span
                v-for="tag in selectedStat.tags"
                :key="tag"
                dir="ltr"
                class="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-200"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </Transition>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            class="group inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-cyan-400 to-emerald-400 px-7 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-400/30"
          >
            {{ t("about.cta.projects") }}
            <svg
              class="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14 M11 18l-6-6 6-6" />
            </svg>
          </a>

          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-4 py-3 font-semibold text-cyan-300 underline-offset-8 transition-colors duration-300 hover:text-cyan-200 hover:underline"
          >
            {{ t("about.cta.contact") }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const imageError = ref(false);
const t = inject("t");
const lang = inject("lang");

useSeoMeta({
  title: "علی عرب پور | Ali Arabpour - برنامه‌نویس فرانت‌اند Vue و Nuxt",
  description:
    "پورتفولیو و نمونه کارهای علی عرب پور (Ali Arabpour)، توسعه‌دهنده فرانت‌اند و وب مسلط به Vue.js ،Nuxt و Tailwind CSS.",
  ogTitle: "علی عرب پور | Ali Arabpour",
  ogDescription: "توسعه‌دهنده فرانت‌اند مسلط به اکوسیستم Vue و جاوااسکریپت",
});

const codeRainCanvas = ref(null);
let stopCodeRain = null;

const selectedIndex = ref(1);

const stats = computed(() => [
  {
    value: "Junior",
    labelKey: "about.stats.frontend.label",
    detailKey: "about.stats.frontend.detail",
    icon: "M16 18l6-6-6-6 M8 6l-6 6 6 6",
    tags: ["Vue", "Nuxt", "Tailwind"],
    progress: null,
  },
  {
    value: "Full-Stack",
    labelKey: "about.stats.fullstack.label",
    detailKey: "about.stats.fullstack.detail",
    icon: "M3 5h18v6H3z M3 13h18v6H3z M7 8h.01 M7 16h.01",
    tags: ["Node.js", "API", "SQL"],
    progress: 35,
  },
  {
    value: "5+",
    labelKey: "about.stats.projects.label",
    detailKey: "about.stats.projects.detail",
    icon: "M3 7h18v12H3z M9 7V5h6v2 M3 12h18",
    tags: ["Portfolio", "Landing", "WordPress"],
    progress: null,
  },
  {
    value: "2+",
    labelKey: "about.stats.years.label",
    detailKey: "about.stats.years.detail",
    icon: "M12 7v5l3 2 M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
    tags: ["HTML", "CSS", "JavaScript"],
    progress: null,
  },
]);

const selectedStat = computed(() => stats.value[selectedIndex.value]);

const selectStat = (index) => {
  selectedIndex.value = index;
};

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
});

onUnmounted(() => {
  stopCodeRain?.();
});
</script>

<style>
.stat-fade-enter-active,
.stat-fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.stat-fade-enter-from,
.stat-fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

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
