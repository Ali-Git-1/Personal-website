<template>
  <aside class="z-20 self-start lg:sticky lg:top-6">
    <div
      class="rounded-3xl border border-emerald-500/20 bg-slate-900/60 backdrop-blur-sm p-6 shadow-xl shadow-emerald-500/5"
    >
      <div class="mb-6 flex flex-col items-center">
        <div
          class="animate-float-slow rounded-2xl bg-white/5 p-1.5 shadow-2xl shadow-emerald-500/20 ring-1 ring-white/10"
        >
          <img
            src="/me.jpg"
            alt="My Profile"
            class="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover object-top"
            @error="onImageError"
            v-if="!imageError"
          />
        </div>
        <span
          class="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-slate-900/60 px-4 py-1.5 text-sm text-emerald-300"
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
        class="absolute right-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-emerald-400 to-cyan-400"
      ></span>
      <div class="text-center">
        <h2 class="text-xl font-black text-white">علی عربپور</h2>
        <p class="mt-1 text-sm text-emerald-300">توسعه‌دهنده وب</p>
        <p class="mt-2 text-sm text-slate-400">شیراز، ایران · ۱۹ ساله</p>
      </div>

      <ul
        class="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-slate-300"
      >
        <li>معافیت تحصیلی</li>
        <li>دیپلم رشته گرافیک</li>
        <li>در حال تحصیل: کاردانی نرم‌افزار کامپیوتر، دانشگاه آزاد اسلامی</li>
      </ul>

      <div class="mt-6 border-t border-white/10 pt-6">
        <p class="mb-3 text-sm font-bold text-white">آماده همکاری</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in availability"
            :key="item"
            class="rounded-full border border-emerald-500/20 px-3 py-1 text-xs text-emerald-300"
          >
            {{ item }}
          </span>
        </div>
      </div>

      <ul class="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
        <li
          v-for="link in contacts"
          :key="link.label"
          class="flex justify-between gap-4"
        >
          <span class="text-slate-400">{{ link.label }}</span>
          <a
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            class="truncate text-slate-200 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-emerald-400"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>

      <a
        href="/downloads/resume.pdf"
        download
        class="mt-6 block rounded-xl bg-gradient-to-l from-emerald-400 to-cyan-400 py-3 text-center font-bold text-slate-950 hover:opacity-90"
      >
        دانلود رزومه
      </a>
    </div>
  </aside>
</template>

<script setup>
const availability = ["تمام وقت", "پاره‌وقت", "ریموت"];

const contacts = [
  {
    label: "گیت‌هاب",
    text: "github.com/Ali-Git-1",
    href: "https://github.com/Ali-Git-1",
  },
  {
    label: "لینکدین",
    text: "ali-arabpour-b6b10343b",
    href: "https://www.linkedin.com/in/ali-arabpour-b6b10343b/",
  },
  { label: "تلفن", text: "09178975867", href: "tel:09178975867" },
  {
    label: "ایمیل",
    text: "1qoo.ali.oop1@gmail.com",
    href: "mailto:1qoo.ali.oop1@gmail.com",
  },
];
</script>
