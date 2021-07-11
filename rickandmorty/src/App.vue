<template>
  <SearchBar></SearchBar>
  <Pager></Pager>
  <CharactersList/>
  <CharacterDetailsPopup v-show="$store.state.isModalDisplaying"
                         :selected-character="$store.state.selectedCharacter">
  </CharacterDetailsPopup>
</template>

<script>
import CharacterDetailsPopup from '@/components/CharacterDetailsPopup.vue';
import SearchBar from '@/components/SearchBar.vue';
import CharactersList from './components/CharactersList.vue';
import Pager from './components/Pager.vue';

export default {
  name: 'App',
  components: {
    CharacterDetailsPopup,
    CharactersList,
    Pager,
    SearchBar,
  },
  async created() {
    console.log('route', this.$route.params);
  },
  async mounted() {
    console.log(this.$route.query.page);
    const currentPage = parseInt(this.$route.query.page, 10) || 1;
    await this.$store.dispatch('load', currentPage);
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
