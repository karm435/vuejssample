<template>
  <div>
    <input type="text" v-model="keyword">
    <button class="searchbtn" @click="searchCharacter" >Search</button>
  </div>

</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    searchCharacter() {
      console.log(this.keyword);
    },
  },
};
</script>

<style scoped>
.searchbtn {
  margin: 5px;
}
</style>
