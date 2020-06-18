import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'https://us-central1-hospital-36c8f.cloudfunctions.net/patients'

function emptyPatient() {
  return {
    id: null,
    data: {
      name: '',
      email: ''
    }
  }
}

export default new Vuex.Store({
  state: {
    patients: [],
    currentPatient: emptyPatient()
  },
  mutations: {
    // Va a agarrar los pacientes y los metera en la data
    SET_PATIENTS(state, data) { state.patients = data },
    UPDATE_NAME(state, name) { state.currentPatient.data.name = name },
    UPDATE_EMAIL(state, email) { state.currentPatient.data.email = email },
    SET_EMPTY_PATIENT(state) {
      state.currentPatient.id = null;
      const base = emptyPatient()
      Object.keys(base.data).forEach(key => {
        state.currentPatient.data[key] = base.data[key]
      })
    }
  },
  actions: {
    // Llama a los pacientes por medio de la API y limpia el formulario
    setPatients({commit}) {
      axios.get(`${baseUrl}/patients`)
      .then((response) => {
        commit('SET_EMPTY_PATIENT')
        commit('SET_PATIENTS', response.data)
      })
    },
    // Agrega nuevo paciente por medio de la API y si sale bien, lo muestra debajo del paciente actual
    postPatient({dispatch, state}) {
      axios.post(`${baseUrl}/patient`, state.currentPatient.data)
      .then(() => {
        dispatch('setPatients')
      })
    },
    // Permite llenar los datos de los inputs haciendo conexión con la API y así permitir agregar pacientes
    updateName({commit}, name) {
      commit('UPDATE_NAME', name)
    },
    updateEmail({commit}, email) {
      commit('UPDATE_EMAIL', email)
    },
  },
  modules: {
  }
})
