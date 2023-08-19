<script lant="ts" setup>
import { useRouter } from 'vue-router'
import { touristLogin } from '@/apis/user/index'
import { useUserStore } from '@/stores/user'
const router = useRouter()
const userStore = useUserStore()
// import { useDark, useToggle } from '@vueuse/core'
// import Theme from '@/components/theme/index.vue'

// // 黑夜模式切换
// const toggleDark = useToggle(useDark())
// const handleChangeDark = () => {
//   toggleDark()
// }
// 监听屏幕宽度变化
const screenWidth = ref(0)
const menuVisible = ref(true)
watch(() => screenWidth, (newValue) => {
  if (newValue.value > 935) {
    menuVisible.value = true
  } else {
    menuVisible.value = false
  }
}, {
  deep: true,
  immediate: true
})
// 菜单跳转事件
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
  },
  {
    id: 3,
    name: '登录',
    icon: 'iconfont icon-home1'
  },
  {
    id: 4,
    name: '游客',
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
    case 3:
      console.log(item.id)
      break
    case 4:
      login()
      break
  }
  active.value = item.name
}
// 登录
const login = () => {
  touristLogin().then((res) => {
    userStore.login(res)
  })
}
// 页面首次加载
onMounted(() => {
  screenWidth.value = document.body.clientWidth
  window.onresize = () => {
    return (() => {
      screenWidth.value = document.body.clientWidth
    })()
  }
})
</script>

<template>
  <div class="main" :class="{ mainactive: menuVisible }">
    <ul v-if="menuVisible" class="menu">
      <template v-for="   item    in    menus   " :key="item.id">
        <li v-if="[1, 2].includes(item.id)" @click="handeToPage(item)" :class="{ active: active === item.name }">
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </li>
      </template>
      <div class="divider"></div>
      <div class="login">
        <div>登录</div>
        <div @click="login">游客登录</div>
        <span>登录以创建和分享播放列表、观看个性化推荐内容，等等</span>
      </div>
    </ul>
    <ul v-if="!menuVisible" class="menu-pad">
      <li v-for="   item    in    menus   " :key="item.id" @click="handeToPage(item)"
        :class="{ active: active === item.name }">
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@media(max-width: 935px) {
  .menu {
    animation: fade-out 0.4s ease forwards;
  }
}

@media(min-width: 935px) {
  .menu {
    animation: fade-in 0.4s ease forwards;
  }
}

.main {
  padding: 10px;
  text-align: center;

  .menu {
    width: 100%;
    color: #fff;
    text-align: center;
    padding-inline-start: 0;
    height: 100vh;


    span {
      margin-left: 10px;
    }
  }

  .menu-pad {
    width: 30%;
    color: #fff;
    text-align: center;
    padding-inline-start: 0;

    span {
      display: block;
      font-size: 12px;
    }
  }
}

.mainactive {
  border-right: 1px solid #292929;
  height: 100vh;
}

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
    transition: all 0.2s;
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

@keyframes fade-out {
  0% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(-240px);
  }
}

@keyframes fade-in {
  0% {
    transform: translateX(-240px);
  }

  100% {
    transform: translateX(0px);
  }
}
</style>
