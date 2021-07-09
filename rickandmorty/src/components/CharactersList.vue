<template>
  <div class="hello">
    <h1>Hellp</h1>
    <h2>total character count is {{characters?.length}}</h2>
  </div>
</template>

<script>
export default {
  name: 'CharactersList',
  props: {
    characters: [],
  },
};
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
