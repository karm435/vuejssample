<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <CharactersList msg="{{this.characters}}"/>
</template>

<script>
import axios from 'axios';
import CharactersList from './components/CharactersList.vue';

export default {
  name: 'App',
  data() {
    return {
      pagingInfo: null,
      characters: [],
    };
  },
  components: {
    CharactersList,
  },
  mounted() {
    console.log('calling api');
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        console.log(response.data);
        this.characters = response.data.results;
        this.pagingInfo = response.data.info;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
