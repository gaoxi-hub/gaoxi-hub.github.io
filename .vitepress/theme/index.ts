import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ResumeLayout from './components/ResumeLayout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册：md 里可直接写 <ResumeLayout />
    app.component('ResumeLayout', ResumeLayout)
  }
}
