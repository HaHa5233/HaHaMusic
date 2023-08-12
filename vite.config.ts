import path from 'path'
import AutoImport from 'unplugin-auto-import/vite';
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      dts: true, // 会在根目录生成auto-imports.d.ts，里面可以看到自动导入的api
      include: [/\.[tj]sx?$/, /\.vue$/], // 匹配的文件，也就是哪些后缀的文件需要自动引入
      imports: [ // 自动引入的api从这里找
        'vue',
        'vue-router',
      ],
      // 解析器配置
      // resolvers: [ElementPlusResolver()], // 第三方ui
      // 根据项目情况配置eslintrc，默认是不开启的
      eslintrc: {
        enabled: true // @default false
      }
    })
  ],
  // server: {
  //   port: 3001,
  //   https: false,// https开启
  //   host: '0.0.0.0',// ip
  //   // target: 'node',
  //   // httpOnly: false,
  //   open: true,// 是否自动在浏览器中打开
  //   // proxy: {// 跨域代理
  //   //   '/apis': {
  //   //     target: 'http://被代理地址', // 
  //   //     changeOrigin: true,
  //   //     httpOnly: false,
  //   //     rewrite: (path) => path.replace(/^\/apis/, '') //替换apis字段 也可以是其他字段
  //   //   },
  //   //   // 代理 WebSocket 或 socket
  //   //   // '/socket.io': {
  //   //   //   target: 'http://被代理地址',
  //   //   //   // ws: false,
  //   //   // }
  //   // },
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  }

})