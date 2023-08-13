import { darkTheme, lightTheme } from 'naive-ui'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { GlobalTheme } from 'naive-ui'

export const useThemeStore: any = defineStore('themeStore', () => {
  const theme = ref<GlobalTheme>(lightTheme)
  function setTheme(themes: boolean) {
    if (themes) {
      theme.value = lightTheme
    } else {
      theme.value = darkTheme
    }
  }

  return {
    theme,
    setTheme
  }
})
