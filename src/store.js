import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loader: false,
    origin: 'origin',
    destination: 'destination'
  },
  mutations: {
    setLoader (state, payload) {
      state.loader = payload
    }
  },
  actions: {
    fetchToken ({ commit }, params) {
      commit('setLoader', true)
      return new Promise((resolve, reject) => {
        fetch(`http://localhost:8080/route`, {
          method: 'POST',
          body: JSON.stringify({
            origin: this.state.origin,
            destination: this.state.destination
          })
        }).then(res => res.json()
        ).then(data => resolve(data)
        ).catch(error => console.log(error))
      })
    },
    fetchRoute ({ commit }, { token }) {
      return new Promise((resolve, reject) => {
        fetch(`http://localhost:8080/route/${token}`
        ).then(res => res.json()
        ).then(data => {
          resolve(data)
          commit('setLoader', false)
        }).catch(error => console.log(error))
      })
    }
  }
})
