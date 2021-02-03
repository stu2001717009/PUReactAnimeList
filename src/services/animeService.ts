import axios from 'axios';

class AnimeService {
  axiosInstance = axios.create({
    baseURL: 'https://api.jikan.moe/v3/user/vas4oo/',
  });

  getAllAnimes(order: string, sort: string) {
    return this.axiosInstance({
      url: `animelist?order_by=${order}&sort=${sort}`,
      method: 'get',
    })
      .then((res) => res.data)
      .catch((err) => Promise.reject(err));
  }
}

export default AnimeService;
