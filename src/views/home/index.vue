<script lang="ts" setup>
import LeftMenu from '@/components/left-menu/index.vue'
defineExpose({})

onMounted(() => { })
onUnmounted(() => { })
</script>

<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="3">
        <left-menu />
      </el-col>
      <el-col :span="19"></el-col>
    </el-row>
  </div>
</template>
