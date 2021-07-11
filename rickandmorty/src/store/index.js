import { createStore } from 'vuex';
import axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api/character';

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
    nextPage: async ({ commit, state }, router) => {
      if (state.pagingInfo.pages === state.currentPage) {
        return;
      }
      const response = await axios
        .get(`${baseUrl}/?page=${state.currentPage + 1}`);

      const data = { ...router.query };
      data.page = state.currentPage + 1;
      router.push({ name: 'App', query: data });

      commit('nextPage', response.data);
    },
    prevPage: async ({ commit, state }, router) => {
      const response = await axios
        .get(`${baseUrl}/?page=${state.currentPage - 1}`);

      const data = { ...router.query };
      data.page = state.currentPage - 1;
      router.push({ name: 'App', query: data });

      commit('prevPage', response.data);
    },
    load: async ({ commit }, currentPage) => {
      let url = baseUrl;
      if (currentPage) {
        url += `/?page=${currentPage}`;
      }
      const response = await axios
        .get(url);
      commit('load', response.data);
    },
    showCharacterDetails: async ({ commit }, id) => {
      const response = await axios
        .get(`${baseUrl}/${id}`);

      commit('showCharacterDetails', response.data);
    },
    closeCharacterDetails: ({ commit }) => {
      commit('closeCharacterDetails');
    },
  },
});

export default store;
