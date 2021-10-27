export default function axiosIntercept({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log(`Making request to ${config.url}`);
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status, 10);
    if (code === 400) {
      redirect('/error');
    }
  });
}
