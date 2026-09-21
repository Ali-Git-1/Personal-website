<template>
  <section
    id="published-games"
    class="py-20 bg-slate-950 border-t border-slate-800/60"
  >
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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  :src="game.icon"
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
              :href="game.downloadUrl"
              download
              target="_blank"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>دریافت فایل نصبی</span>
              <span>↓</span>
            </a>

            <span v-else class="text-xs text-amber-400/80 font-medium">
              در حال توسعه ⏳
            </span>
            <a
              v-if="game.repoUrl"
              :href="game.repoUrl"
              target="_blank"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors"
            >
              <span>📎 GitHub</span>
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
    downloadUrl: "/downloads/Game-Puzzle.apk", // یا آدرس کافه بازار/مایکت
  },
]);
</script>
