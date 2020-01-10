<template>
  <b-container>
    <b-row>
      <b-list-group>
        <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="(fruta,index) in frutas" :key="fruta.id" @click="incrementFruta(index)">
          {{fruta.nombre}}    
          <b-badge variant="primary" pill>{{fruta.cantidad}}</b-badge>
        </b-list-group-item>
      </b-list-group>
       <b-button @click="resetFruta">RESET FRUTA</b-button>
       
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  name: "lista",
   computed: {
    ...mapState('tareas',['frutas'])
  },
  methods: {
    ...mapMutations('tareas',['incrementFruta','resetFruta'])
  }
   

};
</script>


<style scoped>
</style>