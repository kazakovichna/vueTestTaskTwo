import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fileJson: {}
  },
  mutations: {
    setFileJson(state, file) {
      state.fileJson = file
    }
  },
  actions: {
    async fetchJsonData({commit}) {
      // Here is Gonna be APi request but we are local today
      /////////////
      /* \{^_^}/ */
      /////////////
      let fileJson

      const p = new Promise(function (resolve) {
        fileJson = require('../assets/data/test_json_2dlab.json')
        setTimeout(() => {
          console.log('setTimeOut Done!')
        }, 500)
        resolve()
      })

      p.then(() => {
        commit('setFileJson', fileJson)
      })
    }
  },
  getters: {
    getFileJson: s => s.fileJson
  }
})
