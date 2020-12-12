import Vue from 'vue';
import Vuex from 'vuex';

import players from './players';

import { generateId } from '@/utils/generateId';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    players,
    completedGameDays: [],
    currentGameDay: {
      teams: [
        {
          name: 'Команда 1',
          id: generateId(),
          playersIds: [],
        },
        {
          name: 'Команда 2',
          id: generateId(),
          playersIds: [],
        },
        {
          name: 'Команда 3',
          id: generateId(),
          playersIds: [],
        }
      ],
      completedGames: [],
      currentGame: null,
    },
  },
  mutations: {
    createPlayer(state, { name }) {
      state.players.push({ name, id: generateId() });
    },
    editPlayer(state, { name, id }) {
      const index = state.players.findIndex(player => player.id === id);
      state.players.splice(index, 1, { id, name });
    },
    deletePlayer(state, { id }) {
      state.players = state.players.filter(player => player.id !== id);
    },
    createGameDay(state, { teams }) {
      state.currentGameDay.teams = teams;
    },
  },
});

export default store;
