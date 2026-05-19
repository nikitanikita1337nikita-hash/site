import DefaultTheme from 'vitepress/theme'
// Убедитесь, что путь до Checklist.vue правильный! 
// Если Checklist.vue лежит в docs/components/, то путь такой:
import Checklist from '../../components/Checklist.vue'
import './style.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Checklist', Checklist)
  }
}