// 手机登录接口
export interface PhoneLoginData {
  phone: string,
  password: string,
  md5_password?: string,
  countrycode?: string
  captcha?: string
}
export interface PhoneLoginRes {
  token: string
}

// 游客登录接口
export interface TouristLoginRes {
  token: string
}

// 获取用户推荐歌单
export interface UserPlaylistParams {
  uid: number
  limit?: number
  offset?: number
}
// export interface UserPlaylistRes {
//   token: string
// }