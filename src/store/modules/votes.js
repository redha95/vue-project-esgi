import votesApi from '../../api/votes'

export default {
    namespaced:true,
    state: {
    },

    actions: {
      getvotes({commit}, payload) {
        votesApi.getvotes()
        .then((response) => {
          commit('voteList' , {
            result: response,
            vm: payload.vm
          })
        }, (error) => {
          commit('hasFailed' , { status: error.response.status, vm: payload.vm, error: error.response.data.msg })
        });
      },
      getvote({commit}, payload) {
        votesApi.getvote(payload.uuid)
        .then((response) => {
          commit('vote' , {
            result: response,
            vm: payload.vm
          })
        }, (error) => {
          commit('hasFailed' , { status: error.response.status, vm: payload.vm, error: error.response.data.msg })
        });
      },
      create({commit}, payload) {
        votesApi.createVote(payload.vote)
        .then((result) =>  {
          commit('voteCreation',{
            vote: result,
            vm: payload.vm
          })
        }, (error) => {
          commit('hasFailed' , { status: error.response.status, vm: payload.vm, error: error.response.data.msg })
        });
      },
      updatevote({commit}, payload) {
        votesApi.updateVote(payload.vote,payload.uuid)
        .then(() =>  {
          commit('voteUpdate',{
            vote: payload.vote,
            uuid: payload.uuid,
            vm: payload.vm
          })
        }, (error) => {
          commit('hasFailed' , { status: error.response.status, vm: payload.vm, error: error.response.data.msg })
        });
      },
      deletevote({commit}, payload) {
        votesApi.deleteVote(payload.uuid)
        .then(() =>  {
          commit('voteDelete',{
            uuid: payload.uuid,
            vm: payload.vm
          })
        }, (error) => {
          commit('hasFailed' , { status: error.response.status, vm: payload.vm, error: error.response.data.msg })
        });
      }
    },

    mutations: {
      voteList( state, payload ){
        payload.vm.votes = payload.result.data
      },
      vote( state, payload ){
        payload.vm.vote = payload.result.data
      },
      voteCreation( state, payload ){
        payload.vm.$notify({
          group: 'foo',
          title: 'Succès',
          type: 'success',
          duration:2000,
          text: 'Vous venez de créer une proposition!'
        });
        payload.vm.$router.push({ name: 'allVotes' });
      },
      voteUpdate( state, payload ){
        if(payload.vote != {}){
          payload.vm.$notify({
            group: 'foo',
            title: 'Succès',
            type: 'success',
            duration:5000,
            text: 'Vous venez de modifier une proposition!'
          });
        } else {
          payload.vm.$notify({
            group: 'foo',
            title: 'Succès',
            type: 'success',
            duration:5000,
            text: 'Vous venez de voter pour une proposition!'
          });
        }
        payload.vm.$router.push({ name: 'VoteDetails', params: { UUID: payload.uuid }})
      },
      voteDelete( state, payload ){
        payload.vm.$notify({
          group: 'foo',
          title: 'Succès',
          type: 'success',
          duration: 2000,
          text: 'Vous venez de supprimer une proposition!'
        });
        payload.vm.$router.push({ name: 'allVotes' });
      },
      hasFailed(state, payload){
        state.isLogged = false;
        switch (payload.status) {
          case 401:
            payload.vm.$notify({
              group: 'foo',
              title: 'Erreur',
              type: 'error',
              duration:5000,
              text: "Unauthorized"
            });
            break;
          case 403:
            payload.vm.$notify({
              group: 'foo',
              title: 'Erreur',
              type: 'error',
              duration:5000,
              text: "Forbidden"
            });
            break;
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
              text: payload.error
            });
            break;
        }
      },
    }
}