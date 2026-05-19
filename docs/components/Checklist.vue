<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  items: Array
})

const checked = ref([])

const toggle = (idx) => {
  if (checked.value.includes(idx)) {
    checked.value = checked.value.filter(i => i !== idx)
  } else {
    checked.value.push(idx)
  }
}
</script>

<template>
  <div class="checklist-container">
    <h3>{{ title }}</h3>
    <div class="checklist-items">
      <label v-for="(item, idx) in items" :key="idx" class="checklist-label">
        <input 
          type="checkbox" 
          @change="toggle(idx)"
          :checked="checked.includes(idx)"
        />
        <span :class="{ 'is-checked': checked.includes(idx) }">
          {{ item }}
        </span>
      </label>
    </div>
  </div>
</template>

<style scoped>
.checklist-container {
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}
.checklist-container h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(#fffff);
}
.checklist-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-bottom: 10px;
}
.checklist-label input {
  width: 18px;
  height: 18px;
  cursor: pointer;
}
.is-checked {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>