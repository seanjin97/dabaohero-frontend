/* eslint-disable no-shadow */
import auth from '@/plugins/auth';

export const plugins = [auth];

export const state = () => ({
  username: null,
});

export const mutations = {

  setUsername(state, username) {
    state.username = username;
  },
};
