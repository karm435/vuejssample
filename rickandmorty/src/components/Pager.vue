<template>
  <div class="pager-container">
    <button class="pager-button" :disabled="!$store.state.pagingInfo.prev"
            @click="prevPage($router)">prev</button>
    <div class="page-info">
      <span>{{$store.state.currentPage}} of {{$store.state.pagingInfo.pages}}</span>
    </div>
    <button class="pager-button" v-if="$store.state.pagingInfo.next"
            @click="nextPage($router)">next</button>
  </div>
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
.pager-container {
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.page-info {
  height: 35px;
  width: 85px;
  margin: 0 15px;
  font-size: large;
  font-weight: bold;
  line-height: 35px;
  text-align: center;
  border: 3px solid #000;
  border-radius: 35px;
  overflow: hidden;
}

.pager-button {
  padding: 15px;
  font-size: medium;
  background: #4AAE9B;
  border: 3px solid #000;
  border-radius: 35px;
  overflow: hidden;
}

.pager-button:hover {
  opacity: 0.9;
}
</style>
