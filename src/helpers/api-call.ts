import {backend} from '../apis/backend';
import {ImagePickerPayload} from '../typings';

export const imageRequest = async (payload: ImagePickerPayload) => {
  await backend.post('/upload', payload);
  //   await backend.get('/file');
};
