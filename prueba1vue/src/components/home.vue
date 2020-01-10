<template>
  <div>
    <h1>home</h1>
    {{usuario}}
    <div>
      <h1>Lista de tareas</h1>

      <form @submit.prevent="buscador(texto)">
        <input type="text" v-model="texto" placeholder="Buscar..." v-on:keyup="buscador(texto)" />
      </form>

      <ul class="list-group mt-5" v-if="!cargaSpiner">
        <li class="list-group-item" v-for="tarea of tareas" :key="tarea.id">
          {{tarea.id}} - {{tarea.nombre}}
          <router-link :to="{name: 'editar', params: {id_tarea: tarea.id}}">
            <button>editar</button>
          </router-link>
          <button @click="eliminarTareas(tarea.id)">ELIMINAR</button>
        </li>
        <router-link to="/crear">
          <button>CREAR</button>
        </router-link>
      </ul>

      <ul class="list-group mt-5" v-if="!cargaSpiner">
        <li class="list-group-item" v-for="tarea of arrayFiltrador" :key="tarea.id">
          {{tarea.id}} - {{tarea.nombre}}
          <router-link :to="{name: 'editar', params: {id_tarea: tarea.id}}">
            <button>editar</button>
          </router-link>
          <button @click="eliminarTareas(tarea.id)">ELIMINAR</button>
        </li>
        <router-link to="/crear">
          <button>CREAR</button>
        </router-link>
      </ul>

      {{cargaSpiner}}
      <b-spinner label="Spinning" v-if="cargaSpiner"></b-spinner>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "registro",
   data(){
     return{
      texto: ''
     }
   },
  computed: {
    ...mapState(["usuario", "tareas", "cargaSpiner"]),
     ...mapGetters(["arrayFiltrador"])
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTareas", "buscador"])
  },
  created() {
    this.getTareas();
  }
};
</script>

