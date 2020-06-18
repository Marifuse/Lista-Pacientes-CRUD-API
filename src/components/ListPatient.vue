<template>
  <div>
      <ul>
        <li v-for="patient in patients" :key="patient.id">
          {{ patient.data.name }} ||
          {{ patient.data.email }}
        </li>
      </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    // Se llama al mapeo de Acciones que se llaman en el index.js del store
    ...mapActions(['setPatients'])
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