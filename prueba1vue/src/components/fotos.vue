<template>
  <b-container>
    <b-row>
      <h1>Galeria de fotos:</h1>
      <router-link :to="{name: fotos, params: {id: item}}" v-for="(item, index) of fotosArray" :key="index">
        <button>foto {{index+1}}</button>
      </router-link>

      <foto></foto>
        <button @click="home">HOME</button>
        <button @click="anterior">ANTERIOR</button>
        <button @click="siguiente">SIGUIENTE</button>
    </b-row>
  </b-container>
</template>

<script>
import foto from "@/components/foto.vue";
export default {
  name: "fotos",
  components: {
    foto
  },
  data: function() {
    return {
      fotosArray: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    home () {
      this.$router.push('/')
    },
    anterior () {
      this.$router.go(-1)
    },
    siguiente () {
       this.$router.go(1)
    },

  }
};
</script>


<style scoped>
</style>