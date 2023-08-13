<script lang="ts" setup>
import { useOsTheme } from 'naive-ui'
import { useThemeStore } from '@/stores/theme'
// 主题标记
const themeFlag = ref(true)
// themeStore
const theme = useThemeStore()
// 获取当前系统主题
const osTheme = useOsTheme();
// 监听当前操作系统主题
watch(osTheme, osTheme => {
  if (osTheme) {
    if (osTheme === "dark") {
      themeFlag.value = true
    } else {
      themeFlag.value = false
    }
    updateTheme()
  }
}, {
  // 第一次绑定时会初始化立即执行一次
  immediate: true
})
// 变更主题
function updateTheme() {
  themeFlag.value = !themeFlag.value
  theme.setTheme(themeFlag.value);
}
</script>
<template>
  <n-button @click="updateTheme" strong secondary type="success">
    {{ themeFlag ? "光明" : "黑暗" }}
  </n-button>
</template>