import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = process.env.VUE_APP_BACKEND_URL

export default new Vuex.Store({
  state: {
    origin: '',
    destination: '',
    total_distance: null,
    total_time: null,
    path_coords: [],
    error_message: null,
    loader: false
  },
  getters: {
    origin_coords (state) {
      return state.path_coords[0]
    },
    destination_coords (state) {
      return state.path_coords.slice(-1)[0]
    }
  },
  mutations: {
    setLoader (state, payload) {
      state.loader = payload
    },
    clearInput (state, textInput) {
      state[textInput] = ''
    },
    updateInput (state, { textInput, payload }) {
      state[textInput] = payload
    },
    updateErrorMessage (state, payload) {
      state.error_message = payload
    },
    updateInfo (state, { textInfo, payload }) {
      state[`total_${textInfo}`] = payload
    },
    updatePathCoordinates (state, payload) {
      state.path_coords = payload
    }
  },
  actions: {
    FETCH_TOKEN ({ commit, dispatch }) {
      commit('setLoader', true)
      return new Promise((resolve) => {
        fetch(`${url}/route`, {
          method: 'POST',
          body: JSON.stringify({
            origin: this.state.origin,
            destination: this.state.destination
          })
        }).then(response => {
          if (!response.ok) {
            dispatch('FETCH_TOKEN')
            throw new Error(`HTTP Error: ${response.status}`)
          }
          return response.json()
        }).then(data => {
          dispatch('FETCH_ROUTE', data.token)
        })
      })
    },
    FETCH_ROUTE ({ commit, dispatch }, token) {
      return new Promise((resolve, reject) => {
        fetch(`${url}/route/${token}`
        ).then(response => {
          if (!response.ok) {
            dispatch('FETCH_ROUTE', token)
            console.log('HTTPS status', response.status)
          }
          return response.json()
        }).then(response => {
          if (response.status === 'success') {
            let paths = []
            response.path.forEach(i => {
              paths.push({ lat: parseFloat(i[0]), lng: parseFloat(i[1]) })
            })
            commit('updatePathCoordinates', paths)
            commit('updateInfo', { textInfo: 'distance', payload: response.total_distance })
            commit('updateInfo', { textInfo: 'time', payload: response.total_time })
            commit('setLoader', false)
          } else if (response.status === 'failure') {
            commit('updateErrorMessage', response.error)
            commit('setLoader', false)
          } else {
            dispatch('FETCH_ROUTE', token)
          }
        }).then(data => resolve(data))
      })
    }
  }
})
