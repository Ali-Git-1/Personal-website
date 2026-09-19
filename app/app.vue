<template>
  <div>
    <!-- ۱. صفحه پیش‌نمایش بارگذاری اولیه (Intro / Preloader) -->
    <Transition name="fade-out">
      <div
        v-if="isLoading"
        class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100 font-mono select-none px-4"
      >
        <!-- آیکون و پس‌زمینه نوری -->
        <div class="relative flex flex-col items-center">
          <div
            class="w-20 h-20 mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-3xl shadow-[0_0_50px_rgba(16,185,129,0.3)] animate-pulse"
          >
            ⚡
          </div>

          <div
            class="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold mb-2 flex items-center gap-2"
          >
            <span
              class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"
            ></span>
            در حال راه‌اندازی سیستم...
          </div>

          <p class="text-slate-400 text-xs sm:text-sm h-6 text-center">
            {{ currentStatus }}
          </p>

          <!-- نوار پیشرفت (Progress Bar) -->
          <div
            class="w-64 sm:w-80 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-6 border border-slate-700/50"
          >
            <div
              class="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-150 ease-out"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>

          <!-- درصد پیشرفت -->
          <div class="text-xs text-slate-500 mt-3 font-semibold">
            [ {{ progress }}% ]
          </div>
        </div>
      </div>
    </Transition>

    <!-- ۲. محتوای اصلی سایت -->
    <div
      class="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-900"
    >
      <!-- هدر / ناوبری (Header) -->
      <header
        class="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800"
      >
        <div
          class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        >
          <div
            class="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            &lt;NinjaCoder /&gt;
          </div>
          <nav
            class="hidden md:flex space-x-8 space-x-reverse text-sm font-medium"
          >
            <a
              href="#about"
              class="text-slate-300 hover:text-emerald-400 transition-colors"
              >درباره من</a
            >
            <a
              href="#skills"
              class="text-slate-300 hover:text-emerald-400 transition-colors"
              >مهارت‌ها</a
            >
            <a
              href="#projects"
              class="text-slate-300 hover:text-emerald-400 transition-colors"
              >نمونه‌کارها</a
            >
            <a
              href="#contact"
              class="text-slate-300 hover:text-emerald-400 transition-colors"
              >تماس با من</a
            >
          </nav>
          <button
            class="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
          >
            دریافت رزومه
          </button>
        </div>
      </header>

      <HeroSection />

      <SkillsSection />

      <!-- بخش پروژه‌ها (Projects) -->
      <section id="projects" class="py-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              نمونه‌کارهای منتخب
            </h2>
            <p class="mt-4 text-slate-400">
              پروژه‌هایی که صفر تا صد پیاده‌سازی شده‌اند.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="project in projects"
              :key="project.title"
              class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col h-full"
            >
              <div
                class="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300"
              >
                {{ project.icon }}
              </div>
              <div class="p-6 flex flex-col flex-grow text-right">
                <h3
                  class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors"
                >
                  {{ project.title }}
                </h3>
                <p
                  class="mt-3 text-slate-400 text-sm leading-relaxed flex-grow"
                >
                  {{ project.description }}
                </p>
                <div class="mt-6 flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.techs"
                    :key="tech"
                    class="px-2.5 py-1 text-xs font-medium rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SkillsSection from "./components/SkillsSection.vue";
import HeroSection from "./components/HeroSection.vue";
import FooterSection from "./components/FooterSection.vue";

// متغیرهای لودینگ
const isLoading = ref(true);
const progress = ref(0);
const currentStatus = ref("Connecting to core modules...");

// -----------------------------

// انیمیشن و شبیه‌سازی لودینگ هوشمند در اولین لود صفحه
onMounted(() => {
  const steps = [
    { threshold: 25, status: "بارگذاری پیکربندی و محیط..." },
    {
      threshold: 55,
      status: "گردآوری دارایی‌ها و استایل‌دهی به کامپوننت‌ها...",
    },
    { threshold: 85, status: "راستی‌آزمایی داده‌های سبد سرمایه‌گذاری..." },
    { threshold: 100, status: "سیستم آماده است. خوش آمدید!" },
  ];

  const timer = setInterval(() => {
    if (progress.value < 100) {
      // افزایش رندوم بین ۳ تا ۷ درصد برای طبیعی‌تر شدن
      progress.value += Math.floor(Math.random() * 5) + 3;
      if (progress.value > 100) progress.value = 100;

      const step = steps.find((s) => progress.value <= s.threshold);
      if (step) {
        currentStatus.value = step.status;
      }
    } else {
      clearInterval(timer);
      setTimeout(() => {
        isLoading.value = false;
      }, 800); // مکث کوتاه برای دیدن ۱۰۰٪
    }
  }, 100);
});

const projects = ref([
  {
    title: "سیستم فروشگاهی آنلاین",
    description:
      "یک برنامه تحت وب فروشگاهی پیشرفته با قابلیت فیلترینگ محصولات، سبد خرید پویا و هماهنگی کامل با موبایل.",
    icon: "🛒",
    techs: ["Nuxt 3", "Tailwind", "Pinia"],
  },
  {
    title: "داشبورد مدیریتی ادمین",
    description:
      "داشبوردی زیبا برای نمایش آمار و ارقام، نمودارهای تحلیلی و مدیریت کاربران سیستم.",
    icon: "📊",
    techs: ["Vue 3", "Chart.js", "Tailwind"],
  },
  {
    title: "اپلیکیشن مدیریت وظایف",
    description:
      "ابزاری سبک و سریع برای دسته‌بندی و زمان‌بندی کارهای روزانه به همراه ذخیره‌سازی محلی.",
    icon: "✅",
    techs: ["Nuxt 3", "LocalStorage"],
  },
]);
</script>

<style>
html {
  direction: rtl;
  scroll-behavior: smooth;
}

/* انیمیشن خروج نرم پری‌لودر */
.fade-out-leave-active {
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
.fade-out-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
