<template>
  <footer
    id="contact"
    class="bg-slate-950 border-t border-slate-900 pt-16 pb-8"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <!-- ستون اول: معرفی -->
        <div class="space-y-4">
          <div
            class="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            &lt;NinjaCoder /&gt;
          </div>
          <p class="text-slate-500 text-sm leading-relaxed max-w-xs">
            توسعه‌دهنده فرانت‌اند با تمرکز بر رابط کاربری مدرن و پرفورمنس بالا.
            ساخت تجربیات دیجیتال با Nuxt و Tailwind.
          </p>
        </div>

        <!-- ستون دوم: لینک‌های سریع -->
        <div>
          <h4 class="text-white font-bold mb-4">دسترسی سریع</h4>
          <ul class="space-y-3 text-slate-500 text-sm">
            <li>
              <a
                href="#about"
                class="hover:text-emerald-400 transition-colors flex items-center gap-2"
                ><span>•</span> درباره من</a
              >
            </li>
            <li>
              <a
                href="#skills"
                class="hover:text-emerald-400 transition-colors flex items-center gap-2"
                ><span>•</span> مهارت‌ها</a
              >
            </li>
            <li>
              <a
                href="#projects"
                class="hover:text-emerald-400 transition-colors flex items-center gap-2"
                ><span>•</span> نمونه‌کارها</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="hover:text-emerald-400 transition-colors flex items-center gap-2"
                ><span>•</span> تماس با من</a
              >
            </li>
          </ul>
        </div>

        <!-- ستون سوم: ارتباط حرفه‌ای -->
        <div>
          <h4 class="text-white font-bold mb-4">ارتباط با من</h4>
          <p class="text-slate-400 text-xs mb-4">{{ "09178975867" }}</p>
          <div class="flex flex-wrap gap-3">
            <!-- GitHub -->
            <a
              href="https://github.com/Ali-Git-1"
              target="_blank"
              title="GitHub"
              class="p-3 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-emerald-600 transition-all duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            <!-- WhatsApp (چت مستقیم) -->
            <a
              href="https://wa.me/989178975867"
              target="_blank"
              title="WhatsApp"
              class="p-3 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-emerald-600 transition-all duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.918-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.005 0C5.37 0 .005 5.365.005 11.999c0 2.112.553 4.175 1.604 5.979L.005 24l6.192-1.624a11.818 11.818 0 005.807 1.478h.006c6.635 0 12.001-5.365 12.001-12 0-3.205-1.248-6.22-3.518-8.49z"
                />
              </svg>
            </a>

            <!-- Telegram (چت مستقیم با شماره) -->
            <a
              href="https://t.me/+989178975867"
              target="_blank"
              title="Telegram"
              class="p-3 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-emerald-600 transition-all duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.24.24 0 00-.05-.22c-.12-.09-1.52.55-2.15.96-.66.42-1.27.54-1.81.54-.59 0-1.73-.33-2.58-.6-.99-.32-1.78-.49-1.71-1.03.04-.32.48-.65 1.33-1.01 5.22-2.28 6.94-3 7.55-3.02.17 0 .55.04.79.23.2.16.27.4.3.62z"
                />
              </svg>
            </a>
          </div>
          <div class="flex flex-wrap gap-3 mt-4">
            <!-- Eitaa (چت مستقیم با شماره) -->
            <a
              href="https://eitaa.com/09178975867"
              target="_blank"
              title="ایتا"
              class="p-3 rounded-xl bg-slate-900 hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center"
            >
              <img
                src="/icons/eitaa.png"
                alt="Eitaa"
                class="w-5 h-5 object-contain"
              />
            </a>

            <!-- Rubika (چت مستقیم با شماره) -->
            <a
              href="https://rubika.ir/09178975867"
              target="_blank"
              title="روبیکا"
              class="p-3 rounded-xl bg-slate-900 hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center"
            >
              <img
                src="/icons/rubika.png"
                alt="Rubika"
                class="w-5 h-5 object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-slate-900 pt-8 text-center">
        <p class="text-slate-600 text-sm">
          © {{ new Date().getFullYear() }} - تمامی حقوق محفوظ است. طراحی و توسعه
          با Nuxt 3 & Tailwind
        </p>
      </div>
    </div>
  </footer>
</template>
