<script setup>
// لیست برنامه‌ها (بعداً که اپ‌ها رو بیلد کردی، فقط اطلاعات همین آرایه رو ویرایش کن)
const apps = [
  {
    id: 1,
    title: "ماشین حساب مدرن",
    category: "کاربردی / ابزارها",
    status: "در حال بررسی در مایکت",
    description:
      "اپلیکیشن ماشین حساب هوشمند با رابط کاربری مدرن و قابلیت محاسبه سریع عملیات ریاضی.",
    tags: [
      "Capacitor",
      "JavaScript",
      "HTML5",
      "vue.js",
      "CSS3",
      "Android Studio",
    ],
    icon: "",
    image: "/images/apps/calculator.png",
    repoUrl: "https://github.com/Ali-Git-1/App-Calculator",
    downloadUrl: "/downloads/calculator.apk",
    marketUrl: "#", // به محض تأیید مایکت، لینک مستقیم رو اینجا بذار
    isPublished: false, // بعد از انتشار توی مایکت true کن
  },
];
</script>

<template>
  <section
    id="published-apps"
    class="py-20 apps-section position-relative overflow-hidden z-10"
  >
    <!-- لایه‌های پس‌زمینه متحرک -->
    <div class="bg-elements" aria-hidden="true">
      <div class="grid-overlay"></div>
      <div class="glow-orb orb-1"></div>
      <div class="glow-orb orb-2"></div>
    </div>

    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 container position-relative z-1 py-4"
    >
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
                <!-- بخش تصویر ماشین حساب -->
                <img
                  v-if="app.image"
                  :src="
                    app.image.startsWith('http')
                      ? app.image
                      : `${useRuntimeConfig().app.baseURL.replace(/\/$/, '')}${app.image.startsWith('/') ? '' : '/'}${app.image}`
                  "
                  :alt="app.title"
                  class="w-full h-full object-cover"
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
          <!-- فوتر کارت: لینک‌های گیت‌هاب، دانلود مستقیم و مارکت -->
          <div
            class="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3"
          >
            <!-- وضعیت انتشار -->
            <span class="text-xs text-slate-500 flex items-center gap-1.5">
              <span
                class="w-2 h-2 rounded-full"
                :class="app.isPublished ? 'bg-emerald-400' : 'bg-amber-400'"
              ></span>
              {{
                app.isPublished ? "منتشر شده در استور" : "در حال بررسی در مارکت"
              }}
            </span>

            <!-- دکمه‌های اکشن -->
            <div class="flex items-center gap-2">
              <!-- دکمه گیت‌هاب -->
              <a
                v-if="app.repoUrl"
                :href="app.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
                title="مشاهده سورس کد در گیت‌هاب"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 transition-all hover:scale-105"
              >
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57V21.09c-3.33.72-4.035-1.605-4.035-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.095-.75.09-.735.09-.735 1.215.09 1.845 1.245 1.845 1.245 1.08 1.83 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22v3.285c0 .315.225.675.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
                <span>گیت‌هاب</span>
              </a>

              <!-- دکمه دانلود APK مستقیم -->
              <a
                v-if="app.downloadUrl"
                :href="
                  app.downloadUrl.startsWith('http')
                    ? app.downloadUrl
                    : `${useRuntimeConfig().app.baseURL.replace(/\/$/, '')}${app.downloadUrl.startsWith('/') ? '' : '/'}${app.downloadUrl}`
                "
                download
                title="دانلود مستقیم فایل نصبی APK"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 transition-all hover:scale-105"
              >
                <svg
                  class="w-3.5 h-3.5 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>دانلود APK</span>
              </a>

              <!-- دکمه مارکت بعد از انتشار -->
              <a
                v-if="app.isPublished && app.marketUrl && app.marketUrl !== '#'"
                :href="app.marketUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all hover:scale-105"
              >
                <span>مایکت</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* کانتینر اصلی بخش */
.apps-section {
  background-color: #0b0f19;
  position: relative;
}

/* شبکه توری نوری در پس‌زمینه */
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(circle at center, black 40%, transparent 85%);
  -webkit-mask-image: radial-gradient(
    circle at center,
    black 40%,
    transparent 85%
  );
  pointer-events: none;
}
/* گوی‌های نوری گرادیانت */
.glow-orb {
  position: absolute;
  border-radius: 50%;
  animation: floatOrb 8s ease-in-out infinite alternate;
  opacity: 0.55;
  filter: blur(70px);
  pointer-events: none;
}

/* گوی آبی اول */
.orb-1 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #2563eb 0%, #1e40af 70%);
  top: 10%;
  left: 5%;
}

/* گوی بنفش دوم */
.orb-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #7c3aed 0%, #4c1d95 70%);
  bottom: 10%;
  right: 5%;
}

/* انیمیشن شناور بودن نرم */
@keyframes floatOrb {
  0% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(90px, 50px) scale(1.25);
  }
  66% {
    transform: translate(-70px, -60px) scale(0.9);
  }
  100% {
    transform: translate(40px, -30px) scale(1.15);
  }
}
/* والدين که بچه‌ها توش شناور باشن */
.bg-elements {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
</style>
