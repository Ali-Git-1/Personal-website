<template>
  <div>
    <Transition name="fade-out">
      <div
        v-if="isLoading"
        class="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-slate-950 text-slate-100 font-mono select-none px-4"
      >
        <div class="relative flex flex-col items-center">
          <div
            class="w-20 h-20 mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-3xl shadow-[0_0_50px_rgba(16,185,129,0.3)] animate-pulse"
          >
            <svg
              class="h-8 w-8 text-emerald-400"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
            </svg>
          </div>

          <div
            class="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold mb-2 flex items-center gap-2"
          >
            <span
              class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"
            ></span>
            {{ t("loader.title") }}
          </div>

          <p class="text-slate-400 text-xs sm:text-sm h-6 text-center">
            {{ t(currentStatus) }}
          </p>

          <div
            class="w-64 sm:w-80 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-6 border border-slate-700/50"
          >
            <div
              class="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-150 ease-out"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>

          <div class="text-xs text-slate-500 mt-3 font-semibold">
            [ {{ progress }}% ]
          </div>
        </div>
      </div>
    </Transition>

    <div
      class="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-900"
    >
      <header class="fixed inset-x-0 top-5 z-50 px-3 sm:px-6">
        <div
          class="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-cyan-400/20 bg-slate-950/70 px-3 py-2 shadow-lg shadow-cyan-500/5 backdrop-blur-md"
        >
          <a
            href="#about"
            dir="ltr"
            class="text-lg font-extrabold tracking-tight"
            @click.prevent="goTo('about')"
          >
            <span
              class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
              >&lt;NinjaCoder /&gt;</span
            >
          </a>

          <nav class="hidden items-center gap-1 lg:flex">
            <a
              v-for="link in links"
              :key="link.id"
              :href="'#' + link.id"
              :class="[
                'flex items-center gap-2 rounded-xl px-2.5 py-2 text-sm transition-all duration-300',
                activeId === link.id
                  ? link.active + ' ring-1'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white',
              ]"
              @click.prevent="goTo(link.id)"
            >
              <svg
                class="hidden h-4 w-4 xl:block"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path :d="link.icon" />
              </svg>
              {{ t("nav." + link.id) }}
            </a>
          </nav>

          <div class="flex items-center gap-2">
            <div
              class="flex overflow-hidden rounded-xl border border-white/10 text-xs font-bold"
              dir="ltr"
            >
              <button
                v-for="l in ['fa', 'en']"
                :key="l"
                type="button"
                :class="[
                  'px-3 py-2 uppercase transition-colors',
                  lang === l
                    ? 'bg-cyan-400 text-slate-950'
                    : 'text-slate-400 hover:text-white',
                ]"
                @click="lang = l"
              >
                {{ l }}
              </button>
            </div>

            <button
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-cyan-300 transition-colors hover:bg-white/5"
              :aria-label="
                theme === 'dark' ? t('header.lightMode') : t('header.darkMode')
              "
              @click="theme = theme === 'dark' ? 'light' : 'dark'"
            >
              <svg
                v-if="theme === 'dark'"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
              </svg>
              <svg
                v-else
                class="h-5 w-5 text-amber-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M12 2v2 M12 20v2 M4.9 4.9l1.4 1.4 M17.7 17.7l1.4 1.4 M2 12h2 M20 12h2 M4.9 19.1l1.4-1.4 M17.7 6.3l1.4-1.4"
                />
              </svg>
            </button>

            <button
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-300 lg:hidden"
              :aria-label="t('header.menu')"
              @click="menuOpen = !menuOpen"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                aria-hidden="true"
              >
                <path
                  :d="
                    menuOpen
                      ? 'M6 6l12 12 M18 6 6 18'
                      : 'M4 7h16 M4 12h16 M4 17h16'
                  "
                />
              </svg>
            </button>
          </div>
        </div>

        <nav
          v-if="menuOpen"
          class="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-cyan-400/20 bg-slate-950/90 p-2 backdrop-blur-md lg:hidden"
        >
          <a
            v-for="link in links"
            :key="link.id"
            :href="'#' + link.id"
            :class="[
              'rounded-xl px-4 py-3 text-sm',
              activeId === link.id ? link.active : 'text-slate-300',
            ]"
            @click.prevent="goTo(link.id)"
          >
            {{ t("nav." + link.id) }}
          </a>
        </nav>
      </header>

      <HeroSection />

      <SkillsSection />

      <AndroidSection />

      <WordPressProjectsSection />

      <section
        id="projects"
        class="relative py-28 overflow-hidden bg-slate-950"
      >
        <canvas
          ref="particleCanvas"
          class="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
        ></canvas>

        <div
          class="absolute -top-40 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow"
        ></div>
        <div
          class="absolute top-1/2 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-blob"
        ></div>
        <div
          class="absolute -bottom-32 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"
        ></div>

        <div
          class="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900 pointer-events-none"
        ></div>

        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4 shadow-sm shadow-emerald-500/20"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"
              ></span>
              {{ t("projects.badge") }}
            </div>
            <h2
              class="text-3xl font-extrabold text-white sm:text-4xl tracking-tight"
            >
              {{ t("projects.titleStart") }}
              <span
                class="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent"
                >{{ t("projects.titleAccent") }}</span
              >
            </h2>
            <p class="mt-4 text-slate-400 text-sm sm:text-base">
              {{ t("projects.subtitle") }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="project in projects"
              :key="project.title"
              class="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500 flex flex-col h-full hover:-translate-y-1.5"
            >
              <div
                class="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <div
                class="relative aspect-video bg-gradient-to-b from-slate-900 to-slate-950 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-500 border-b border-slate-800/60"
              >
                <div
                  class="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
                <span class="relative drop-shadow-md select-none">{{
                  project.icon
                }}</span>
              </div>

              <div class="p-6 flex flex-col flex-grow text-start">
                <h3
                  class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300"
                >
                  {{ pick(project, "title") }}
                </h3>
                <p
                  class="mt-3 text-slate-400 text-sm leading-relaxed flex-grow"
                >
                  {{ pick(project, "description") }}
                </p>

                <div class="mt-6 flex flex-wrap gap-1.5">
                  <span
                    v-for="tech in pick(project, 'techs')"
                    :key="tech"
                    class="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-950/80 text-emerald-300/80 border border-slate-800 group-hover:border-emerald-950 transition-colors"
                  >
                    {{ tech }}
                  </span>
                </div>

                <div
                  class="mt-6 grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-800/60"
                >
                  <a
                    v-if="project.demo"
                    :href="project.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all duration-300 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02]"
                  >
                    <span>{{ t("projects.demo") }}</span>
                    <span>↗</span>
                  </a>

                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span>{{ t("projects.github") }}</span>
                    <span>{{ lang === "fa" ? "←" : "→" }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AndroidSection from "./components/AndroidSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import HeroSection from "./components/HeroSection.vue";
import FooterSection from "./components/FooterSection.vue";
import WordPressProjectsSection from "./components/WordPressProjectsSection.vue";
import { messages } from "./i18n/messages";

const isLoading = ref(true);
const progress = ref(0);
const currentStatus = ref("loader.status.connecting");

const lang = ref("en");

const theme = useState("theme", () => "dark");
const t = (key) =>
  key.split(".").reduce((o, k) => o?.[k], messages[lang.value]) ?? key;

provide("lang", lang);
provide("t", t);

const menuOpen = ref(false);
const activeId = ref("about");
const navRef = ref(null);
const pill = reactive({ x: 0, w: 0, show: false });

const updatePill = () => {
  const el = navRef.value?.querySelector(`[data-id="${activeId.value}"]`);
  if (!el) return;
  pill.x = el.offsetLeft;
  pill.w = el.offsetWidth;
  pill.show = true;
};

watch([activeId, lang], () => nextTick(updatePill));

const links = [
  {
    id: "about",
    fa: "درباره من",
    en: "About",
    active: "bg-emerald-400/15 text-emerald-300 ring-emerald-300/30",
    icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M4 21a8 8 0 0 1 16 0",
  },
  {
    id: "skills",
    fa: "مهارت‌ها",
    en: "Skills",
    active: "bg-cyan-400/15 text-cyan-200 ring-cyan-300/30",
    icon: "M9 3v2 M15 3v2 M9 19v2 M15 19v2 M3 9h2 M3 15h2 M19 9h2 M19 15h2 M7 7h10v10H7z",
  },
  {
    id: "android",
    icon: "M8 3l1.5 2.5 M16 3l-1.5 2.5 M6 9a6 6 0 0 1 12 0v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9Z M9.5 13h.01 M14.5 13h.01",
    active: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/30",
  },

  {
    id: "wordpress-projects",
    fa: "وردپرس",
    en: "WordPress",
    active: "bg-sky-400/15 text-sky-300 ring-sky-300/30",
    icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M3 12h18 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18",
  },
  {
    id: "projects",
    fa: "نمونه‌کارها",
    en: "Portfolio",
    active: "bg-cyan-400/15 text-cyan-200 ring-cyan-300/30",
    icon: "M3 7h18v12H3z M9 7V5h6v2",
  },
  {
    id: "contact",
    fa: "تماس با من",
    en: "Contact",
    active: "bg-emerald-400/15 text-emerald-300 ring-emerald-300/30",
    icon: "M22 2 11 13 M22 2l-7 20-4-9-9-4 20-7Z",
  },
];

let rafId;
let locked = false;
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const pick = (item, field) =>
  lang.value === "en" && item.en?.[field] ? item.en[field] : item[field];

const goTo = (id) => {
  menuOpen.value = false;
  const el = document.getElementById(id);
  if (!el) return;
  cancelAnimationFrame(rafId);
  activeId.value = id;
  locked = true;
  const startY = window.scrollY;
  const dist = el.getBoundingClientRect().top - 96;
  const duration = Math.min(100, 50 + Math.abs(dist) * 0.25);
  const t0 = performance.now();
  const step = (now) => {
    const p = Math.min((now - t0) / duration, 1);
    window.scrollTo(0, startY + dist * ease(p));
    if (p < 1) rafId = requestAnimationFrame(step);
    else locked = false;
  };
  rafId = requestAnimationFrame(step);
};

let observer;
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (locked) return;
      entries.forEach((e) => {
        if (e.isIntersecting) activeId.value = e.target.id;
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  links.forEach((l) => {
    const el = document.getElementById(l.id);
    if (el) observer.observe(el);
  });
  nextTick(updatePill);
  window.addEventListener("resize", updatePill);
});
onBeforeUnmount(() => {
  observer?.disconnect();
  window.removeEventListener("resize", updatePill);
});

useHead({
  htmlAttrs: {
    lang: computed(() => lang.value),
    dir: computed(() => (lang.value === "fa" ? "rtl" : "ltr")),
    "data-theme": computed(() => theme.value),
  },
});

onMounted(() => {
  const steps = [
    { threshold: 25, status: "loader.status.config" },
    { threshold: 55, status: "loader.status.assets" },
    { threshold: 85, status: "loader.status.verify" },
    { threshold: 100, status: "loader.status.ready" },
  ];

  const timer = setInterval(() => {
    if (progress.value < 100) {
      progress.value += Math.floor(Math.random() * 5) + 3;
      if (progress.value > 100) progress.value = 100;

      const step = steps.find((s) => progress.value <= s.threshold);
      if (step) {
        currentStatus.value = step.status;
      }
    } else {
      clearInterval(timer);
      setTimeout(() => {
        isLoading.value = false;
      }, 800);
    }
  }, 100);
});

const projects = ref([
  {
    title: "فروشگاه آنلاین Monox",
    en: {
      title: "Monox Online Store",
      description:
        "An e-commerce site with smart categories, advanced product filters, a responsive UI, and cart management.",
      techs: ["Vue.js", "Bootstrap", "JavaScript", "Responsive"],
    },
    description:
      "وب‌سایت فروشگاهی با دسته‌بندی هوشمند، فیلتر پیشرفته محصولات، رابط کاربری ریسپانسیو و مدیریت سبد خرید.",
    icon: "🛍️",
    techs: ["Vue.js", "Bootstrap", "JavaScript", "Responsive"],
    github: "https://github.com/Ali-Git-1/Monox",
    demo: "https://ali-git-1.github.io/Monox/",
  },
  {
    title: "وب‌سایت مقالات",
    en: {
      title: "Article Website",
      description:
        "A publishing and reading platform with clean design, structured categories, and an optimized user experience.",
      techs: ["UI/UX", "CSS3", "JavaScript", "Vue.js"],
    },

    description:
      "پلتفرم انتشار و مطالعه مقالات با طراحی تمیز، ساختار دسته‌بندی‌شده و بهینه‌سازی کامل برای تجربه کاربری.",
    icon: "📰",
    techs: ["Vue.js", "JavaScript", "CSS3", "UI/UX"],
    github: "https://github.com/Ali-Git-1/Article-Website",
    demo: "https://ali-git-1.github.io/Article-Website/",
  },
  {
    title: "وب‌سایت و پورتفولیوی شخصی",
    en: {
      title: "Personal Portfolio Website",
      description:
        "An interactive portfolio with smooth animations, clean sections, and a modern architecture.",
      techs: ["JavaScript", "Vite", "Tailwind CSS", "Vue 3"],
    },

    description:
      "پورتفولیوی تعاملی با انیمیشن‌های نرم، بخش‌بندی پروژه‌ها و مهارت‌ها با معماری مدرن و تمیز.",
    icon: "⚡",
    techs: ["Vue 3", "Tailwind CSS", "Vite", "JavaScript"],
    github: "https://github.com/Ali-Git-1/Personal-website",
    demo: "https://ali-git-1.github.io/Personal-website/",
  },
]);
const particleCanvas = ref(null);
let animId = null,
  handleResize = null,
  handleMouseMove = null;

onMounted(() => {
  const canvas = particleCanvas.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w = (canvas.width = canvas.parentElement.offsetWidth);
  let h = (canvas.height = canvas.parentElement.offsetHeight);

  handleResize = () => {
    if (!canvas?.parentElement) return;
    w = canvas.width = canvas.parentElement.offsetWidth;
    h = canvas.height = canvas.parentElement.offsetHeight;
  };
  window.addEventListener("resize", handleResize);

  const mouse = { x: null, y: null, radius: 120 };
  handleMouseMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  };
  window.addEventListener("mousemove", handleMouseMove);

  const count = Math.min(Math.floor((w * h) / 12000), 50);
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    size: Math.random() * 2 + 1,
    color: Math.random() > 0.5 ? "#10b981" : "#06b6d4",
  }));

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 110) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.2 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      if (mouse.x !== null) {
        const mDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (mDist < mouse.radius) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.4 * (1 - mDist / mouse.radius)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    });
    animId = requestAnimationFrame(draw);
  };
  draw();
});

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId);
  if (handleResize) window.removeEventListener("resize", handleResize);
  if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

html[dir="rtl"] {
  direction: rtl;
}

html[dir="ltr"] {
  direction: ltr;
}

.fade-out-leave-active {
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.fade-out-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

@keyframes pulse-slow {
  0%,
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 0.15;
  }
  50% {
    transform: scale(1.15) translate(20px, -20px);
    opacity: 0.25;
  }
}

@keyframes blob-move {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-blob {
  animation: blob-move 10s ease-in-out infinite;
}
</style>
