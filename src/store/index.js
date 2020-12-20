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
      teams: [],
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
    initFirstGame(state, { game }) {
      state.currentGameDay.currentGame = game;
    },
    completeTheCurrentGame(state) {
      const completedGame = state.currentGameDay.currentGame;
      state.currentGameDay.completedGames.push(completedGame);
      const winnerId = completedGame.firstTeam.goals.length > completedGame.secondTeam.goals.length
        ? completedGame.firstTeam.id
        : completedGame.secondTeam.id;

      const playedOnceId = () => [completedGame.firstTeam.id, completedGame.secondTeam.id].filter((teamId) => {
        const previouslyCompletedGame = state.currentGameDay.completedGames[state.currentGameDay.completedGames.length - 2];
        return !(previouslyCompletedGame.firstTeam.id === teamId || previouslyCompletedGame.secondTeam.id === teamId);
      })[0];

      state.currentGameDay.currentGame = {
        firstTeam: {
          id: state.currentGameDay.completedGames.length === 1 ? winnerId : playedOnceId(),
          goals: [],
        },
        secondTeam: {
          id: state.currentGameDay.teams.filter(({ id }) => id !== completedGame.firstTeam.id && id !== completedGame.secondTeam.id)[0].id,
          goals: [],
        },
      };
    },
  },
});

export default store;
