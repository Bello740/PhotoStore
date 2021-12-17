import {BackendErrorResponseStatus} from './index';

export interface BackendErrorResponse {
  status: BackendErrorResponseStatus;
  errors?: Record<string, string>;
  message?: string;
}

export interface BackendSuccessResponse<T> {
  status: 'ok';
  data: T;
}
