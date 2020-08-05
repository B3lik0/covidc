<template>
  <v-app>
    <div>
      <v-toolbar dense dark color="green darken-4" class="pa-0">
        <v-layout align-center justify-end>
          <v-spacer /><v-spacer />
          <v-toolbar-title class="white--text">
            Fecha de actualizacion {{ fechaActualizacion }}</v-toolbar-title
          >
        </v-layout>
        <v-spacer />
      </v-toolbar>
    </div>
    <v-container>
      <v-card-group>
        <v-row>
          <v-col cols="12" style="width: auto;" >
            <v-row>
              <v-card
                v-for="(datos, estadoRep) in respuesta.State"
                :key="estadoRep"
                class="=pb-3 mb-3 pr-5 pl-5"
                style="width: 250px"
              >
                <v-card-title  class="justify-center">
                  <h5>{{ estadoRep }}</h5>
                </v-card-title>

                <v-card-subtitle
                  v-for="(infectados, keys) in datos"
                  :key="keys"
                >
                  <v-card class="white--text">
                    <h3 v-if="keys === 'infected'"><div class="red">Infectados</div></h3>
                    <h3 v-else="keys === 'deceased'"><div class="black">Muertes</div></h3>
                  </v-card>
                  {{ infectados }}
                </v-card-subtitle>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-card-group>
    </v-container>
  </v-app>
</template>

<script>
import Busqueda from "../services/Busqueda";
import helpers from "../plugins/helpers";
export default {
  name: "Busqueda",
  data() {
    return {
      respuesta: "",
      fechaActualizacion: null
    };
  },
  async mounted() {
    const res = await Busqueda.busqueda();
    this.respuesta = res.data.message;
    this.fechaActualizacion = helpers.fechaLocal(res.data.lastUpdatedAtApify);
    console.log(this.respuesta);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
