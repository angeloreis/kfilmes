import axios from 'axios';

const serverInstagram = axios({
  baseURL: 'https://graph.instagram.com'
});

const mediaId = 'kfilmesofc';
const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN || '';


export default async (req, res) => {
  return await serverInstagram
      .get(`/v9.0/instagram_oembed`)
      .then(response => {
        const {data} = response;
        return res.json(data);
  })
}