import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    characters: [],
    currentPage: 1,
    pagingInfo: {},
    isModalDisplaying: false,
    selectedCharacter: {},
  },
  mutations: {
    load(state, data) {
      state.characters = data.results;
      state.pagingInfo = data.info;
    },
    nextPage(state, data) {
      state.currentPage += 1;
      state.characters = data.results;
      state.pagingInfo = data.info;
    },
    prevPage(state, data) {
      state.currentPage = state.currentPage === 1 ? 1 : state.currentPage - 1;
      state.characters = data.results;
      state.pagingInfo = data.info;
    },
    showCharacterDetails(state, character) {
      state.isModalDisplaying = !state.isModalDisplaying;
      state.selectedCharacter = character;
    },
    closeCharacterDetails(state) {
      state.isModalDisplaying = false;
    },
  },
  actions: {
    nextPage: async ({ commit, state }) => {
      if (state.pagingInfo.pages === state.currentPage) {
        return;
      }
      const response = await axios
        .get(`https://rickandmortyapi.com/api/character/?page=${state.currentPage + 1}`);
      console.log(response.data);
      commit('nextPage', response.data);
    },
    prevPage: async ({ commit, state }) => {
      const response = await axios
        .get(`https://rickandmortyapi.com/api/character/?page=${state.currentPage - 1}`);

      commit('prevPage', response.data);
    },
    load: async ({ commit }) => {
      const response = await axios
        .get('https://rickandmortyapi.com/api/character');
      commit('load', response.data);
    },
    showCharacterDetails: async ({ commit }, id) => {
      const response = await axios
        .get(`https://rickandmortyapi.com/api/character/${id}`);

      commit('showCharacterDetails', response.data);
    },
    closeCharacterDetails: ({ commit }) => {
      commit('closeCharacterDetails');
    },
  },
});

export default store;
