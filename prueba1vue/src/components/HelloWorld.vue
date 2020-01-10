<template>
  <b-container>
   



    <b-row>
    
    <h1 v-for="fruta in frutas" :class="'p-1'" :key="fruta.id">
      {{fruta.nombre}}-{{fruta.cantidad}}
      <span v-if="fruta.cantidad === 0">- Sin stock</span>
      <input type="number" v-model.number="fruta.cantidad" />
    </h1>

    <input type="text" v-model="nuevaFruta" @keyup.enter="agregarFruta" />
    <button @click="agregarFruta"></button>
    <h4>TOTAL: {{total}}</h4>
 
</b-row>

  </b-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      titulo: "dddd",
      frutas: [
        { nombre: "Pera", cantidad: 10 },
        { nombre: "Manzana", cantidad: 0 },
        { nombre: "Limon", cantidad: 5 }
      ],
      nuevaFruta: "",
      total: 0,
      fondo: 'bg-warning',
      color: false,
      mensaje: 'texto computado',
      contador: 0
    };
  },
  methods: {
    agregarFruta() {
      this.frutas.push({
        nombre: this.nuevaFruta,
        cantidad: 0,
      });
    }
  },
  computed: {
    sumarFruta() {
      this.total = 0;
      for (fruta of this.frutas) {
        this.total = this.total + fruta.cantidad;
      }
      return this.total;
    },
    

  }

};
</script>


<style scoped>
</style>