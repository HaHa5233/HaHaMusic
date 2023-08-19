<script setup>
import LeftMenu from '@/components/left-menu/index.vue'
defineExpose({})


onMounted(() => { })

onUnmounted(() => { })
</script>

<template>
  <div class="page">
    <div class="left-menu">
      <left-menu />
    </div>
    <!-- <div class="divider"></div> -->
    <div class="main"></div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;

  .left-menu {
    width: 240px
  }

  .main {
    flex: 1;
  }
}

.divider {
  border-left: 1px solid #292929;
  height: 100vh;
}
</style>
