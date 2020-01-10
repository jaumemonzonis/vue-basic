<template>
  <b-container>

<b-row>
  <b-col>
   <H1>COMPUTED</H1>

   <H4>{{mensaje}}</H4>
  <H4>{{invertido}}</H4>
</b-col>
  <b-col>
   <b-progress class="mt-2" :max="10" show-value style="width:200px;">
      <b-progress-bar :value="contador" :class="{color}">{{contador}}%</b-progress-bar>
  
    </b-progress>
<b-button @click="contador++" :disabled="contador>=10">+</b-button>
<b-button @click="contador--" :disabled="contador<=0">-</b-button>
<span>{{contador}}</span>

</b-col>

  </b-row>
  </b-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      mensaje: 'texto computado',
      contador: 0
    };
  },
  computed: {
    invertido() {
     return this.mensaje.split('').reverse().join('');
    },
    color() {
      return {
'success': this.contador <=5,
'warning' : this.contador >5
      }
    }

  }

};
</script>


<style scoped>
</style>