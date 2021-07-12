<template>
    <input type="search" v-model="$store.state.searchTerm" placeholder="Search by character name">
    <button class="searchbtn" @click="searchCharacter" >Search</button>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    searchCharacter() {
      console.log(this.$store.state.searchTerm);
    },
  },
};
</script>

<style scoped>

input[type="search"] {
  border: none;
  whitespace: wrap;
  border-radius: 5px 5px 5px 5px;
  background: #E9E9E9;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.35em 0.75em;
  border: none;
  font-size: 1.1em;
  text-decoration: none;
  line-height: normal;
  max-height: 3em;
  margin: 0.35em 0.75em;
  flex: 2 0 250px;
}

input[type="search"]:focus {
  background: Thistle;
  color: white;
  letter-spacing: .1em;
  transition: background 400ms ease-in-out;
  outline: none;
}

button {
  flex: 1 0 90px;

  max-height: 3em;
  font-size: 1.1em;
  letter-spacing: .2em;
  text-transform: uppercase;
  border-radius: 0px 5px 5px 0px;
  background: silver;
  color: white;
  border: none;
  padding: 0.35em 0.75em;
  cursor: pointer;
  margin: 0.35em 0.75em;
}
button:hover {
  background: skyblue;
}
</style>
