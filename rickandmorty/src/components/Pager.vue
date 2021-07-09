<template>
  <button v-if="pagerInfo.prev" @click="prevPage">prev</button>
  <span>{{$store.state.currentPage}}</span>
  <button v-if="pagerInfo.next" @click="nextPage">next</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Pager',
  props: {
    pagerInfo: Object,
  },
  methods: mapActions([
    'prevPage',
    'nextPage',
  ]),
};
</script>

<style scoped>

</style>
