<template>
  <div
    class="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-900"
  >
    <!-- هدر / ناوبری (Header) -->
    <header
      class="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800"
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

    <!-- بخش معرفی (Hero Section) -->
    <section id="about" class="relative py-20 md:py-32 overflow-hidden">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_50%)]"
      ></div>
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <!-- متن معرفی -->
        <div class="text-right">
          <span
            class="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
          >
            آماده برای پروژه‌های جدید
          </span>
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-6 leading-tight"
          >
            سلام، من
            <span
              class="bg-gradient-to-l from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
              >برنامه‌نویس فرانت‌اند</span
            >
            هستم
          </h1>
          <p class="mt-6 text-lg text-slate-400 leading-relaxed">
            من به خلق رابط‌های کاربری مدرن، بهینه و تعاملی با استفاده از Vue.js
            و Nuxt علاقمند هستم. تمرکز من بر نوشتن کدهای تمیز و ارائه بهترین
            تجربه کاربری (UX) است.
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
              گفتگو با من
            </a>
          </div>
        </div>

        <!-- تصویر یا آواتار نمایشی -->
        <div class="flex justify-center">
          <div
            class="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 p-4"
          >
            <div
              class="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 rounded-2xl"
            ></div>
            <!-- لایه‌سازی برای شبیه‌سازی کدهای برنامه‌نویسی داخل یک باکس زیباتر -->
            <div
              class="w-full h-full rounded-xl bg-slate-950 p-6 font-mono text-xs text-emerald-400 flex flex-col justify-between border border-slate-800 shadow-2xl"
            >
              <div>
                <span class="text-pink-500">const</span> developer = {
                <div class="mr-4 mt-1">
                  <span class="text-blue-400">name</span>:
                  <span class="text-yellow-300">'برنامه‌نویس نینجا'</span>,
                </div>
                <div class="mr-4">
                  <span class="text-blue-400">role</span>:
                  <span class="text-yellow-300">'Frontend Developer'</span>,
                </div>
                <div class="mr-4">
                  <span class="text-blue-400">skills</span>: [<span
                    class="text-yellow-300"
                    >'Vue 3'</span
                  >, <span class="text-yellow-300">'Nuxt 3'</span>,
                  <span class="text-yellow-300">'Tailwind'</span>],
                </div>
                <div class="mr-4">
                  <span class="text-blue-400">passionateAbout</span>:
                  <span class="text-yellow-300"
                    >'Clean Code & Performance'</span
                  >
                </div>
                };
              </div>
              <div class="text-slate-500">
                // کدنویسی با عشق و فنجانی قهوه ☕
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- بخش مهارت‌ها (Skills) -->
    <section
      id="skills"
      class="py-20 bg-slate-950/40 border-y border-slate-800"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            مهارت‌های فنی من
          </h2>
          <p class="mt-4 text-slate-400">
            ابزارها و تکنولوژی‌هایی که روزانه برای توسعه پروژه‌ها از آن‌ها
            استفاده می‌کنم.
          </p>
        </div>
        <div
          class="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center"
        >
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="p-6 bg-slate-900 border border-slate-800/80 rounded-xl hover:border-emerald-500/50 transition-all duration-300"
          >
            <div class="text-3xl mb-3">{{ skill.icon }}</div>
            <div class="font-semibold text-slate-200 text-sm">
              {{ skill.name }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- بخش نمونه‌کارها (Projects) -->
    <section id="projects" class="py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            آخرین پروژه‌ها
          </h2>
          <p class="mt-4 text-slate-400">
            گلچینی از بهترین کارهایی که اخیراً توسعه داده‌ام.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in projects"
            :key="project.title"
            class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col h-full"
          >
            <div class="relative aspect-video bg-slate-900 overflow-hidden">
              <!-- یک شبیه‌ساز تصویر پروژه با گرادینت زیبا -->
              <div
                class="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center text-slate-500 group-hover:scale-105 transition-transform duration-300"
              >
                <span class="text-4xl">{{ project.icon }}</span>
              </div>
            </div>
            <div class="p-6 flex flex-col flex-grow text-right">
              <h3
                class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors"
              >
                {{ project.title }}
              </h3>
              <p class="mt-3 text-slate-400 text-sm leading-relaxed flex-grow">
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

    <!-- فوتر (Footer) -->
    <footer
      class="bg-slate-950 border-t border-slate-800 py-12 text-center text-slate-500 text-sm"
    >
      <p>© {{ new Date().getFullYear() }} تمام حقوق محفوظ است.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const skills = ref([
  { name: "HTML & CSS", icon: "🎨" },
  { name: "JavaScript", icon: "💛" },
  { name: "Vue.js", icon: "💚" },
  { name: "Nuxt 3", icon: "⛰️" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Git & GitHub", icon: "🐙" },
]);

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
/* راست‌چین کردن کل صفحه به دلیل زبان فارسی */
html {
  direction: rtl;
  scroll-behavior: smooth;
}
</style>
