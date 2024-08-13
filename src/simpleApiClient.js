// simpleApiClient.js

const axios = require('axios');

class SimpleApiClient {
  constructor(baseURL, defaultHeaders = {}) {
    this.client = axios.create({
      baseURL: baseURL,
      headers: defaultHeaders,
    });
  }

  // Set or update a header
  setHeader(key, value) {
    this.client.defaults.headers.common[key] = value;
  }

  // Remove a header
  removeHeader(key) {
    delete this.client.defaults.headers.common[key];
  }

  // General method for making requests
  async request(method, url, { params = {}, data = {}, headers = {} } = {}) {
    try {
      const response = await this.client.request({
        method,
        url,
        params,
        data,
        headers,
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error(error.message);
    }
  }

  // Shortcut methods for each HTTP method
  get(url, options = {}) {
    return this.request('get', url, options);
  }

  post(url, data = {}, options = {}) {
    return this.request('post', url, { ...options, data });
  }

  put(url, data = {}, options = {}) {
    return this.request('put', url, { ...options, data });
  }

  patch(url, data = {}, options = {}) {
    return this.request('patch', url, { ...options, data });
  }

  delete(url, options = {}) {
    return this.request('delete', url, options);
  }

  head(url, options = {}) {
    return this.request('head', url, options);
  }

  options(url, options = {}) {
    return this.request('options', url, options);
  }
}

module.exports = SimpleApiClient;
