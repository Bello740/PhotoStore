import {backend} from '../apis/backend';

export const imageRequest = async (payload: FormData) => {
  await backend.post('/upload', payload);
  await backend.get('/file');
};
