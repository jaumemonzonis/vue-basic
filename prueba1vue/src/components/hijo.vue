<template>
  <b-container>
    <b-row>
      <H3>COMPONENTES: HIJO</H3>
      <span>{{numero}}</span>
      <b-button @click="increment">+</b-button>
	   <b-button @click="decrement(2)">-</b-button>
      hijo forma inicial:{{$store.state.count}}
      hijo con mapState:{{count}}
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  name: "hijo",
  props: ["numero"],
  computed: {
    ...mapState(['count'])
  },
   methods: {
    ...mapMutations([
	  'increment',
	  'decrement'
    ])
  }
};
</script>


<style scoped>
</style>