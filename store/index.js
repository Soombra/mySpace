import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isLogin: false,
    userInfo: {}
  },
  mutation: {
    setLogin (state, bool) {
      state.isLogin = bool
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  }
})

export default () => {
  return store
}
