// // test/LiteApiCleint.test.js

// const LiteApiCleint = require('../src/liteApiCleint');
// const axios = require('axios');
// const MockAdapter = require('axios-mock-adapter');

// // Create a mock adapter instance for axios
// const mock = new MockAdapter(axios);

// describe('LiteApiCleint', () => {
//   let api;

//   beforeEach(() => {
//     api = new LiteApiCleint('https://api.example.com');
//   });

//   it('should make a GET request', async () => {
//     const mockData = { id: 123, name: 'John Doe' };
//     mock.onGet('/users').reply(200, mockData);

//     const response = await api.get('/users');
//     expect(response).toEqual(mockData);
//   });

//   it('should make a POST request', async () => {
//     const mockData = { id: 124, name: 'Jane Doe' };
//     const postData = { name: 'Jane Doe' };
//     mock.onPost('/users', postData).reply(201, mockData);

//     const response = await api.post('/users', postData);
//     expect(response).toEqual(mockData);
//   });

//   // Add more tests as needed for other methods and scenarios
// });
