import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'https://us-central1-hospital-36c8f.cloudfunctions.net/patients'

export default new Vuex.Store({
  state: {
    patients: []
  },
  mutations: {
    // Va a agarrar los pacientes y los metera en la data
    SET_PATIENTS(state, data) { state.patients = data }
  },
  actions: {
    // 
    setPatients({commit}) {
      axios.get(`${baseUrl}/patients`)
      .then((response) => {
        commit('SET_PATIENTS', response.data)
      })
    }
  },
  modules: {
  }
})
