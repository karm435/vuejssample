<template>
  <SearchBar></SearchBar>
  <Pager></Pager>
  <CharactersList/>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import CharactersList from './components/CharactersList.vue';
import Pager from './components/Pager.vue';

export default {
  name: 'App',
  components: {
    CharactersList,
    Pager,
    SearchBar,
  },
  async mounted() {
    await this.$store.dispatch('load');
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
