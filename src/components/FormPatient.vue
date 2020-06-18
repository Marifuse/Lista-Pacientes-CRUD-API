<template>
  <div class="text-center mt-5">
    <v-card class="pa-5 red lighten-5">
      <h1 class="text-center mb-5">Ingreso de Pacientes</h1>
        <v-text-field label="Nombre" type="text" :value="currentPatient.data.name" @input="updateName" outlined color="pink darken-1"/>
        <v-text-field label="Email" type="text" :value="currentPatient.data.email" @input="updateEmail" outlined color="pink darken-1"/>  
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="pink darken-1" dark @click="submitForm">{{ !!currentPatient.id ? 'Actualizar' : 'Crear' }}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['updateName', 'updateEmail', 'postPatient', 'updatePatient']),
    submitForm() {
      if (this.currentPatient.id) {
        //Si tiene id se llama a la funcion que actualiza los datos
        this.updatePatient(this.currentPatient.id)
      } else {
        this.postPatient()
      }
    }
  },
  computed: {
    ...mapState(['currentPatient'])
  },

}
</script>

<style>

</style>