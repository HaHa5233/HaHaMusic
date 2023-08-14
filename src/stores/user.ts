import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface UserInfoType {
  token: string;
  userId: number
}

export const useUserStore = defineStore('userStore', () => {
  const userInfo: UserInfoType = reactive({
    token: '',
    userId: 0
  })
  function login(state: any) {
    [userInfo.userId, userInfo.token] = [state.userId, state.cookie]
    window.sessionStorage.setItem('userId', String(userInfo.userId))
    window.sessionStorage.setItem('token', userInfo.token)
  }
  function loginOut() {
    userInfo.userId = 0
    userInfo.token = ''
  }

  return { userInfo, login, loginOut }
})

