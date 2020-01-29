<template>
    <div id="header">
        <div id="app-name"><a href="/">Votes</a></div>
        <div class="header-nav">
          <div v-if="isNotLogged">
            <a v-if="isNotLogged" class="header-item" id="auth-button" href="/account">Se connecter / S'inscrire</a>
          </div>
           <div v-else>
              <a class="header-item" href="/allVotes">Mes votes</a>
              <a v-if="isAdmin" class="header-item" href="/createVote">Creer une proposition</a>
              <a v-if="isAdmin" class="header-item" href="/newuser">Creer un utilisateur</a>
              <a class="header-item" id="auth-button" href="/account">Mon compte</a>
              <button class="px-4 py-1 text-white font-light ml-3 tracking-wider bg-red-500 rounded"  v-on:click="disconnect">Se deconnecter</button>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  components: {
  },
  data(){
    return{
        isAdmin: localStorage.getItem("accessLevel") == "1", // en attendant  
        isNotLogged: localStorage.getItem("userToken") == null
    }
  },
  methods:{
     disconnect:function(){
            localStorage.removeItem("userToken");
            this.isNotLogged = true;
      }
  }
}
</script>

<style>
#auth-button{
    background-color: #5ab79b;
    background-color: #5ab79b;
    padding: 10px;
    border-radius: 10px;
}

#app-name{
    float:left;
    font-size: 24px;
    color:white;
}

#header{
  background-color: #22485e;
  padding:15px;
  font-weight: bold;
  text-align: right;
  margin-bottom: 20px;
}

.header-item{
    text-decoration: none;
    color: white;
    margin: 30px;
    border-color: white;
}
</style>
