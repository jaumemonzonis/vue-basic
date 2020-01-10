<template>
  <div>
    <h1>Lista de tareas</h1>

    <ul class="list-group mt-5">
      <li class="list-group-item" 
      v-for="tarea of tareas" :key="tarea.id">
        {{tarea.id}} - {{tarea.nombre}}
        <router-link :to="{name: 'editar', params: {id_tarea: tarea.id}}"><button>editar</button></router-link>
          <button @click="eliminarTareas(tarea.id)">ELIMINAR</button>
    
      </li>
      <router-link to="/crear">
      <button>CREAR</button>
       </router-link>
      <h4 @click="getcountTareas">count tareas {{countTareas}}</h4>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'DatosFirebase',
  methods:{
    ...mapActions(['getTareas','eliminarTareas','getcountTareas']),
  },
  created(){
    this.getTareas()
  },
  computed:{
    ...mapState(['tareas','countTareas'])
  }
}
</script>