<template>
  <img :src="character.image">
  <div class="characterdetails">{{character.name}}</div>
  <div class="characterdetails">{{character.species}}</div>
  <div class="characterdetails">{{character.gender}}</div>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    character: Object,
  },
};
</script>

<style scoped>
.characterdetails {
  font-size: 2em;
}
</style>
