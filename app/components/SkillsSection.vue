<template>
  <section
    id="skills"
    class="relative py-24 bg-slate-950/70 border-y border-slate-800/80 overflow-hidden"
  >
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
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          {{ t("skills.title") }}
        </h2>
        <p class="mt-4 text-slate-400">
          {{ t("skills.subtitle") }}
        </p>
      </div>
      <div class="mt-12 flex flex-col gap-6 lg:flex-row">
        <div
          class="flex gap-3 overflow-x-auto pb-2 lg:w-72 lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0"
          role="tablist"
        >
          <button
            v-for="group in groups"
            :key="group.key"
            type="button"
            role="tab"
            :aria-selected="activeTab === group.key"
            :class="[
              'flex items-center justify-between gap-3 whitespace-nowrap lg:whitespace-normal rounded-xl border px-5 py-4 text-start font-bold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400',
              activeTab === group.key
                ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300'
                : 'border-slate-800/80 bg-slate-900 text-slate-400 hover:border-emerald-500/30 hover:text-slate-200',
            ]"
            @click="activeTab = group.key"
          >
            <span>{{ group.title }}</span>
            <span class="text-xs opacity-70">{{ group.items.length }}</span>
          </button>
        </div>

        <div class="min-w-0 flex-1">
          <Transition name="skills-fade" mode="out-in">
            <div
              :key="activeGroup.key"
              class="grid grid-cols-2 gap-4 text-center sm:grid-cols-3"
            >
              <div
                v-for="skill in activeGroup.items"
                :key="skill.name"
                :class="[
                  'p-6 bg-slate-900 border rounded-xl transition-all duration-300',
                  activeGroup.learning
                    ? 'border-dashed border-amber-500/40 hover:border-amber-400/70'
                    : 'border-slate-800/80 hover:border-emerald-500/50',
                ]"
              >
                <div class="relative mx-auto mb-3 h-10 w-10 text-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-10 w-10"
                    aria-hidden="true"
                    v-html="icons[skill.icon]"
                  />
                  <span
                    v-if="activeGroup.learning"
                    class="absolute -end-1 -top-1 flex h-3 w-3"
                  >
                    <span
                      class="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"
                    />
                    <span
                      class="relative inline-flex h-3 w-3 rounded-full bg-amber-400"
                    />
                  </span>
                </div>
                <div class="font-semibold text-slate-200 text-sm">
                  {{ skill.name }}
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const t = inject("t");
const activeTab = ref("core");

const icons = {
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  braces:
    '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',
  layers:
    '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  git: '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  globe:
    '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',
  pen: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  smartphone:
    '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
  gamepad:
    '<line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/>',
  server:
    '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
  database:
    '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
  ts: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10h5M9.5 10v7"/>',
  react:
    '<circle cx="12" cy="12" r="1"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
  terminal:
    '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  github:
    '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
};

const groups = computed(() => [
  {
    key: "core",
    title: t("skills.groups.core"),
    items: [
      { name: "HTML & CSS", icon: "code" },
      { name: "JavaScript", icon: "braces" },
      { name: "Vue.js", icon: "layers" },
      { name: "Nuxt 3", icon: "layers" },
      { name: "Tailwind CSS", icon: "zap" },
      { name: "Git & GitHub", icon: "git" },
    ],
  },
  {
    key: "tools",
    title: t("skills.groups.tools"),
    items: [
      { name: "REST APIs & Axios", icon: "globe" },
      { name: "WordPress", icon: "globe" },
      { name: "UI/UX Design", icon: "pen" },
      { name: "SEO & Meta Tags", icon: "search" },
      { name: "Android App Development", icon: "smartphone" },
      { name: "Android Game Development", icon: "gamepad" },
    ],
  },
  {
    key: "software",
    title: t("skills.groups.software"),
    items: [
      { name: "Visual Studio Code", icon: "terminal" },
      { name: "Android Studio", icon: "smartphone" },
      { name: "MongoDB Compass", icon: "database" },
      { name: "Postman", icon: "send" },
      { name: "GitHub", icon: "github" },
    ],
  },

  {
    key: "learning",
    title: t("skills.groups.learning"),
    learning: true,
    items: [
      { name: "Node.js", icon: "server" },
      { name: "Express.js", icon: "server" },
      { name: "MongoDB", icon: "database" },
      { name: "TypeScript", icon: "ts" },
      { name: "React", icon: "react" },
    ],
  },
]);
const activeGroup = computed(
  () => groups.value.find((g) => g.key === activeTab.value) ?? groups.value[0],
);
</script>

<style>
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
  animation: blob 5s infinite ease-in-out;
  will-change: transform;
}
.animation-delay-2000 {
  animation-delay: 2s;
}

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
  animation: float 3s ease-in-out infinite;
  will-change: transform;
}

.float-medium {
  animation: float 3s ease-in-out infinite 0.5s;
  will-change: transform;
}
.skills-fade-enter-active,
.skills-fade-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.skills-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.skills-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
@media (prefers-reduced-motion: reduce) {
  .skills-fade-enter-active,
  .skills-fade-leave-active {
    transition: none;
  }
}
</style>
