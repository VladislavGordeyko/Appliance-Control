import axios from 'axios';
import merge from 'merge';
import qs from 'qs';

import { RestApiResult } from '../interfaces';

import { REACT_APP_API_HOST } from '../consts';

axios.defaults.baseURL = `${REACT_APP_API_HOST}/api`;

interface IHeaders {
  'Content-type'?: string;
}

/** Route with querry */
const composeQuery = (route: string, query?: object) => `${route}?${qs.stringify(query, { encode: false })}`;

const getHeaders = (): IHeaders => ({
  'Content-type': 'application/json',
});

/** Class with main request */
export default class ApiRouter {
  /** GET Request */
  static get<T>(route: string, query?: object, options?: object) {
    return axios.get<RestApiResult<T>>(
      composeQuery(route, query),
      merge.recursive(
        {
          headers: getHeaders(),
        },
        options,
      ),
    );
  }

  /** POST Request */
  static post<T>(
    route: string,
    data: object,
    query?: object,
    options?: object,
  ) {
    return axios.post<RestApiResult<T>>(
      composeQuery(route, query),
      data instanceof FormData ? data : JSON.stringify(data),
      merge.recursive(
        {
          headers: getHeaders(),
        },
        options,
      ),
    );
  }

  /** PUT Request */
  static put<T>(route: string, data: object, query?: object, options?: object) {
    return axios.put<RestApiResult<T>>(
      composeQuery(route, query),
      data instanceof FormData ? data : JSON.stringify(data),
      merge.recursive(
        {
          headers: getHeaders(),
        },
        options,
      ),
    );
  }

  /** DELETE Request */
  static delete<T>(route: string, query?: object, options?: object) {
    return axios.delete<RestApiResult<T>>(
      composeQuery(route, query),
      merge.recursive(
        {
          headers: getHeaders(),
        },
        options,
      ),
    );
  }
}
