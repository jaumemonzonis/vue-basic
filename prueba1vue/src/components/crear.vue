<template>
  <div>
<h1>crear elemento firebase</h1>

<form @submit.prevent="crearTarea(nombre)">
  <input type="text" v-model.lazy="$v.nombre.$model" class="form-control" :class="{'is-invalid': $v.nombre.$error}" placeholder="Escribe una tarea">
  	<p class="text-danger" v-if="!$v.nombre.required">nombre requerido</p>
  <button type="submit" :disabled="$v.nombre.$invalid">crear</button>

</form>

  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
   name: 'crear',
   data(){
     return{
      nombre: ''
     }
   },

   methods:{
    ...mapActions(['crearTarea'])
  },
validations: {
		nombre: {required},
	}

}
</script>