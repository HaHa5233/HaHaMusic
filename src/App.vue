<script lang="ts" setup>
</script>

<template>
  <div id="root">
      <router-view v-slot="{ Component }">
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
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
  /* font-family: 'HaHa-Sphericity'; */
  font-size: 16px;
  background-color: #030303;
  opacity: 0.9;
}
</style>
