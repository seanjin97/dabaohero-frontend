export default async ({ store, app: { $auth, $axios } }) => {
  if (!$auth.loggedIn) {
    return;
  }
  const { email } = $auth.user;
  if (!store.username) {
    try {
      const token = await $auth.strategy.token.get();
      const { data } = await $axios.post(`${process.env.BACKEND_URL}/user/login`, { email, headers: { Authorization: token } });
      $auth.$storage.setUniversal('username', data.username, false);
      store.commit('setUsername', data.username);
    } catch (err) {
      console.log(err);
    }
  }
};
