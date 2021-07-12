<template>
  <div class="character-card">
    <img  class="character-image" :src="character.image">
    <div class="character-details">
      <a @click="characterClick(character.id)" class="character-name">{{character.name}}</a>
      <div class="species"><span class="heading">Species:</span> {{character.species}}</div>
      <div class="gender"><span class="heading">Gender: </span>{{character.gender}}</div>
    </div>
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
  font-size: 1.5em;
  display: grid;
  border-radius: 7px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
  margin: 7px;
}

.character-image {
  width: 100%;
  height: 100%;
  border-radius: 7px 7px 0 0;
}

.character-details {
  padding-left: 7px;
  text-align: left;
}

.character-name {
  font-weight: bold;
}

.heading {
  color: gray;
}

a:hover{
  color: orange;
  cursor: pointer;
}
</style>
