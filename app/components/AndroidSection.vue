<script setup>
import { ref, computed } from "vue";
import { androidItems } from "~/data/android";

const t = inject("t");
const lang = inject("lang");

const base = useRuntimeConfig().app.baseURL.replace(/\/$/, "");
const withBase = (p) =>
  !p
    ? ""
    : p.startsWith("http")
      ? p
      : `${base}${p.startsWith("/") ? "" : "/"}${p}`;

const filter = ref("all");

const filters = computed(() => [
  { key: "all", label: t("android.filterAll") },
  { key: "app", label: t("android.filterApps") },
  { key: "game", label: t("android.filterGames") },
]);

const items = computed(() =>
  androidItems
    .filter((i) => filter.value === "all" || i.type === filter.value)
    .map((i) => ({ ...i, text: i[lang.value] ?? i.en })),
);
</script>
<template>
  <section
    id="android"
    class="relative overflow-hidden py-20 bg-slate-950 border-t border-slate-800/60"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-4"
        >
          <span>{{ t("android.badge") }}</span>
        </div>
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          {{ t("android.title") }}
        </h2>
        <p class="mt-4 text-slate-400 text-sm sm:text-base">
          {{ t("android.subtitle") }}
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-2 mb-10" role="tablist">
        <button
          v-for="f in filters"
          :key="f.key"
          type="button"
          role="tab"
          :aria-selected="filter === f.key"
          class="px-4 py-1.5 rounded-full text-sm border transition-colors"
          :class="
            filter === f.key
              ? 'bg-cyan-500/15 border-cyan-400/50 text-cyan-300'
              : 'border-slate-700 text-slate-400 hover:text-slate-200'
          "
          @click="filter = f.key"
        >
          {{ f.label }}
        </button>
      </div>

      <div v-if="items.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="item in items"
          :key="item.id"
          class="group flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-6 transition-all duration-300"
        >
          <div>
            <div class="flex items-start gap-4 mb-4">
              <div
                class="w-16 h-16 shrink-0 rounded-2xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center overflow-hidden"
              >
                <img
                  v-if="item.image"
                  :src="withBase(item.image)"
                  :alt="item.text.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="min-w-0">
                <h3
                  class="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors"
                >
                  {{ item.text.title }}
                </h3>
                <div class="flex flex-wrap gap-2 mt-1.5">
                  <span
                    class="text-xs px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                  >
                    {{
                      item.type === "app"
                        ? t("android.typeApp")
                        : t("android.typeGame")
                    }}
                  </span>
                  <span
                    class="text-xs px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/60"
                  >
                    {{ item.text.category }}
                  </span>
                </div>
              </div>
            </div>

            <p class="text-slate-300/90 text-sm leading-relaxed mb-5">
              {{ item.text.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div
            class="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3"
          >
            <span class="text-xs text-slate-500 flex items-center gap-1.5">
              <span
                class="w-2 h-2 rounded-full"
                :class="item.isPublished ? 'bg-emerald-400' : 'bg-amber-400'"
              ></span>
              {{
                item.isPublished ? t("android.published") : t("android.review")
              }}
            </span>

            <div class="flex items-center gap-2">
              <a
                v-if="item.repoUrl"
                :href="item.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 transition-all"
              >
                {{ t("android.github") }}
              </a>
              <a
                v-if="item.downloadUrl"
                :href="withBase(item.downloadUrl)"
                download
                class="px-3 py-1.5 rounded-xl text-xs font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 transition-all"
              >
                {{ t("android.download") }}
              </a>
              <a
                v-if="
                  item.isPublished && item.marketUrl && item.marketUrl !== '#'
                "
                :href="item.marketUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all"
              >
                {{ t("android.myket") }}
              </a>
            </div>
          </div>
        </article>
      </div>

      <p v-else class="text-center text-slate-500 text-sm">
        {{ t("android.empty") }}
      </p>
    </div>
  </section>
</template>
