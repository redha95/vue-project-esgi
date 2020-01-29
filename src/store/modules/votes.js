

export default {
    namespaced:true,
    state: {
    },

    actions: {
   
      loadCafes( { commit } ){
        commit( 'setCafesLoadStatus', 2 );
      }
    },

    mutations: {
      setCafesLoadStatus( state, status ){
        state.cafesLoadStatus = status;
      },
    }
}