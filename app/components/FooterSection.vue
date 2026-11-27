<script setup>
const lang = inject("lang");
const t = inject("t");

const year = new Date().getFullYear();

const quickLinks = computed(() => [
  { href: "#about", label: t("footer.links.about") },
  { href: "#skills", label: t("footer.links.skills") },
  { href: "#projects", label: t("footer.links.projects") },
  { href: "#contact", label: t("footer.links.contact") },
]);

const contactLinks = [
  {
    key: "whatsapp",
    title: "WhatsApp",
    href: "https://wa.me/989178975867",
  },
  {
    key: "telegram",
    title: "Telegram",
    href: "https://t.me/+989178975867",
  },
  {
    key: "eitaa",
    title: "ایتا",
    href: "https://eitaa.com/09178975867",
    image: "/icons/eitaa.png",
  },
  {
    key: "rubika",
    title: "روبیکا",
    href: "https://rubika.ir/09178975867",
    image: "/icons/rubika.png",
  },
];
const imageContactLinks = contactLinks.filter((item) => item.image);
</script>

<template>
  <footer
    id="contact"
    class="bg-slate-950 border-t border-slate-900 pt-16 pb-8"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div class="space-y-4">
          <div
            class="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            &lt;NinjaCoder /&gt;
          </div>
          <p class="text-slate-500 text-sm leading-relaxed max-w-xs">
            {{ t("footer.description") }}
          </p>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4">
            {{ t("footer.quickLinks") }}
          </h4>
          <ul class="space-y-3 text-slate-500 text-sm">
            <li v-for="link in quickLinks" :key="link.href">
              <a
                :href="link.href"
                class="hover:text-emerald-400 transition-colors flex items-center gap-2"
              >
                <span aria-hidden="true">•</span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4">
            {{ t("footer.contact") }}
          </h4>
          <p class="text-slate-400 text-xs mb-4">09178975867</p>

          <div class="flex flex-wrap gap-3">
            <a
              href="https://wa.me/989178975867"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              class="p-3 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-emerald-600 transition-all duration-300"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.918-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.005 0C5.37 0 .005 5.365.005 11.999c0 2.112.553 4.175 1.604 5.979L.005 24l6.192-1.624a11.818 11.818 0 005.807 1.478h.006c6.635 0 12.001-5.365 12.001-12 0-3.205-1.248-6.22-3.518-8.49z"
                />
              </svg>
            </a>

            <a
              href="https://t.me/+989178975867"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
              class="p-3 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-emerald-600 transition-all duration-300"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
                />
              </svg>
            </a>

            <a
              v-for="item in imageContactLinks"
              :key="item.key"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              :title="item.title"
              class="p-3 rounded-xl bg-slate-900 hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="w-5 h-5 object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-slate-900 pt-8 text-center">
        <p class="text-slate-600 text-sm">
          © {{ year }} - {{ t("footer.rights") }} {{ t("footer.builtWith") }}
        </p>
      </div>
    </div>
  </footer>
</template>
