<template>
  <div id="app">
    <router-link to="/" >home</router-link>
    <router-link to="/fotos" v-if="existeUsuario">FOTOS</router-link>
    <router-link to="/HelloWorld" v-if="existeUsuario">HelloWorld</router-link>
    <router-link to="/clases" v-if="existeUsuario">clases</router-link>
    <router-link to="/padre" v-if="existeUsuario">padre</router-link>
    <router-link to="/lista" v-if="existeUsuario">lista</router-link>
    <router-link to="/computed" v-if="existeUsuario">computed</router-link>
    <router-link to="/datosfirebase" v-if="existeUsuario">datosfirebase</router-link>
    <router-link to="/axios" v-if="existeUsuario">aixos</router-link>
    <router-link :to="{ name: 'registro' }" v-if="!existeUsuario">registro</router-link>
    <router-link :to="{ name: 'ingreso' }" v-if="!existeUsuario">INGRESO</router-link>
   <a href="/" @click="cerrarSesion" v-if="existeUsuario">cerrar sesión</a>

    <router-view></router-view>
  </div>
</template>

<script>
import home from "./components/home.vue";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "app",
  components: {
    home
  },
    methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
  ...mapGetters(['existeUsuario'])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}

a {
  padding: 10px;
}
</style>
