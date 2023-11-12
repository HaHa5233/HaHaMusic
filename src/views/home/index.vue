<script lang="ts" setup>
import LeftMenu from '@/components/left-menu/index.vue'
import MainInteface from '@/views/main-interface/index.vue'
defineExpose({})


onMounted(() => { })

onUnmounted(() => { })
</script>

<template>
  <div class="page">
    <div class="left-menu">
      <left-menu />
    </div>
    <div class="main">
      <MainInteface />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  height: 100%;
  width: 100%;
  display: flex;

  .left-menu {
    width: 240px;
    color: #a3a3a6;
    background-color: rgb(26, 26, 33);
  }

  .main {
    flex: 1;
    // color: var(--theme-color);
    background-color: rgb(19, 19, 26);
  }
}
</style>
