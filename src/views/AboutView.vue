<script lang="ts" setup>
import { touristLogin } from '@/apis/user/index'

const Login = () => {
  touristLogin().then((res) => {
    console.log("🚀 ~ file: AboutView.vue:6 ~ touristLogin ~ res:", res)
  })
}
// Login()
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
