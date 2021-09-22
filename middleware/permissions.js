// eslint-disable-next-line consistent-return
export default ({ app, redirect }) => {
  if (app.$auth.loggedIn) {
    const { user } = app.$auth;
    console.log(user);
    if (!user) {
      return redirect('/');
    }
  }
};
