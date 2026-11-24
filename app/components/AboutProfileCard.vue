<template>
  <aside class="z-20 self-start lg:sticky lg:top-6">
    <div
      class="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-slate-900/60 p-6 text-center shadow-xl shadow-emerald-500/5 backdrop-blur-sm"
    >
      <div class="mb-6 flex flex-col items-center">
        <div
          class="animate-float-slow rounded-2xl bg-white/5 p-1.5 shadow-2xl shadow-emerald-500/20 ring-1 ring-white/10"
        >
          <img
            v-if="!imageError"
            src="/me.jpg"
            alt="تصویر پروفایل علی عربپور"
            class="h-32 w-32 rounded-xl object-cover object-top sm:h-40 sm:w-40"
            @error="onImageError"
          />
        </div>

        <span
          class="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/20 bg-slate-900/60 px-4 py-1.5 text-sm text-emerald-300"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"
            ></span>
          </span>
          آماده برای همکاری
        </span>
      </div>

      <span
        class="pointer-events-none absolute right-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-emerald-400 to-cyan-400"
      ></span>

      <div class="flex flex-col items-center text-center">
        <h2 class="text-xl font-black text-white">علی عربپور</h2>

        <p class="mt-1 text-sm text-emerald-300">توسعه‌دهنده وب</p>

        <p
          class="mt-3 flex w-full flex-row items-center justify-center gap-2 text-sm text-slate-400"
        >
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path :d="icons.pin" />
          </svg>
          <span>شیراز، ایران</span>
        </p>
        <p
          class="mt-3 flex w-full flex-row items-center justify-center gap-2 text-sm text-slate-400"
        >
          تاریخ تولد : 21/12/1385
        </p>
      </div>

      <ul
        class="mt-6 space-y-4 border-t border-white/10 pt-6 text-sm text-slate-300"
      >
        <li class="flex flex-row items-center justify-center gap-2">
          <svg class="icon text-emerald-300" viewBox="0 0 24 24">
            <path :d="icons.palette" />
          </svg>
          <span>دیپلم رشته گرافیک رایانه</span>
        </li>

        <li class="flex flex-row items-center justify-center gap-2">
          <svg class="icon text-emerald-300" viewBox="0 0 24 24">
            <path :d="icons.cap" />
          </svg>
          <span>کاردانی نرم‌افزار کامپیوتر</span>
        </li>

        <li class="flex flex-row items-center justify-center gap-2">
          <svg class="icon text-emerald-300" viewBox="0 0 24 24">
            <path :d="icons.shield" />
          </svg>
          <span>معافیت موقت سربازی</span>
        </li>
      </ul>

      <div class="mt-6 border-t border-white/10 pt-6">
        <p class="mb-4 text-sm font-bold text-white">شرایط همکاری</p>

        <div class="flex flex-wrap justify-center gap-2">
          <span
            v-for="item in availability"
            :key="item"
            class="chip rounded-full border border-emerald-500/20 px-3 py-1.5 text-xs text-emerald-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-200"
          >
            {{ item }}
          </span>
        </div>
      </div>

      <div class="mt-6 border-t border-white/10 pt-6">
        <p class="mb-4 text-sm font-bold text-white">راه‌های ارتباطی</p>

        <ul class="flex flex-col items-center gap-2">
          <li v-for="link in contacts" :key="link.label" class="w-full">
            <a
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              :aria-label="link.label"
              class="contact-link group flex w-full items-center justify-center gap-3 rounded-xl border border-transparent px-3 py-3 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/20 hover:bg-emerald-500/5 hover:text-emerald-300"
            >
              <svg
                class="icon shrink-0 text-emerald-400 transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path :d="icons[link.icon]" />
              </svg>

              <span dir="ltr" class="truncate">
                {{ link.text }}
              </span>
            </a>
          </li>
        </ul>
      </div>

      <a
        href="/Personal-website/Ali-Arabpour-Resume.pdf"
        download
        class="resume-btn mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-emerald-400 to-cyan-400 py-3 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20 active:translate-y-0"
      >
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path :d="icons.download" />
        </svg>
        دانلود رزومه
      </a>
    </div>
  </aside>
</template>

<script setup>
const icons = {
  pin: "M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",

  shield: "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z",

  palette:
    "M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1.7-3.1 2 2 0 0 1 1.7-3h1.6A5 5 0 0 0 23 10c0-4-5-7-11-7Z M7.5 10h.01 M10.5 7h.01 M15.5 7h.01 M18.5 10h.01",

  cap: "M22 10 12 5 2 10l10 5 10-5ZM6 12v5c4 3 8 3 12 0v-5M22 10v6",

  github:
    "M9 19c-4 1-4-2-6-2m12 4v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 3.77 5.07 5.07 0 0 0 18.91 0S17.73-.35 15 1.67a13.38 13.38 0 0 0-7 0C5.27-.35 4.09 0 4.09 0A5.07 5.07 0 0 0 4 3.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 17.13V21",

  linkedin:
    "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",

  phone:
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03Z",

  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 2-10 7L2 6",

  download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3",
};

const availability = ["تمام‌وقت", "پاره‌وقت", "ریموت"];

const contacts = [
  {
    label: "گیت‌هاب",
    text: "github.com/Ali-Git-1",
    href: "https://github.com/Ali-Git-1",
    icon: "github",
    external: true,
  },
  {
    label: "لینکدین",
    text: "ali-arabpour-b6b10343b",
    href: "https://www.linkedin.com/in/ali-arabpour-b6b10343b/",
    icon: "linkedin",
    external: true,
  },
  {
    label: "تلفن",
    text: "09178975867",
    href: "tel:09178975867",
    icon: "phone",
  },
  {
    label: "ایمیل",
    text: "1qoo.ali.oop1@gmail.com",
    href: "mailto:1qoo.ali.oop1@gmail.com",
    icon: "mail",
  },
];
</script>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;

  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
