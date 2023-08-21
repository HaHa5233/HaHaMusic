<script lang="ts" setup>
import SearchBar from '@/components/search/index.vue'
defineExpose({})

onMounted(() => { })
onUnmounted(() => { })
</script>

<template>
  <div class="mainInterface">
    <SearchBar></SearchBar>
  </div>
</template>

<style lang="scss" scoped>
.mainInterface {
  padding: 10px;
}
</style>
