<template>
  <div class="mt-10">
    <h2 class="text-center">Lista de Pacientes</h2>
    <v-simple-table fixed-header class="pa-5 d-flex justify-center">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">Email</th>
            <th class="text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="patient in patients" :key="patient.id">
            <td>{{ patient.data.name }}</td>
            <td>{{ patient.data.email }}</td>
            <td>
              <v-btn color="pink darken-1" fab small dark @click="editPatient(patient.id)"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn class= 'mx-2' color="purple darken-4" fab small dark @click="removePatient(patient.id)"><v-icon>mdi-delete</v-icon></v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    // Se llama al mapeo de Acciones que se llaman en el index.js del store
    ...mapActions(['setPatients', 'deletePatient', 'setCurrentPatient']),
    removePatient(id) {
      let confirmation = confirm("¿Estás seguro de querer BORRAR el Paciente?")
      if (confirmation) {
        this.deletePatient(id)
        alert("Paciente Eliminado Exitosamente")
      }  
    },
    editPatient(id) {
      //Establecer juguete actual en base al id entregado
      this.setCurrentPatient(id)
    }
  },
  computed: {
    // Se llama al estado
    ...mapState(['patients'])
  },
  created() {
    this.setPatients()
  },
}
</script>

<style>

</style>