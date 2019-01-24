import { filesApi } from './filesApi';

function getFiles () {
  return filesApi.get('/files').then(res => res.data);
}

const filesService = { getFiles };

export default filesService;