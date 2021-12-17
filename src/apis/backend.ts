import axios, {AxiosError} from 'axios';

import {
  BackendErrorResponse,
  BackendErrorResponseStatus,
} from '../typings/index';
import {API_URL} from '../config';

const backend = axios.create({
  baseURL: API_URL,
});

backend.interceptors.response.use(
  res => res,
  ({response, request}: AxiosError<BackendErrorResponse>) => {
    console.log('');
    let message = 'Request failed, try again soon.';
    let status = BackendErrorResponseStatus.Error;

    if (response) {
      // if there is a response from the backend, retrieve the first error
      // from it and show that as the error for the request

      const {status: _status, errors, message: _message} = response.data;

      if (errors) {
        const keys = Object.keys(errors);
        const firstKey = keys?.[0];
        message = errors[firstKey];
      } else {
        message = _message || message;
      }

      status = _status;
    }

    return Promise.reject({message, status, statusCode: response?.status});
  },
);

export {backend};
