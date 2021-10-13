import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

const clientId = process.env.MGMT_AUTH_CLIENT_ID;
const clientSecret = process.env.MGMT_AUTH_CLIENT_SECRET;

app.post('/', async (req, res, next) => {
  const { body: { email } } = req;

  try {
    const { data: { access_token, token_type } } = await axios.post(`${process.env.AUTH_URL}/oauth/token`, {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      audience: `${process.env.AUTH_URL}/api/v2/`,
    });

    try {
      const options = {
        method: 'GET',
        url: `${process.env.AUTH_URL}/api/v2/users`,
        params: { q: `email:"${email}"`, search_engine: 'v3' },
        headers: { authorization: `${token_type} ${access_token}` },
      };

      const { data } = await axios.request(options);

      res.json(await data[0]);
    } catch (err) {
      console.log(err);
      next(err);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

export default { path: '/api', handler: app };
