<template>
  <section
    id="wordpress-projects"
    class="py-20 bg-slate-900 border-t border-slate-800/60"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- عنوان بخش -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-4"
        >
          <span>🌐</span>
          <span>WordPress & CMS</span>
        </div>
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          پروژه‌های وردپرس و وب‌سایت‌ها
        </h2>
        <p class="mt-4 text-slate-400 text-sm sm:text-base">
          طراحی، شخصی‌سازی قالب و راه‌اندازی سایت‌های اختصاصی بر پایه وردپرس
        </p>
      </div>

      <!-- کارت‌های پروژه‌ها -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="site in sites"
          :key="site.id"
          class="group relative bg-slate-950/70 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] flex flex-col justify-between"
        >
          <!-- بالا: لوگو و تگ وضعیت -->
          <div>
            <div class="flex items-start justify-between mb-5">
              <div
                class="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform"
              >
                {{ site.icon }}
              </div>

              <!-- وضعیت آنلاین یا در حال انتقال/تمدید -->
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

            <!-- تکنولوژی‌ها و افزونه‌ها -->
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

          <!-- پایین: لینک یا وضعیت سرور -->
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

const sites = ref([
  {
    id: 1,
    title: "وب‌سایت اختصاصی من", // اسم سایت قبلیت رو اینجا بذار
    icon: "🌐",
    description:
      "طراحی، پیاده‌سازی و سئوی وب‌سایت با استفاده از وردپرس، سفارشی‌سازی قالب و بهینه‌سازی سرعت لودینگ صفحات.",
    features: ["WordPress", "Elementor", "SEO", "WooCommerce"],
    role: "طراح و مدیر سایت",
    isOnline: false, // چون گفتی هاست فعلا غیرفعاله
    statusText: "در حال تمدید سرور",
    url: null, // بعد از فعال شدن لینکش رو اینجا می‌ذاری
  },
]);
</script>
