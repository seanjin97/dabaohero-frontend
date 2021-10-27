export default async ({ app: { $auth, $axios } }) => {
  if (!$auth.loggedIn) {
    return;
  }
  const { email } = $auth.user;
  const username = $auth.$storage.getUniversal('username');
  if (!username) {
    try {
      const token = await $auth.strategy.token.get();
      const { data } = await $axios.post(`${process.env.BACKEND_URL}/user/login`, { email, headers: { Authorisation: token } });
      // if (data.);
      $auth.$storage.setUniversal('username', data.username, false);
    } catch (err) {
      console.log(err);
    }
  }
};
