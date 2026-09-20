<template>
  <!-- بخش مهارت‌ها (Skills) -->
  <section
    id="skills"
    class="relative py-24 bg-slate-950/70 border-y border-slate-800/80 overflow-hidden"
  >
    <!-- هاله‌های نوری نئونی در پس‌زمینه -->
    <div
      class="absolute top-6 left-10 text-8xl font-mono text-emerald-400/20 select-none pointer-events-none font-black float-slow"
    >
      &lt;/&gt;
    </div>

    <div
      class="absolute bottom-6 right-10 text-9xl font-mono text-cyan-400/20 select-none pointer-events-none font-black float-medium"
    >
      { }
    </div>

    <!-- خطوط برنامه‌نویسی پس‌زمینه -->
    <div
      class="absolute inset-0 bg-lines-pattern opacity-40 pointer-events-none float-slow"
    ></div>

    <!-- کاراکترهای شناور کم‌رنگ سینتکس برنامه‌نویسی در پس‌زمینه -->
    <div
      class="absolute -top-6 left-10 text-8xl font-mono text-slate-800/20 select-none pointer-events-none font-black float-medium"
    >
      &lt;/&gt;
    </div>
    <div
      class="absolute bottom-4 right-10 text-9xl font-mono text-slate-800/20 select-none pointer-events-none font-black float-slow"
    >
      { }
    </div>
    <div
      class="absolute top-1/2 left-1/3 text-7xl font-mono text-slate-800/10 select-none pointer-events-none float-medium"
    >
      =&gt;
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto float-medium">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          مهارت‌های من
        </h2>
        <p class="mt-4 text-slate-400">
          ابزارها و تکنولوژی‌هایی که روزانه با آن‌ها خلق ارزش می‌کنم.
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
</template>

<script setup>
const skills = ref([
  { name: "HTML & CSS", icon: "🎨" },
  { name: "JavaScript", icon: "💛" },
  { name: "Vue.js", icon: "💚" },
  { name: "Nuxt 3", icon: "⛰️" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Git & GitHub", icon: "🐙" },
  {
    name: "REST APIs & Axios",
    icon: "⚡", // یا 🔄
    color: "text-sky-400",
  },
  {
    name: "UI/UX Design",
    icon: "💫", // یا 📐
    color: "text-pink-400",
  },
  {
    name: "PHP",
    icon: "🐘",
    color: "text-indigo-400",
  },
  {
    name: "WordPress",
    icon: "🌐",
    color: "text-blue-500",
  },
  // اضافه کردن به لیست مهارت‌ها:
  {
    name: "Android App Dev",
    description: "ساخت انواع اپلیکیشن با Android Studio",
    icon: "📱", // یا 🤖
    color: "text-emerald-400",
  },
  {
    name: "Android Game Dev",
    description: "ساخت و توسعه بازی با Android Studio",
    icon: "🎮",
    color: "text-purple-400",
  },
  {
    name: "SEO & Meta Tags",
    icon: "🔍", // یا 📈
    color: "text-amber-400",
  },
]);
</script>

<style>
/* خطوط گرید پررنگ‌تر */
.bg-lines-pattern {
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: linear-gradient(to bottom, black, transparent);
  -webkit-mask-image: linear-gradient(to bottom, black, transparent);
}
/* انیمیشن هاله‌های نوری */
@keyframes blob {
  0%,
  100% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(40px, -50px) scale(1.15);
  }
  66% {
    transform: translate(-30px, 30px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 5s infinite ease-in-out; /* تایم رو کم کردیم تا حرکتش سریع‌تر حس بشه */
  will-change: transform; /* این دستور باعث میشه مرورگر بدونه این قراره حرکت کنه و به GPU میسپارتش */
}
.animation-delay-2000 {
  animation-delay: 2s;
}

/* انیمیشن شناور کاراکترها */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}
.float-slow {
  animation: float 3s ease-in-out infinite; /* سریع‌تر */
  will-change: transform;
}

.float-medium {
  animation: float 3s ease-in-out infinite 0.5s; /* سریع‌تر */
  will-change: transform;
}
</style>
