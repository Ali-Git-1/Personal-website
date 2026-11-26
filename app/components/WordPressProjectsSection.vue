<template>
  <section
    id="wordpress-projects"
    class="relative overflow-hidden py-20 bg-slate-900 border-t border-slate-800/60"
  >
    <div class="cyber-space" aria-hidden="true">
      <span
        v-for="(s, i) in streaks"
        :key="i"
        class="streak"
        :style="{
          '--top': s.top,
          '--delay': s.delay,
          '--duration': s.duration,
        }"
      ></span>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-4"
        >
          <span>🌐</span>
          <span>WordPress & CMS</span>
        </div>
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          پروژه‌های وردپرس
        </h2>
        <p class="mt-4 text-slate-400 text-sm sm:text-base">
          طراحی، شخصی‌سازی قالب و راه‌اندازی سایت‌های اختصاصی بر پایه وردپرس
        </p>
      </div>

      <div class="flex justify-center">
        <div
          v-for="site in sites"
          :key="site.id"
          class="w-full max-w-md group relative bg-slate-950/70 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] flex flex-col justify-between"
        >
          <div>
            <div class="flex items-start justify-between mb-5">
              <div
                class="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform"
              >
                {{ site.icon }}
              </div>

              <span
                class="px-2.5 py-1 text-xs font-medium rounded-full border"
                :class="
                  site.isOnline
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                "
              >
                {{ site.statusText }}
              </span>
            </div>

            <h3
              class="text-xl font-bold text-white group-hover:text-sky-400 transition-colors"
            >
              {{ site.title }}
            </h3>

            <p class="mt-3 text-slate-400 text-sm leading-relaxed">
              {{ site.description }}
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="feature in site.features"
                :key="feature"
                class="px-2 py-0.5 text-xs font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
              >
                {{ feature }}
              </span>
            </div>
          </div>

          <div
            class="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs"
          >
            <span class="text-slate-500">نقش: {{ site.role }}</span>

            <a
              v-if="site.isOnline && site.url"
              :href="site.url"
              target="_blank"
              class="inline-flex items-center gap-1.5 font-semibold text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span>مشاهده سایت</span>
              <span>←</span>
            </a>
            <span v-else class="text-slate-400 flex items-center gap-1">
              <span>در حال راه‌اندازی مجدد</span>
              <span class="inline-block animate-spin">⚙️</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const streaks = [
  { top: "5%", delay: "0s", duration: "5s" },
  { top: "25%", delay: "1.8s", duration: "6.5s" },
  { top: "45%", delay: "3.2s", duration: "5.5s" },
  { top: "65%", delay: "0.9s", duration: "7s" },
  { top: "85%", delay: "4s", duration: "6s" },
];

const sites = ref([
  {
    id: 1,
    title: "وب‌سایت ایران شعر (BookSher)",
    icon: "📚",
    description:
      "مرجع شعر و متون ادبی فارسی؛ طراحی و بهینه‌سازی شده با وردپرس با ظاهر واکنش‌گرا و سئوی اختصاصی.",
    features: ["WordPress", "SEO", "Responsive", "UI/UX"],
    role: "طراح و توسعه‌دهنده",
    isOnline: true,
    statusText: "آنلاین و فعال",
    url: "https://booksher.ir",
  },
]);
</script>

<style scoped>
.cyber-space {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.streak {
  position: absolute;
  top: var(--top);
  left: -30%;
  width: 220px;
  height: 2px;
  border-radius: 9999px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(0, 200, 255, 0.9),
    transparent
  );
  box-shadow: 0 0 8px rgba(0, 180, 255, 0.6);
  opacity: 0;
  will-change: transform, opacity;
  animation: streak-move var(--duration) linear var(--delay) infinite;
}

@keyframes streak-move {
  0% {
    transform: rotate(30deg) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: rotate(30deg) translateX(180vw);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .streak {
    animation: none;
    display: none;
  }
}

.glow-static {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 60% 40% at 50% 50%,
    rgba(0, 160, 255, 0.18),
    transparent 70%
  );
}

.scan-beam {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(0, 180, 255, 0.7),
    transparent
  );
  box-shadow: 0 0 12px rgba(0, 180, 255, 0.5);
  will-change: transform;
  animation: scan 6s linear infinite;
}

@keyframes scan {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100vh);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scan-beam {
    animation: none;
    display: none;
  }
}
</style>
