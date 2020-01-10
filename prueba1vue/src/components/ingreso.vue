<template>
  <div>
<h1>INGRESO DE USUARIOS</h1>
	
<form @submit.prevent="ingresoUsuario({email: email, pass: pass})">
	<input type="email" v-model.lazy="$v.email.$model" class="form-control" :class="{'is-invalid': $v.email.$error}" placeholder="Escribe un email">
	<p class="text-danger" v-if="!$v.email.email">Este correo no es correcto</p>
	<p class="text-danger" v-if="!$v.email.required">Correo requerido</p>
	<input type="password" v-model.lazy="$v.pass.$model" class="form-control" placeholder="Escribe una contraseña">
		<p class="text-danger" v-if="!$v.pass.minLength">Minimo 6 caracteres</p>
		<p class="text-danger" v-if="!$v.pass.required">Contraseña requerido</p>
	<button type="submit" :disabled="$v.email.$invalid || cargaSpiner">acceder</button>
		<span>{{$v.email}}</span>
			<span>{{$v.pass}}</span>
</form>



  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import { required,email,minLength } from 'vuelidate/lib/validators'
export default {
   name: 'ingreso',
   data(){
	   return{
		   email: '',
		   pass:''
	   }
	 },
	 methods:{
    ...mapActions(['ingresoUsuario'])
	},
	 computed:{
	...mapState(['error','cargaSpiner']),},
	validations: {
		email: {required,email},
		pass: { required, minLength: minLength(6)}
	}

}
</script>