<script setup>
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
    width: 240px
  }

  .main {
    flex: 1;
  }
}
</style>
