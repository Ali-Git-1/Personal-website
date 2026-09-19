<template>
  <!-- بخش پروژه‌ها (Projects) -->
  <section id="projects" class="pt-28 pb-20 bg-slate-950 text-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- عنوان بخش -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          نمونه‌کارهای منتخب
        </h2>

        <p class="mt-4 text-slate-400">
          پروژه‌هایی که صفر تا صد پیاده‌سازی شده‌اند.
        </p>
      </div>

      <!-- لیست پروژه‌ها -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
      >
        <div
          v-for="project in projects"
          :key="project.title"
          class="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col h-full shadow-lg"
        >
          <!-- آیکون پروژه -->
          <div
            class="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300"
          >
            {{ project.icon }}
          </div>

          <!-- اطلاعات پروژه -->
          <div class="p-6 flex flex-col flex-grow text-right">
            <h3
              class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors"
            >
              {{ project.title }}
            </h3>

            <p class="mt-3 text-slate-400 text-sm leading-relaxed flex-grow">
              {{ project.description }}
            </p>

            <!-- تکنولوژی‌ها -->
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
</template>

<script setup>
import { ref } from "vue";

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
