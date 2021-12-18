import {backend} from '../apis/backend';

export const uploadImage = async (payload: FormData) => {
  await backend.post('/upload', payload);
};
