import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'
import routes from './routes';
import VueRouter from 'vue-router';
import tareas from './modules/tareas'
var firebase = require("firebase/app");

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    texto: '',
    error: '',
    cargaSpiner: false,
    tareas: [],
    tarea: { nombre: '', id: '' },
    count: 1,
    countTareas: 0
  },
  mutations: {
    setCountTareas (state) {
      state.countTareas = state.size
    },
    setUsuario(state, payload) {
      state.usuario = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    increment(state) {
      state.count++
    },
    decrement(state, n) {
      state.count -= n
    },
    setTareas(state, tareas) {
      state.tareas = tareas
    }
    ,
    setTarea(state, tarea) {
      state.tarea = tarea
    },
    eliminarTareas(state, id) {
      state.tareas = state.tareas.filter(doc => {
        return doc.id != id
      })
    },
    cargaSpiner(state, payload) {
      state.cargaSpiner = payload
    }
  },
  actions: {

    getcountTareas({ commit, state }){
      const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).get()
        .then(snapshot => {
          state.size= snapshot.size
            console.log(state.size);   
        })
      commit('setCountTareas')
    },

    buscador({ commit, state }, payload) {
      console.log(payload);
      state.texto= payload.toLowerCase()
    },     
    getTareas({ commit }) {
      commit('cargaSpiner', true)
      const tareas = [];
      const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            // console.log(doc.id);
            //console.log(doc.data());
            let tarea = doc.data();
            tarea.id = doc.id
            tareas.push(tarea)
          })
        })
      
  setTimeout(() => { 
        commit('cargaSpiner', false)
       }, 1000);
    
      commit('setTareas', tareas)
    },
    getTarea({ commit }, id) {
      const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).doc(id).get()
        .then(doc => {
          //console.log(doc.data());
          let tarea = doc.data();
          tarea.id = doc.id
          commit('setTarea', tarea)
        })
    },
    editarTarea({ commit }, tarea) {
      commit('cargaSpiner', true)
      const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).doc(tarea.id).update({
        nombre: tarea.nombre
      })
        .then(() => {
          routes.push({ name: 'home' })
          commit('cargaSpiner', false)
          console.log('edicion correcta');
        })

    },
    crearTarea({ commit }, nombre) {
      const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).add({
        nombre: nombre
      })
        .then(doc => {
          console.log(doc.id);
          routes.push({ name: 'home' })
        })

    },
    eliminarTareas({ commit }, id) {
      const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).doc(id).delete()
        .then(() => {
          console.log('tarea eliminada');
          commit('eliminarTareas', id)
        })

    },
    crearUsuario({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass)
        .then(res => {
          console.log(res.user.email);
          commit('setUsuario', { email: res.user.email, pass: res.user.uid })

          // crear una tarea al crear un usuario
          db.collection(res.user.email).add({
            nombre: 'Tarea de ejemplo inicio'
          })
            .then(doc => {
              console.log(doc.id);
              routes.push({ name: 'home' })
            })

        })
        .catch(err => {
          console.log(err.message);
          commit('setError', err.message)
        })
    },
    ingresoUsuario({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
        .then(res => {
          console.log('accedido');
          commit('setUsuario', { email: res.user.email, pass: res.user.uid })

        })
        .catch(err => {
          console.log(err.message);
          commit('setError', err.message)
        })
    },
    detectarUsuario({ commit }, payload) {
      if (payload != null) {
        commit('setUsuario', { email: payload.email, pass: payload.uid })
      } else {
        commit('setUsuario', null)
      }
    },
    cerrarSesion({ commit }) {
      firebase.auth().signOut()
      commit('setUsuario', null)
      console.log('sesión cerrada');
    }

  },
  getters: {
    existeUsuario(state) {
      if (state.usuario === null || state.usuario === '' || state.usuario === undefined) {
        return false;
      } else {
        return true;
      }
    },
        arrayFiltrador(state) {
      let arregloFiltrado = []
          for (let tarea of state.tareas) {
        let nombre = tarea.nombre.toLowerCase();
        if (nombre.indexOf(state.texto) >= 0) {
    arregloFiltrado.push(tarea)
  }
} 
  return arregloFiltrado; 
 }

},
modules:{
  tareas
}

})