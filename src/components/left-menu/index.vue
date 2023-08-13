<script lang="ts" setup>
// import { useDark, useToggle } from '@vueuse/core'
import type { MenuOption } from 'naive-ui'
import { NIcon } from "naive-ui";
import { Home20Regular } from '@vicons/fluent'
import { UserOutlined } from '@vicons/antd'
import { RouterLink } from 'vue-router'
import Theme from '@/components/theme/index.vue'

// // 黑夜模式切换
// const toggleDark = useToggle(useDark())
// const handleChangeDark = () => {
//   toggleDark()
// }

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Home',
          }
        },
        { default: () => '首页' }
      ),
    key: 'go-back-home',
    icon: renderIcon(Home20Regular)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: ''
          }
        },
        { default: () => '我的信息' }
      ),
    key: 'go-to-work',
    icon: renderIcon(UserOutlined)
  }
]
</script>

<template>
  <div class="p-[15px]">
    <Theme />
    <n-menu :options="menuOptions" />
    <span>字体</span>
  </div>
</template>
