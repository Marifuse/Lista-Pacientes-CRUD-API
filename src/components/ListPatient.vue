<template>
  <div>
      <ul>
        <li :key="patient.id" v-for="patient in patients">
          {{patient.data.name}}
          {{patient.data.email}}
        </li>
      </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    // 
    ...mapActions(['setPatients'])
  },
  computed: {
    ...mapState(['patients'])
  },
  created() {
    this.setPatients()
  },
}
</script>

<style>

</style>