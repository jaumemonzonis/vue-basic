<template>
  <div>
    <h1>editar elemento firebase {{id}}</h1>

    <form @submit.prevent="editarTarea(tarea)">
      <input type="text" v-model="$v.tarea.nombre.$model" />
      <small v-if="!$v.tarea.nombre.required">campo requerido</small>
      <button type="submit" :disabled="!$v.tarea.nombre.required">Editar</button>
    </form>
    {{$v.tarea.nombre}}
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  name: "editar",
  data() {
    return {
      id: this.$route.params.id_tarea
    };
  },
  created() {
    this.getTarea(this.id);
  },
  methods: {
    ...mapActions(["getTarea", "editarTarea"])
  },
  computed: {
    ...mapState(["tarea"])
  },
  validations: {
    tarea: { nombre: { required } }
  }
};
</script>