<template>
  <section
    id="published-games"
    class="py-20 bg-slate-950 border-t border-slate-800/60 relative overflow-hidden"
  >
    <!-- 🎮 Cyber Gaming Dynamic Background -->
    <div class="pointer-events-none absolute inset-0 z-0">
      <!-- افکت خطوط نوری و گرید گیمینگ -->
      <div class="cyber-grid absolute inset-0 opacity-20"></div>
      <div class="scanlines absolute inset-0 opacity-15"></div>

      <!-- گوی‌های نوری پالس‌زن سایبرپانک -->
      <div class="game-orb game-orb-purple"></div>
      <div class="game-orb game-orb-cyan"></div>
      <div class="game-orb game-orb-rose"></div>
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- عنوان بخش -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4"
        >
          <span>🎮</span>
          <span>Game Development</span>
        </div>
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          بازی‌های توسعه داده شده
        </h2>
        <p class="mt-4 text-slate-400 text-sm sm:text-base">
          عناوین بازی‌های ویدیویی طراحی و توسعه یافته برای پلتفرم موبایل
        </p>
      </div>

      <!-- گرید بازی‌ها -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="game in games"
          :key="game.id"
          class="group relative bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col justify-between"
        >
          <!-- بخش بالا: آیکون + اطلاعات اصلی -->
          <div>
            <div class="flex items-start justify-between mb-5">
              <div
                class="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform overflow-hidden"
              >
                <!-- اگر عکس بود -->
                <img
                  v-if="game.icon.startsWith('/')"
                  :src="`${useRuntimeConfig().app.baseURL.replace(/\/$/, '')}${game.icon}`"
                  :alt="game.title"
                  class="w-full h-full object-cover"
                />
                <!-- اگر ایموجی معمولی بود -->
                <span v-else>{{ game.icon }}</span>
              </div>

              <span
                class="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-800 text-purple-300 border border-purple-500/20"
              >
                {{ game.genre }}
              </span>
            </div>

            <h3
              class="text-xl font-bold text-white group-hover:text-purple-400 transition-colors"
            >
              {{ game.title }}
            </h3>

            <p class="mt-3 text-slate-400 text-sm leading-relaxed">
              {{ game.description }}
            </p>

            <!-- تکنولوژی‌ها و ابزارها با چیدمان منعطف -->
            <div class="mt-4 flex flex-wrap gap-1.5 items-center">
              <span
                v-for="tech in game.techs"
                :key="tech"
                class="px-2 py-0.5 text-[11px] font-mono rounded-md bg-purple-950/40 text-purple-200 border border-purple-500/20 whitespace-nowrap leading-relaxed hover:border-purple-400/40 transition-colors"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- بخش پایین: دکمه دانلود یا وضعیت -->
          <div
            class="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between"
          >
            <span class="text-xs text-slate-500"
              >پلتفرم: {{ game.platform }}</span
            >

            <a
              v-if="game.downloadUrl"
              :href="`${useRuntimeConfig().app.baseURL.replace(/\/$/, '')}${game.downloadUrl}`"
              download
              target="_blank"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>دریافت فایل نصبی↓</span>
            </a>

            <span v-else class="text-xs text-amber-400/80 font-medium">
              در حال توسعه ⏳
            </span>
            <!-- لینک گیت‌هاب با آیکون -->
            <a
              v-if="game.repoUrl"
              :href="game.repoUrl"
              target="_blank"
              class="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg text-sm transition-all"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57V21.09c-3.33.72-4.035-1.605-4.035-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.095-.75.09-.735.09-.735 1.215.09 1.845 1.245 1.845 1.245 1.08 1.83 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22v3.285c0 .315.225.675.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
              <span>GitHub</span>
            </a>
            <!-- لینک مایکت با آیکون -->
            <a
              v-if="game.myketUrl"
              :href="game.myketUrl"
              target="_blank"
              class="flex items-center gap-2 bg-sky-900/30 hover:bg-sky-900/50 text-sky-400 border border-sky-900/50 px-3 py-1.5 rounded-lg text-sm transition-all"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>مایکت</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const games = ref([
  {
    id: 1,
    title: "پازل",
    genre: "فکری",
    icon: "/icon.png",
    description:
      "یک بازی جذاب و باحال با عکس ها و استایل ها و مراحل متنوع طراحی شده برای سیستم‌عامل اندروید.",
    repoUrl: "https://github.com/Ali-Git-1/Puzzle-game.git",
    techs: [
      "HTML",
      "CSS",
      "javascript",
      "vue.js",
      "Bootstrap",
      "Android Studio",
    ],
    platform: "Android",
    downloadUrl: "/downloads/Game-Puzzle.apk",
    myketUrl: "https://myket.ir/app/com.ali.puzzle",
  },
]);
</script>

<style scoped>
/* 🎮 Cyber Grid & Scanline Effects */
.cyber-grid {
  background-image:
    linear-gradient(to right, rgba(139, 92, 246, 0.2) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(139, 92, 246, 0.2) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridSlide 12s linear infinite;
  mask-image: radial-gradient(
    ellipse 80% 60% at 50% 50%,
    #000 60%,
    transparent 100%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 80% 60% at 50% 50%,
    #000 60%,
    transparent 100%
  );
}

.scanlines {
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.4) 51%
  );
  background-size: 100% 4px;
}

/* 🕹️ Pulsing Gaming Orbs */
.game-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(75px);
  will-change: transform, opacity;
}

.game-orb-purple {
  width: 480px;
  height: 480px;
  top: -10%;
  left: 15%;
  background: radial-gradient(
    circle,
    rgba(168, 85, 247, 0.55) 0%,
    transparent 70%
  );
  animation: cyberPulse 6s ease-in-out infinite alternate;
}

.game-orb-cyan {
  width: 420px;
  height: 420px;
  bottom: 5%;
  right: 10%;
  background: radial-gradient(
    circle,
    rgba(6, 182, 212, 0.5) 0%,
    transparent 70%
  );
  animation: cyberDrift 8s ease-in-out infinite alternate;
}

.game-orb-rose {
  width: 350px;
  height: 350px;
  top: 45%;
  left: 55%;
  background: radial-gradient(
    circle,
    rgba(244, 63, 94, 0.4) 0%,
    transparent 75%
  );
  animation: cyberPulse 7s ease-in-out infinite alternate-reverse;
}

/* ⚡ Keyframes for Smooth Animation */
@keyframes gridSlide {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

@keyframes cyberPulse {
  0% {
    transform: scale(0.85) translate(-40px, -30px);
    opacity: 0.35;
  }
  50% {
    opacity: 0.75;
  }
  100% {
    transform: scale(1.3) translate(60px, 40px);
    opacity: 0.55;
  }
}

@keyframes cyberDrift {
  0% {
    transform: scale(1) translate(0, 0);
    opacity: 0.4;
  }
  100% {
    transform: scale(1.25) translate(-80px, -60px);
    opacity: 0.75;
  }
}
</style>
