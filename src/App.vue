<script setup lang="ts">
import { NConfigProvider, NGlobalStyle, zhCN, dateZhCN } from 'naive-ui'
import { useThemeStore } from '@/stores/theme'
// themeStore 主题实例
const themeStore = useThemeStore()
import themeColor  from ''
</script>

<template>
  <div id="root">
    <n-config-provider :theme="themeStore.theme" :locale="zhCN" :date-locale="dateZhCN">
      <router-view v-slot="{ Component }">
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
      <n-global-style />
    </n-config-provider>
  </div>
</template>

<style>
/* 导入自定义字体 */
@import url("./assets/css/reset.css");

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

#root {
  height: 100vh;
  width: 100vw;
  margin: 0;
  font-family: 'HaHa-Sphericity';
  font-size: 18px;
}
</style>
