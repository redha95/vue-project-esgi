<template>

  <div class="hello">
		<img alt="Vue logo" class="m-auto" src="../assets/logo.png">
    <p>
      Bienvenue sur le site du vote des budgets participatifs
      <a href="/allvotes">Liste des propositions</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
