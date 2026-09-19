<template>
  <!-- بخش مهارت‌ها (Skills) -->
  <section
    id="skills"
    class="relative py-24 bg-slate-950/70 border-y border-slate-800/80 overflow-hidden"
  >
    <!-- خطوط برنامه‌نویسی پس‌زمینه -->
    <div
      class="absolute inset-0 bg-lines-pattern opacity-40 pointer-events-none"
    ></div>

    <!-- کاراکترهای شناور کم‌رنگ سینتکس برنامه‌نویسی در پس‌زمینه -->
    <div
      class="absolute -top-6 left-10 text-8xl font-mono text-slate-800/20 select-none pointer-events-none font-black"
    >
      &lt;/&gt;
    </div>
    <div
      class="absolute bottom-4 right-10 text-9xl font-mono text-slate-800/20 select-none pointer-events-none font-black"
    >
      { }
    </div>
    <div
      class="absolute top-1/2 left-1/3 text-7xl font-mono text-slate-800/10 select-none pointer-events-none"
    >
      =&gt;
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
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
</style>
