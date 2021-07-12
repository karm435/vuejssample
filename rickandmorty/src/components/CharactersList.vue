<template>
  <div class="container">
    <h1>Characters list</h1>
    <ul id="characters-list">
      <li v-for="character in $store.getters.filteredCharacters" :key="character.id">
        <CharacterCard :character="character"></CharacterCard>
      </li>
    </ul>

  </div>
</template>

<script>
import CharacterCard from './CharacterCard.vue';

export default {
  name: 'CharactersList',
  components: {
    CharacterCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  text-align: center;
}
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
