<template>
  <!-- بخش معرفی (Hero Section) به همراه عکس شخصی -->
  <section id="about" class="relative py-20 md:py-32 overflow-hidden">
    <!-- لایه ۱: گرید شطرنجی برنامه‌نویسی -->
    <div
      class="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"
    ></div>

    <!-- لایه ۲: هاله های نوری متحرک نئونی (پررنگ‌تر شده) -->
    <div
      class="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none"
    ></div>

    <!-- خط اسکن متحرک: یک نور از بالای صفحه به پایین حرکت می‌کند -->
    <div class="scan-line pointer-events-none"></div>

    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_50%)]"
    ></div>
    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <!-- متن معرفی -->
      <div class="text-right">
        <span
          class="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
        >
          آماده برای پروژه‌های جدید
        </span>
        <!-- اسم و فامیل با افکت گلیچ سایبری -->
        <div class="glitch-wrapper mb-3" dir="ltr" data-text="Ali Arabpour">
          <span class="glitch-text">Ali Arabpour</span>
        </div>

        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-6 leading-tight"
        >
          سلام، من
          <span
            class="bg-gradient-to-l from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            >برنامه‌نویس فرانت‌اند</span
          >
          هستم
        </h1>
        <p class="mt-6 text-lg text-slate-400 leading-relaxed h-16">
          {{ dynamicText }}<span class="animate-pulse text-emerald-400">|</span>
        </p>

        <div class="mt-10 flex flex-wrap gap-4 justify-start">
          <a
            href="#projects"
            class="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-lg transition-all duration-300 shadow-lg shadow-emerald-500/10"
          >
            مشاهده نمونه‌کارها
          </a>
          <a
            href="#contact"
            class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg border border-slate-700 transition-all duration-300"
          >
            ارتباط با من
          </a>
        </div>
      </div>

      <!-- تصویر شخصی شما (Personal Photo Container) -->
      <div class="flex justify-center">
        <div class="relative group">
          <!-- افکت نورانی و گرادینت پشت تصویر -->
          <div
            class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"
          ></div>

          <!-- قاب تصویر -->
          <div
            class="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden bg-slate-900 border border-emerald-500/30 shadow-[0_0_60px_rgba(16,185,129,0.25)] flex items-center justify-center"
          >
            <!-- در صورتی که تصویر شما در پوشه public/me.jpg قرار گیرد نمایش داده می‌شود -->
            <img
              src="/me.jpg"
              alt="My Profile"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              @error="onImageError"
              v-if="!imageError"
            />

            <!-- فال‌بک در صورتی که هنوز عکست را داخل پوشه public نگذاشته باشی -->
            <div v-else class="text-center p-6">
              <div
                class="w-24 h-24 mx-auto rounded-full bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center text-3xl mb-4 text-emerald-400"
              >
                👨‍💻
              </div>
              <p class="text-xs text-slate-400">
                تصویرت را با نام
                <code class="text-emerald-400 bg-slate-800 px-1 py-0.5 rounded"
                  >me.jpg</code
                >
                داخل پوشه
                <code class="text-cyan-400 bg-slate-800 px-1 py-0.5 rounded"
                  >public</code
                >
                قرار بده.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const imageError = ref(false);

// --- بخش جدید برای تایپ‌رایتر ---
const dynamicText = ref("");
const roles = [
  "توسعه‌دهنده وب با تمرکز بر رابط‌های کاربری چشم‌نواز",
  "برنامه‌نویس متخصص با استفاده از Vue 3 و Nuxt",
  " علاقه‌مند به مشارکت تیمی و دنیای متن‌باز (GitHub)",
  "عاشق کدهای بهینه و با کارایی بالا",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeWriter = () => {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    dynamicText.value = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    dynamicText.value = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 30 : 60;

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000; // مکث در انتهای جمله برای خوانده شدن
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500;
  }

  setTimeout(typeWriter, typeSpeed);
};

const onImageError = () => {
  imageError.value = true;
};
onMounted(() => {
  typeWriter();
});
</script>

<style>
/* گرید نقطه‌ای پررنگ‌تر + ماسک محو شونده برای زیبایی */
.bg-grid-pattern {
  background-image: radial-gradient(
    rgba(52, 211, 153, 0.35) 1.2px,
    transparent 1.2px
  );
  background-size: 28px 28px;
  mask-image: radial-gradient(
    ellipse 70% 60% at 50% 40%,
    black 30%,
    transparent 75%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 70% 60% at 50% 40%,
    black 30%,
    transparent 75%
  );
}
/* هاله نوری شناور - حرکت واضح‌تر و بزرگ‌تر */
@keyframes blob-float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(60px, -60px) scale(1.25);
  }
  66% {
    transform: translate(-40px, 40px) scale(0.9);
  }
}
.animate-blob {
  animation: blob-float 12s infinite ease-in-out;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}

/* خط اسکن نورانی متحرک (حس ترمینال و مانیتور کدنویسی) */
@keyframes scanline {
  0% {
    top: -10%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: 110%;
    opacity: 0;
  }
}
.scan-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(52, 211, 153, 0.4),
    transparent
  );
  animation: scanline 8s linear infinite;
}
/* ===== افکت گلیچ برای اسم ===== */
.glitch-wrapper {
  position: relative;
  display: inline-block;
  font-family: "Courier New", monospace;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.glitch-wrapper::before,
.glitch-wrapper::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  opacity: 0;
}

/* لایه قرمز/صورتی - جابجایی افقی */
.glitch-wrapper::before {
  color: #f43f5e;
  animation: glitch-anim-1 3s infinite linear alternate-reverse;
}

/* لایه فیروزه‌ای - جابجایی مخالف */
.glitch-wrapper::after {
  color: #22d3ee;
  animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
}

.glitch-text {
  color: #34d399; /* سبز هماهنگ با تم سایت */
  text-shadow: 0 0 12px rgba(52, 211, 153, 0.6);
}

@keyframes glitch-anim-1 {
  0%,
  88%,
  100% {
    opacity: 0;
    transform: translate(0);
  }
  90% {
    opacity: 0.8;
    transform: translate(-3px, 1px);
    clip-path: inset(20% 0 40% 0);
  }
  93% {
    opacity: 0.8;
    transform: translate(3px, -1px);
    clip-path: inset(60% 0 10% 0);
  }
  96% {
    opacity: 0.8;
    transform: translate(-2px, 0);
    clip-path: inset(0 0 70% 0);
  }
}

@keyframes glitch-anim-2 {
  0%,
  85%,
  100% {
    opacity: 0;
    transform: translate(0);
  }
  87% {
    opacity: 0.7;
    transform: translate(3px, -1px);
    clip-path: inset(40% 0 30% 0);
  }
  91% {
    opacity: 0.7;
    transform: translate(-3px, 1px);
    clip-path: inset(10% 0 60% 0);
  }
  95% {
    opacity: 0.7;
    transform: translate(2px, 0);
    clip-path: inset(70% 0 5% 0);
  }
}
</style>
