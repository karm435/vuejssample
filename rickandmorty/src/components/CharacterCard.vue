<template>
  <div class="character-card">
    <img :src="character.image">
    <div class="name">
      <a @click="characterClick(character.id)">{{character.name}}</a>
    </div>
    <div class="species">{{character.species}}</div>
    <div class="gender">{{character.gender}}</div>
  </div>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    character: Object,
  },
  methods: {
    characterClick(id) {
      console.log(id);
      this.$store.dispatch('showCharacterDetails', id);
    },
  },
};
</script>

<style scoped>
.character-card {
  font-size: 2em;
}

a:hover{
  color: orange;
  cursor: pointer;
}
</style>
