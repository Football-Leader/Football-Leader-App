import MenuView from '@/components/MenuView';
import PlayersView from '@/components/PlayersView';
import GameFormSetup from '@/components/GameFormSetup';
import GameForm from '@/components/GameForm';

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: MenuView,
  },
  {
    path: '/players',
    name: 'players',
    component: PlayersView,
  },
  {
    path: '/game',
    name: 'game',
    component: GameFormSetup,
  },
  {
    path: '/process',
    name: 'process',
    component: GameForm,
  },
];

export const router = new VueRouter({ routes, mode: 'history' });
