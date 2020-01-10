import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './routes'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)

var firebase = require("firebase/app");

require("firebase/auth");


Vue.config.productionTip = false

// BootstrapVue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    store.dispatch('detectarUsuario',{email: user.email, uid: user.uid})
    // ...
  } else {
    // User is signed out.
     store.dispatch('detectarUsuario',null)
  }

new Vue({
  render: h => h(App),
  store,
  Vuetify,
  router
}).$mount('#app')


});

Vue.use(BootstrapVue);




