import axios from 'axios';

class AxiosService {
  constructor() {
    const instance = axios.create({
      baseURL: 'http://193.180.208.4:8000',
    });
    instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('authToken');

        if (token) {
          config.headers.Authorization = `Token ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.instance = instance;
  }

  getInstance() {
    return this.instance;
  }
}

export default new AxiosService().getInstance();