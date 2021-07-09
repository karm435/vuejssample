<template>
  <Pager :pager-info="pagingInfo"></Pager>
  <CharactersList :characters="characters"/>
</template>

<script>
import axios from 'axios';
import CharactersList from './components/CharactersList.vue';
import Pager from './components/Pager.vue';

export default {
  name: 'App',
  data() {
    return {
      pagingInfo: {},
      characters: [],
    };
  },
  components: {
    CharactersList,
    Pager,
  },
  mounted() {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((response) => {
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
