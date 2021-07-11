<template>
  <button v-if="$store.state.pagingInfo.prev" @click="prevPage($router)">prev</button>
  <span>{{$store.state.currentPage}} of {{$store.state.pagingInfo.pages}}</span>
  <button v-if="$store.state.pagingInfo.next"
          @click="nextPage($router)">next</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Pager',
  methods: mapActions([
    'prevPage',
    'nextPage',
  ]),
};
</script>

<style scoped>

</style>
