<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  items: Array
})

// Создаём уникальный ID для чек-листа на основе заголовка
const checklistId = props.title?.replace(/\s/g, '_') || 'default_checklist'

// Загружаем сохранённые значения из localStorage
function loadFromStorage() {
  const saved = localStorage.getItem(`checklist_${checklistId}`)
  if (saved) {
    return JSON.parse(saved)
  }
  return []
}

// Сохраняем в localStorage
function saveToStorage(data) {
  localStorage.setItem(`checklist_${checklistId}`, JSON.stringify(data))
}

// Состояние чек-листа (массив индексов отмеченных пунктов)
const checked = ref(loadFromStorage())

// Переключаем чек-бокс
const toggle = (idx) => {
  if (checked.value.includes(idx)) {
    checked.value = checked.value.filter(i => i !== idx)
  } else {
    checked.value.push(idx)
  }
  saveToStorage(checked.value)
}
</script>

<template>
  <div class="checklist-container">
    <h3>{{ title }}</h3>
    <div class="checklist-items">
      <label 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="checklist-label"
      >
        <input 
          type="checkbox"
          @change="toggle(idx)"
          :checked="checked.includes(idx)"
        />
        <span :class="{'is-checked': checked.includes(idx)}">
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
  color: var(--vp-c-text-1);
}

.checklist-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.checklist-label:hover {
  background-color: var(--vp-c-bg-soft-mute);
}

.checklist-label input {
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  accent-color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.checklist-label span {
  font-size: 1rem;
  color: var(--vp-c-text-1);
  transition: color 0.2s;
}

.checklist-label span.is-checked {
  text-decoration: line-through;
  color: var(--vp-c-text-3);
}
</style>
