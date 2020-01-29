import usersApi from '../../api/users'

export default {
  namespaced: true,
    state: {
      isLogged: false
    },

    actions: {
      login({ commit }, payload ){
          usersApi.login(payload.user)
          .then((response) => {
            commit('isSuccessfullyLogged' , {
              bearer: response.data.bearer,
              access_level: response.data.access_level,
              vm: payload.vm
            })
          }, (error) => {
            commit('hasFailedToLogged' , {
              status: error.response.status,
              vm: payload.vm
            })
          });
      },
      register({ commit }, payload){
          usersApi.register(payload.user)
          .then(() => {
            commit('isSuccessfullyRegister' , payload.vm)
        }, (error) => {
            commit('hasFailedToRegister' , { vm: payload.vm, error: error.response.data.msg })
          });
      }
    },
    mutations: {
      isSuccessfullyLogged( state, payload ){
        state.isLogged = true;
        localStorage.userToken = payload.bearer
        localStorage.accessLevel = payload.access_level
        payload.vm.$notify({
            group: 'foo',
            title: 'Bienvenue',
            type: 'success',
            duration:1000,
            text: 'Vous êtes connecté!'
        });
        setTimeout(function(){
          window.location.href = "/";
        }, 1000);
      },
      hasFailedToLogged(state, payload){
        state.isLogged = false;
        switch (payload.status) {
          case 404:
            payload.vm.$notify({
              group: 'foo',
              title: 'Erreur',
              type: 'error',
              duration:5000,
              text: "User not found"
            });
            break;
          case 400:
            payload.vm.$notify({
              group: 'foo',
              title: 'Erreur',
              type: 'error',
              duration:5000,
              text: "Wrong password"
            });
            break;
      }
    },
    isSuccessfullyRegister( state, vm){
      vm.$emit('registred', 'true')
      vm.$notify({
          group: 'foo',
          title: 'Felicitation',
          type: 'success',
          duration:5000,
          text: 'Vous êtes inscrit!'
      });
    },
    hasFailedToRegister(state, payload){
      payload.vm.$notify({
        group: 'foo',
        title: 'Erreur',
        type: 'error',
        duration:5000,
        text: payload.error
      });
    }
  }
}