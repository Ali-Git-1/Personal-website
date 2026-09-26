<template>
  <div>
    <!-- ۱. صفحه پیش‌نمایش بارگذاری اولیه (Intro / Preloader) -->
    <Transition name="fade-out">
      <div
        v-if="isLoading"
        class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100 font-mono select-none px-4"
      >
        <!-- آیکون و پس‌زمینه نوری -->
        <div class="relative flex flex-col items-center">
          <div
            class="w-20 h-20 mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-3xl shadow-[0_0_50px_rgba(16,185,129,0.3)] animate-pulse"
          >
            ⚡
          </div>

          <div
            class="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold mb-2 flex items-center gap-2"
          >
            <span
              class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"
            ></span>
            در حال راه‌اندازی سیستم...
          </div>

          <p class="text-slate-400 text-xs sm:text-sm h-6 text-center">
            {{ currentStatus }}
          </p>

          <!-- نوار پیشرفت (Progress Bar) -->
          <div
            class="w-64 sm:w-80 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-6 border border-slate-700/50"
          >
            <div
              class="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-150 ease-out"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>

          <!-- درصد پیشرفت -->
          <div class="text-xs text-slate-500 mt-3 font-semibold">
            [ {{ progress }}% ]
          </div>
        </div>
      </div>
    </Transition>

    <!-- ۲. محتوای اصلی سایت -->
    <div
      class="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-900"
    >
      <!-- هدر / ناوبری (Header) -->
      <header
        class="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800"
      >
        <div
          class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        >
          <div
            class="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            &lt;NinjaCoder /&gt;
          </div>
          <nav
            class="hidden md:flex space-x-8 space-x-reverse text-sm font-medium"
          >
            <a
              href="#about"
              class="text-slate-300 hover:text-emerald-400 transition-colors"
              >درباره من</a
            >
            <a
              href="#skills"
              class="text-slate-300 hover:text-emerald-400 transition-colors"
              >مهارت‌ها</a
            >
            <a
              href="#published-apps"
              class="text-slate-300 hover:text-emerald-400 transition-colors"
              >برنامه‌ها</a
            >
            <a
              href="#published-games"
              class="text-slate-300 hover:text-purple-400 transition-colors"
              >بازی‌ها</a
            >
            <a
              href="#wordpress-projects"
              class="text-slate-300 hover:text-sky-400 transition-colors"
              >وردپرس</a
            >

            <a
              href="#projects"
              class="text-slate-300 hover:text-emerald-400 transition-colors"
              >نمونه‌کارها</a
            >
            <a
              href="#contact"
              class="text-slate-300 hover:text-emerald-400 transition-colors"
              >تماس با من</a
            >
          </nav>
          <button
            class="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
          >
            دریافت رزومه
          </button>
        </div>
      </header>

      <HeroSection />

      <SkillsSection />

      <PublishedAppsSection />

      <PublishedGamesSection />

      <WordPressProjectsSection />

      <!-- بخش پروژه‌ها (Projects) با بک‌گراند متحرک و مدرن -->
      <section
        id="projects"
        class="relative py-28 overflow-hidden bg-slate-950"
      >
        <!-- کانواس متحرک ذرات -->
        <canvas
          ref="particleCanvas"
          class="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
        ></canvas>

        <!-- ۱. المان‌های نورانی شناور و متحرک در پس‌زمینه (Glowing Orbs) -->
        <div
          class="absolute -top-40 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow"
        ></div>
        <div
          class="absolute top-1/2 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-blob"
        ></div>
        <div
          class="absolute -bottom-32 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"
        ></div>

        <!-- ۲. پترن مشبک و شطرنجی مدرن پس‌زمینه (Tech Grid Pattern) -->
        <div
          class="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"
        ></div>

        <!-- ۳. گرادیان خطی برای محو کردن نرم لبه‌های بالا و پایین سکشن -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900 pointer-events-none"
        ></div>

        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- هدر سکشن با تگ متحرک -->
          <div class="text-center max-w-2xl mx-auto mb-16">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4 shadow-sm shadow-emerald-500/20"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"
              ></span>
              پروژه‌های پرچمدار
            </div>
            <h2
              class="text-3xl font-extrabold text-white sm:text-4xl tracking-tight"
            >
              نمونه‌کارهای
              <span
                class="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent"
                >منتخب</span
              >
            </h2>
            <p class="mt-4 text-slate-400 text-sm sm:text-base">
              پروژه‌هایی که صفر تا صد پیاده‌سازی شده‌اند و روی وب زنده هستند.
            </p>
          </div>

          <!-- گرید کارت‌های شیشه‌ای و تعاملی -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="project in projects"
              :key="project.title"
              class="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500 flex flex-col h-full hover:-translate-y-1.5"
            >
              <!-- نوار گرادیان بالای کارت در حالت Hover -->
              <div
                class="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <!-- آیکون و هدر کارت -->
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

              <!-- بدنه کارت -->
              <div class="p-6 flex flex-col flex-grow text-right">
                <h3
                  class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300"
                >
                  {{ project.title }}
                </h3>
                <p
                  class="mt-3 text-slate-400 text-sm leading-relaxed flex-grow"
                >
                  {{ project.description }}
                </p>

                <!-- برچسب تکنولوژی‌ها -->
                <div class="mt-6 flex flex-wrap gap-1.5">
                  <span
                    v-for="tech in project.techs"
                    :key="tech"
                    class="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-950/80 text-emerald-300/80 border border-slate-800 group-hover:border-emerald-950 transition-colors"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- دکمه‌های اکشن (مشاهده آنلاین و گیت‌هاب) -->
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
                    <span>مشاهده آنلاین</span>
                    <span>↗</span>
                  </a>

                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span>GitHub</span>
                    <span>←</span>
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
import SkillsSection from "./components/SkillsSection.vue";
import HeroSection from "./components/HeroSection.vue";
import FooterSection from "./components/FooterSection.vue";
import PublishedAppsSection from "./components/PublishedAppsSection.vue";
import PublishedGamesSection from "./components/PublishedGamesSection.vue";
import WordPressProjectsSection from "./components/WordPressProjectsSection.vue";

// متغیرهای لودینگ
const isLoading = ref(true);
const progress = ref(0);
const currentStatus = ref("Connecting to core modules...");

// -----------------------------

// انیمیشن و شبیه‌سازی لودینگ هوشمند در اولین لود صفحه
onMounted(() => {
  const steps = [
    { threshold: 25, status: "بارگذاری پیکربندی و محیط..." },
    {
      threshold: 55,
      status: "گردآوری دارایی‌ها و استایل‌دهی به کامپوننت‌ها...",
    },
    { threshold: 85, status: "راستی‌آزمایی داده‌های سبد سرمایه‌گذاری..." },
    { threshold: 100, status: "سیستم آماده است. خوش آمدید!" },
  ];

  const timer = setInterval(() => {
    if (progress.value < 100) {
      // افزایش رندوم بین ۳ تا ۷ درصد برای طبیعی‌تر شدن
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
      }, 800); // مکث کوتاه برای دیدن ۱۰۰٪
    }
  }, 100);
});

const projects = ref([
  {
    title: "فروشگاه آنلاین Monox",
    description:
      "وب‌سایت فروشگاهی با دسته‌بندی هوشمند، فیلتر پیشرفته محصولات، رابط کاربری ریسپانسیو و مدیریت سبد خرید.",
    icon: "🛍️",
    techs: ["Vue.js", "Bootstrap", "JavaScript", "Responsive"],
    github: "https://github.com/Ali-Git-1/Monox",
    demo: "https://ali-git-1.github.io/Monox/",
  },
  {
    title: "وب‌سایت مقالات (Article Website)",
    description:
      "پلتفرم انتشار و مطالعه مقالات با طراحی تمیز، ساختار دسته‌بندی‌شده و بهینه‌سازی کامل برای تجربه کاربری.",
    icon: "📰",
    techs: ["Vue.js", "JavaScript", "CSS3", "UI/UX"],
    github: "https://github.com/Ali-Git-1/Article-Website",
    demo: "https://ali-git-1.github.io/Article-Website/",
  },
  {
    title: "وب‌سایت و پورتفولیوی شخصی",
    description:
      "پورتفولیوی تعاملی با انیمیشن‌های نرم، بخش‌بندی پروژه‌ها و مهارت‌ها با معماری مدرن و تمیز.",
    icon: "⚡",
    techs: ["Vue 3", "Tailwind CSS", "Vite", "JavaScript"],
    github: "https://github.com/Ali-Git-1/Personal-website",
    demo: "https://ali-git-1.github.io/Personal-website/",
  },
]);
// کانواس ذرات متحرک تعاملی
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
  direction: rtl;
  scroll-behavior: smooth;
}

/* انیمیشن خروج نرم پری‌لودر */
.fade-out-leave-active {
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
.fade-out-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
/* پترن مشبک پس‌زمینه */
.bg-grid-pattern {
  background-size: 40px 40px;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}

/* انیمیشن پالس آرام برای نورها */
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

/* انیمیشن شناوری نور دوم */
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
