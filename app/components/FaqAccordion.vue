<script setup>
import { ref, inject } from "vue";

const t = inject("t");
const lang = inject("lang");

const open = ref(null);
const count = 5;

const toggle = (i) => {
  open.value = open.value === i ? null : i;
};
</script>

<template>
  <div class="faq">
    <h3 class="faq-title">{{ t("faq.title") }}</h3>

    <div
      v-for="i in count"
      :key="i"
      class="faq-item"
      :class="{ 'is-open': open === i - 1 }"
    >
      <button
        type="button"
        class="faq-q"
        :aria-expanded="open === i - 1"
        @click="toggle(i - 1)"
      >
        <span class="faq-num">{{ i }}</span>
        <span class="faq-text">{{ t(`faq.items.${i - 1}.q`) }}</span>
        <svg
          class="faq-chevron"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div class="faq-panel">
        <div class="faq-panel-inner">
          <p class="faq-a">{{ t(`faq.items.${i - 1}.a`) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.faq-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.faq-item {
  position: relative;
  border: 1px solid rgba(94, 234, 212, 0.15);
  border-radius: 1rem;
  background: rgba(15, 23, 42, 0.6);
  overflow: hidden;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

.faq-item::before {
  content: "";
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
  width: 3px;
  background: linear-gradient(to bottom, #22d3ee, #34d399);
  transform: scaleY(0);
  transition: transform 0.4s ease;
}

.faq-item:hover {
  border-color: rgba(94, 234, 212, 0.35);
}

.faq-item.is-open {
  border-color: rgba(94, 234, 212, 0.5);
  background: rgba(15, 23, 42, 0.9);
  box-shadow: 0 10px 30px -12px rgba(34, 211, 238, 0.35);
}

.faq-item.is-open::before {
  transform: scaleY(1);
}

.faq-q {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 1.25rem;
  text-align: start;
  color: inherit;
  background: transparent;
  cursor: pointer;
}

.faq-num {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #5eead4;
  background: rgba(94, 234, 212, 0.12);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.faq-item.is-open .faq-num {
  color: #0f172a;
  background: linear-gradient(135deg, #22d3ee, #34d399);
}

.faq-text {
  flex: 1;
  font-weight: 600;
  line-height: 1.6;
}

.faq-chevron {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  color: #5eead4;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-item.is-open .faq-chevron {
  transform: rotate(180deg);
}

/* انیمیشن کشویی: ارتفاع از 0fr به 1fr */
.faq-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-item.is-open .faq-panel {
  grid-template-rows: 1fr;
}

.faq-panel-inner {
  min-height: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-6px);
  transition:
    opacity 0.3s ease,
    transform 0.4s ease;
}

.faq-item.is-open .faq-panel-inner {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.08s;
}

.faq-a {
  padding: 0 1.25rem 1.25rem;
  padding-inline-start: calc(1.25rem + 1.75rem + 0.75rem);
  line-height: 1.9;
  color: rgba(226, 232, 240, 0.85);
}

@media (prefers-reduced-motion: reduce) {
  .faq-item,
  .faq-item::before,
  .faq-num,
  .faq-chevron,
  .faq-panel,
  .faq-panel-inner {
    transition: none !important;
  }
}
</style>
