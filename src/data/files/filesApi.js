import axios from 'axios';

export const filesApi = axios.create({
    baseURL: 'http://localhost:3004/',
});

filesApi.get ('/files')
  .then(res => res.data)
  .catch(error => error);