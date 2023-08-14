<script setup>
import router from '@/router';
import { touristLogin } from '@/apis/user/index'
// import { useDark, useToggle } from '@vueuse/core'
// import Theme from '@/components/theme/index.vue'

// // 黑夜模式切换
// const toggleDark = useToggle(useDark())
// const handleChangeDark = () => {
//   toggleDark()
// }
const menus = ref([
  {
    id: 1,
    name: '首页',
    icon: 'iconfont icon-home2'
  },
  {
    id: 2,
    name: '我的',
    icon: 'iconfont icon-home1'
  }
])
const active = ref('首页')
const handeToPage = (item) => {
  switch (item.id) {
    case 1:
      router.push({ name: 'Home' })
      break
    case 2:
      console.log(item.id)
      break
  }
  active.value = item.name
}

// 登录
const login = () => {
  touristLogin().then((res) => {
    console.log('res', res)
  })
}
</script>

<template>
  <div class="main">
    <ul class="menu">
      <li v-for="item in   menus   " :key="item.id" @click="handeToPage(item)" :class="{ active: active === item.name }">
        <i :class="item.icon"></i>
        {{ item.name }}
      </li>
      <div class="divider"></div>
      <div class="login">
        <div>登录</div>
        <div @click="login">游客登录</div>
        <span>登录以创建和分享播放列表、观看个性化推荐内容，等等</span>
      </div>
    </ul>
    <Theme />
  </div>
</template>

<style lang="scss" scoped>
.main {
  padding: 10px;
  text-align: center;
}

.menu {
  width: 100%;
  color: #fff;
  text-align: center;
  padding-inline-start: 0;

  li {
    list-style-type: none;
    padding: 10px;
    margin-top: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
  }

  i {
    font-size: 20px;
    margin-right: 10px;
  }
}

li:hover {
  background-color: #353535;
}

.active {
  background-color: #1d1d1d;
}

.divider {
  border-bottom: 1px solid #292929;
  width: 100%;
  margin: 20px 0;
}

// 登录
.login {
  div {
    padding: 5px;
    background-color: #1d1d1d;
    margin-bottom: 5px;
    font-size: 14px;
    border-radius: 20px;
    cursor: pointer;
  }

  div:hover {
    background-color: #353535;
  }

  span {
    font-size: 12px;
    color: #909090;
    text-align: left;
    line-height: 10px;
  }
}
</style>
