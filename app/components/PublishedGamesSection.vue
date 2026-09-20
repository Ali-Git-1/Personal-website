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
                class="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform"
              >
                {{ game.icon }}
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

            <!-- تکنولوژی‌ها و موتور بازی -->
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tech in game.techs"
                :key="tech"
                class="px-2 py-0.5 text-xs font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
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
              target="_blank"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>دریافت بازی</span>
              <span>←</span>
            </a>
            <span v-else class="text-xs text-amber-400/80 font-medium">
              در حال توسعه ⏳
            </span>
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
    title: "بازی فرار نینجا",
    genre: "اکشن / ماجراجویی",
    icon: "🥷",
    description:
      "یک بازی پلتفرمر ۲ بعدی سرعتی با چالش‌ها و مراحل متنوع طراحی شده برای سیستم‌عامل اندروید.",
    techs: ["Unity", "C#", "Android"],
    platform: "Android",
    downloadUrl: "#", // یا آدرس کافه بازار/مایکت
  },
  {
    id: 2,
    title: "مدافع کهکشان",
    genre: "آرکید / فضایی",
    icon: "🚀",
    description:
      "بازی شوتر فضایی کلاسیک با گرافیک رترو مدرن و سیستم امتیازگیری آنلاین.",
    techs: ["Godot / Unity", "Pixel Art"],
    platform: "Android",
    downloadUrl: null, // در حال توسعه
  },
]);
</script>
