<template>
  <v-layout>
    <v-flex xs12>
      <v-card>{{moneda}}</v-card>
      <input type="text" v-model="fecha" v-on:keyup="getDolar(fecha)">
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  name: "axios",
  data: function() {
    return {
      fecha: 0,
      moneda: ''
    };
  },
  methods: {
  async getDolar(fecha){
    try {
      let datos = await axios.get('https://mindicador.cl/api/euro')
    console.log(datos.data.serie[fecha].valor)
    this.moneda = datos.data.serie[fecha].valor
    } catch (error) {
        console.log(error)
    }

}
  }
};
</script>


<style scoped>
</style>