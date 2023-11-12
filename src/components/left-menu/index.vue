<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
defineExpose({})
const noLoginMenus = reactive({
  up: [
    { label: '云音乐精选', value: 1 },
    { label: '播客', value: 2 },
    { label: '社区', value: 3 },
  ],
  down: [
    { label: '我喜欢的音乐', value: 1 },
    { label: '最近播放', value: 2 },
    { label: '下载管理', value: 3 },
    { label: '本地音乐', value: 4 },
  ]
})
const active = ref('云音乐精选')
const handleToPage = (label: string) => {
  active.value = label
}
onMounted(() => { })
onUnmounted(() => { })
</script>

<template>
  <div class="div-title">
    <span>HaHa云音乐</span>
  </div>
  <div v-if="user.userInfo">
    <div v-for="item in noLoginMenus.up" :key="item.value" class="div-root" @click="handleToPage(item.label)">
      <span :class="{ active: active === item.label }">{{ item.label }}</span>
    </div>
    <div class="div-divider"></div>
    <div v-for="item in noLoginMenus.down" :key="item.value" class="div-root" @click="handleToPage(item.label)">
      <span :class="{ active: active === item.label }">{{ item.label }}</span>
    </div>
    <div class="div-divider"></div>
  </div>
</template>

<style lang="scss" scoped>
.div-title {
  text-align: center;
  margin: 20px 0;

  span {
    font: 500 19px "HaHa-Sphericity";
    color: #fff;
  }
}

.div-root {
  cursor: pointer;

  span {
    display: block;
    font-size: 14px;
    border-radius: 5PX;
    padding: 8px 10px;
    margin: 5px 20px;
  }

  span:hover {
    background-color: #27272e;
  }
}

.active {
  background: linear-gradient(to right, #ff1467, #fc3d49);
  color: #fff;
}

.div-divider {
  height: 1px;
  background-color: #27272e;
  margin: 10px 25px;
}
</style>
