import { reactive } from 'vue';

const store = {
  state: reactive({
    characters: [],
    currentPage: 0,
  }),
  mutations: {
    nextPage(state) {
      // eslint-disable-next-line no-plusplus
      state.currentPage++;
    },
  },
};

export default store;
