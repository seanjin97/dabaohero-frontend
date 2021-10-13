import axios from 'axios';

export default async ({ app: { $auth } }) => {
  if (!$auth.loggedIn) {
    return;
  }
  const { email } = $auth.user;
  const username = $auth.$storage.getUniversal('username');
  if (!username) {
    try {
      const { data } = await axios.post('/api', { email });
      $auth.$storage.setUniversal('username', data.username, false);
    } catch (err) {
      console.log(err);
    }
  }
};
