<template>
  <b-container>
    <b-row>

 <div :class="['p-2', fondo]">
    <span>clase que cambia con el input. la clase es una variable.</span>
 </div>
<input type="text" v-model="fondo"/>

 <div :class="{'bg-info': color, 'bg-success': !color}">
    <span>Si color es true se añade success. si es false bg info.</span>
 </div>
   <b-button @click=" color = !color">Button</b-button>
</b-row>
  </b-container>
</template>

<script>
export default {
  name: "clases",
  data: function() {
    return {
    
      fondo: 'bg-warning',
      color: false,
      mensaje: 'texto computado',
      contador: 0
    };
  }

};
</script>


<style scoped>
</style>