<template>
  <v-app>
    <v-app-bar
      app
      color="pink darken-4"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Hospital UCCH</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <div>
        <v-container>
          <v-row>
            <v-col cols="12" sm="10" md="8"  class="mx-auto">
              <v-overlay :value="loading">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
              </v-overlay>
              <FormPatient/>
              <ListPatient/>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import FormPatient from './components/FormPatient';
import ListPatient from './components/ListPatient';

import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
    FormPatient,
    ListPatient
  },
  computed: {
    ...mapState(['loading'])
  }
};
</script>
