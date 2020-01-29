import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import votes from './modules/votes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    votes
  }
})