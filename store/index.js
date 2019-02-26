export const store = () => ({
  isLogin: false,
  userInfo: {}
})

export const mutation = {
  setLogin (state, bool) {
    state.isLogin = bool
  },
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}
