import axios from 'axios';
import { AxiosInstance } from 'axios';

export class HttpClientService {
  private instance: AxiosInstance;
  private logs: boolean;

  constructor(
    options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
    logs = false,
  ) {
    this.instance = axios.create(options);
    this.logs = logs;
  }

  public async post<T>(url: string, data: object | object[], headers: object) {
    return this.instance.post<T>(url, data, { headers });
  }
}

export default HttpClientService;
