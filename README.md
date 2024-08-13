
# Lite API Client

A simple and versatile API client for making HTTP requests with support for all HTTP methods and custom headers.

## Installation

Install the package using npm:

```bash
npm install lite-api-client
```


## Usage

Here's how to use the Lite API Client in your project:

```javascript
const LiteApiClient = require('./src/liteApiClient');

// Initialize the API client
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
            title: 'I am in love with Lite API Cleint.',
            userId: '1'
        }));
        console.log('POST /posts/add:', newPost);

        // PUT request with data
        const updatedPost = await api.put('/posts/1', JSON.stringify({
            title: 'Lite API Cleint is easy to use.'
        }));
        console.log('PUT /users/123:', updatedPost);

        // // DELETE request
        const deleteResponse = await api.delete('/posts/1');
        console.log('DELETE /posts/1', deleteResponse);
    } catch (error) {
        console.error('Error:', error);
    }
})();
```

## API Methods

- **setHeader(key, value)**: Set or update a custom header.
- **removeHeader(key)**: Remove a custom header.
- **request(method, url, options)**: Make a general request with the specified method.
- **get(url, options)**: Make a GET request.
- **post(url, data, options)**: Make a POST request.
- **put(url, data, options)**: Make a PUT request.
- **patch(url, data, options)**: Make a PATCH request.
- **delete(url, options)**: Make a DELETE request.
- **head(url, options)**: Make a HEAD request.
- **options(url, options)**: Make an OPTIONS request.

## Contributing

Contributions are welcome! Please open issues or submit pull requests on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.