<script lang="ts" setup>
defineExpose({})

onMounted(() => { })
onUnmounted(() => { })
</script>

<template>
  <div class="searchBar">
    <span>
      <span class="icon-span">icon</span>
      <input name="input" type="search" autocomplete="off" size="60" placeholder="搜索歌曲、专辑、音乐人、博客" class="search">
    </span>
  </div>
</template>

<style lang="scss" scoped>
.searchBar {
  color:tomato;
}
.search {
  height: 40px;
  background-color: rgb(44,52,55,0.8);
  border-radius: 5px;
  border: none;
  font-size: 16px;
  color: #b3b3b3;
  font-weight: blod;
}
.icon-span {
  height: 40px;
  width: 40px;
  display: inline-block;
  background-color: rgb(44,52,55,0.8);
}
</style>
