<script setup>
// لیست برنامه‌ها (بعداً که اپ‌ها رو بیلد کردی، فقط اطلاعات همین آرایه رو ویرایش کن)
const apps = [
  {
    id: 1,
    title: "اپلیکیشن دستیار هوشمند",
    category: "کاربردی / ابزارها",
    status: "به‌زودی در مارکت‌ها",
    description:
      "یک اپلیکیشن اندرویدی پیشرفته برای مدیریت کارهای روزمره با رابط کاربری مدرن، ذخیره‌سازی ابری و بهینه‌سازی شده برای مصرف حداقل باتری.",
    tags: ["Android Studio", "Kotlin", "Room DB", "Jetpack Compose"],
    icon: "📱",
    image: "", // بعداً می‌تونی مسیر تصویر مثل /images/apps/app1.png بذاری
    marketUrl: "#", // لینک بازار یا مایکت پس از انتشار
    isPublished: false, // اگر منتشر شد true کن تا دکمه دانلود فعال بشه
  },
  {
    id: 2,
    title: "اپلیکیشن پایش سلامت و تغذیه",
    category: "پزشکی و سلامت",
    status: "در حال توسعه نهایی",
    description:
      "محاسبه کالری روزانه، ثبت نمودار پیشرفت و یادآورهای زمان‌بندی شده هوشمند با پشتیبانی از اعلان‌های پس‌زمینه.",
    tags: ["Android Dev", "Java", "REST API", "WorkManager"],
    icon: "🩺",
    image: "",
    marketUrl: "#",
    isPublished: false,
  },
];
</script>

<template>
  <section id="published-apps" class="py-20 relative z-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- عنوان بخش -->
      <div class="flex items-center gap-3 mb-10">
        <span
          class="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 text-2xl border border-cyan-500/20 shadow-lg shadow-cyan-500/5"
        >
          📱
        </span>
        <div>
          <div class="flex items-center gap-2">
            <h2
              class="text-2xl sm:text-3xl font-bold text-white tracking-tight"
            >
              برنامه‌های اندروید
            </h2>
            <span
              class="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
              >Android Apps</span
            >
          </div>
          <p class="text-sm text-slate-400 mt-1">
            محصولات و اپلیکیشن‌های موبایل توسعه داده شده
          </p>
        </div>
      </div>

      <!-- گرید کارت‌های اپلیکیشن -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="app in apps"
          :key="app.id"
          class="group relative rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
        >
          <div>
            <!-- هدر کارت: آیکون + اطلاعات کلی -->
            <div class="flex items-start gap-4 mb-4">
              <!-- باکس آیکون اپلیکیشن -->
              <div
                class="w-16 h-16 rounded-2xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-3xl shrink-0 overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300"
              >
                <img
                  v-if="app.image"
                  :src="app.image"
                  :alt="app.title"
                  class="w-full h-full object-cover"
                  @error="$event.target.style.display = 'none'"
                />
                <span v-else>{{ app.icon }}</span>
              </div>

              <!-- مشخصات و برچسب وضعیت -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-2">
                  <h3
                    class="text-lg font-bold text-slate-100 truncate group-hover:text-cyan-400 transition-colors"
                  >
                    {{ app.title }}
                  </h3>
                </div>

                <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                  <span
                    class="text-xs px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                  >
                    {{ app.category }}
                  </span>
                  <span
                    class="text-xs px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium"
                  >
                    {{ app.status }}
                  </span>
                </div>
              </div>
            </div>

            <!-- توضیحات کوتاه اپ -->
            <p class="text-slate-300/90 text-sm leading-relaxed mb-5">
              {{ app.description }}
            </p>

            <!-- تگ‌های تکنولوژی استفاده شده -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="(tag, idx) in app.tags"
                :key="idx"
                class="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50 group-hover:border-slate-600 transition-colors"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- فوتر کارت: وضعیت انتشار و دکمه -->
          <div
            class="pt-4 border-t border-slate-800/80 flex items-center justify-between"
          >
            <span class="text-xs text-slate-500 flex items-center gap-1.5">
              <span
                class="w-2 h-2 rounded-full"
                :class="
                  app.isPublished
                    ? 'bg-emerald-400 animate-ping'
                    : 'bg-amber-400'
                "
              ></span>
              {{
                app.isPublished
                  ? "منتشر شده در استور"
                  : "آماده‌سازی برای انتشار"
              }}
            </span>

            <a
              v-if="app.isPublished"
              :href="app.marketUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 transition-all hover:scale-105"
            >
              دریافت از مارکت
              <svg
                class="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <span
              v-else
              class="text-xs px-3 py-1.5 rounded-xl bg-slate-800/60 text-slate-400 border border-slate-700/40"
            >
              به‌زودی در مایکت و بازار
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
