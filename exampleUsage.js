const LiteApiClient = require('./src/liteApiClient');

// Initialize the API Client
const api = new LiteApiClient('https://dummyjson.com');

// Set a default authorization token
api.setHeader('Content-Type', 'application/json');

// Making requests
(async () => {
    try {
        // GET request with query parameters
        const posts = await api.get('posts/search', { params: { q: 'love', limit: 1 } });
        console.log('GET /posts/search:', posts);

        // POST request with data
        const newPost = await api.post('/posts/add', JSON.stringify({
            title: 'I am in love with Lite API Client.',
            userId: '1'
        }));
        console.log('POST /posts/add:', newPost);

        // PUT request with data
        const updatedPost = await api.put('/posts/1', JSON.stringify({
            title: 'Lite API Client is easy to use.'
        }));
        console.log('PUT /users/123:', updatedPost);

        // // DELETE request
        const deleteResponse = await api.delete('/posts/1');
        console.log('DELETE /posts/1', deleteResponse);
    } catch (error) {
        console.error('Error:', error);
    }
})();
