import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { getUserInfoAPI } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '', // 用户token
    userInfo: {} // 用户信息对象
  },
  getters: {
  },
  mutations: {
    // 把token更新到store中
    updateToken (state, val) {
      state.token = val
    },
    // 把用户信息更新到store中
    updateUserInfo (state, val) {
      state.userInfo = val
    }
  },
  actions: {
    async getUserInfoActions (store) {
      const res = await getUserInfoAPI()
      store.commit('updateUserInfo', res.data.data)
    }
  },
  modules: {
  },
  plugins: [createPersistedState()] // 注入持久化插件
})

// vuex默认保存在内存中
// npm i vuex-persistedstate@3.2.1 --legacy-peer-deps
