export default {
	namespaced: true,
	state: {
		frutas: [
			{ nombre: "Pera", cantidad: 10 },
			{ nombre: "Manzana", cantidad: 0 },
			{ nombre: "Limon", cantidad: 5 }
		],
	},
	mutations: {
		incrementFruta(state, index) {
			state.frutas[index].cantidad++
		},
		resetFruta(state) {
			for (var i = 0; i < state.frutas.length; i += 1) {
				state.frutas[i].cantidad = 0;
			}
		}
	},
	actions: {
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

	},
	getters: {
	},
}