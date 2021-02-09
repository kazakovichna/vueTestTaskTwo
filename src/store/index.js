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
    fetchJsonData({commit}) {

      let fileJson = {}
      let p = new Promise((resolve) => {
        fileJson = require('../assets/data/test_json_2dlab.json')
        resolve()
      })

      p.then(() => {
        commit('setFileJson', fileJson)
      })
    },
    applyDataAct({ commit }, file) {
      console.log(file)
      console.log('Sorry but we cant edit a file without server\n I`ve spent three hours to get it')
      /*fs.writeFile('../assets/data/test_json_2dlab.json', file, (error) => {
        if (error) { throw error}
        this.fetchJsonData()
        console.log('okay')
      })*/
      commit( )
    }
  },
  getters: {
    getFileJson: s => s.fileJson
  }
})
