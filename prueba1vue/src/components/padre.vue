<template>
  <b-container>
    <b-row>
      <H3>COMPONENTES: PADRE</H3>
	    <b-button @click="numeroPadre++">+</b-button>
      <hijo :numero="numeroPadre"></hijo>
	  padre:{{$store.state.count}}
	
    </b-row>

 <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="(fruta,index) in frutas" :key="fruta.id">
          {{fruta.nombre}}    
          <b-badge variant="primary" pill>{{fruta.cantidad}}</b-badge>
        </b-list-group-item>

  </b-container>
</template>

<script>
import hijo from "./hijo.vue";
import { mapState } from 'vuex'
export default {
  name: "padre",
  components: {
    hijo
  },
    computed: {
    ...mapState('tareas',['frutas'])
  },
  data: function() {
    return {
      numeroPadre: 10
    };
  }
};
</script>


<style scoped>
</style>