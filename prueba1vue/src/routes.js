import fotos from './components/fotos.vue'
import HelloWorld from "./components/HelloWorld.vue";
import clases from "./components/clases.vue";
import computed from "./components/computed.vue";
import padre from "./components/padre.vue";
import lista from "./components/lista.vue";
import DatosFirebase from "./components/DatosFirebase.vue";
import editar from "./components/editar.vue";
import crear from "./components/crear.vue";
import registro from "./components/registro.vue";
import ingreso from "./components/ingreso.vue";
import home from "./components/home.vue";
import axios from "./components/axios.vue";

import Vue from 'vue'
import VueRouter from 'vue-router';
var firebase = require("firebase/app");

Vue.use(VueRouter);

const router = new VueRouter({
      mode: 'history',
      routes: [
            { path: '/datosfirebase/:id_tarea', component: editar, name: 'editar' },
            { path: '/fotos/:id?', component: fotos, name: 'fotos' },
            { path: '/HelloWorld', component: HelloWorld, name: 'HelloWorld' },
            { path: '/clases', component: clases, name: 'clases' },
            { path: '/computed', component: computed, name: 'computed' },
            { path: '/padre', component: padre, name: 'padre' },
            { path: '/lista', component: lista, name: 'lista' },
            { path: '/datosfirebase', component: DatosFirebase, name: 'DatosFirebase' },
            { path: '/crear', component: crear, name: 'crear' },
            { path: '/registro', component: registro, name: 'registro' },
            { path: '/ingreso', component: ingreso, name: 'ingreso' },
            { path: '/axios', component: axios, name: 'axios' },
            { path: '/', component: home, name: 'home', meta: { requiresAuth: true } },

      ]
});


router.beforeEach((to, from, next) => {

      const rutaprotegida = to.matched.some(record => record.meta.requiresAuth);
      const user = firebase.auth().currentUser;

      // si la ruta es protegida y el usuario no esta protegido
      if (rutaprotegida === true && user === null) {
            next({ name: 'ingreso' })
      } else { // se va a la ruta exigida
            next()
      }

})


export default router;

