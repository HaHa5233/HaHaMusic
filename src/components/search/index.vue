<script lang="ts" setup>
defineExpose({})

onMounted(() => { })
onUnmounted(() => { })
</script>

<template>
  <div class="searchBar">
    <div class="div-icon">
      <span>&lt;</span>
    </div>
    <div class="div-search">
      <input class="search" name="input" type="search" autocomplete="off" size="60" placeholder="与秋书（合唱版）- 光头华夏">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.searchBar {
  display: flex;
}

.div-icon {
  height: 36px;
  width: 26px;
  margin: 0 10px;
  border-radius: 8px;
  border: 1px solid #2b2b31;
  text-align: center;
  line-height: 36px;

  span {
    margin: 0 auto;
    color: #a1a1a3;
    font-size: 18px;
  }
}

.div-search {
  position: relative;

  .search {
    position: absolute;
    height: 38px;
    width: 290px;
    background: linear-gradient(to right, #1d283e, #3a2537);
    border: none;
    border-radius: 8px;
    font-size: 14px;
    color: #71707a;
    padding-left: 5px;
    z-index: 2;
  }

  .search:focus {
    outline: none;
    background: #13131a
  }
}

.div-search::after {
  display: block;
  position: absolute;
  content: "";
  width: 292px;
  height: 40px;
  top: -1px;
  left: -1px;
  border-radius: 8px;
  background: linear-gradient(to right, #1d283e, #3a2537);
}
</style>
