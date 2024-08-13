```markdown
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
const LiteApiClient = require('lite-api-client');

// Initialize the API client
const api = new LiteApiClient('https://api.example.com');

// Set a default authorization token
api.setHeader('Authorization', 'Bearer YOUR_TOKEN_HERE');

// Set the API key in the headers
// Replace 'x-api-key' with the actual header key required by your API
api.setHeader('x-api-key', 'YOUR_API_KEY_HERE');

// Making requests
(async () => {
  try {
    // GET request with query parameters
    const users = await api.get('/users', { params: { id: 123 } });
    console.log('GET /users:', users);

    // POST request with data
    const newUser = await api.post('/users', {
      name: 'Jane Doe',
      email: 'jane@example.com',
    });
    console.log('POST /users:', newUser);

    // PUT request with data
    const updatedUser = await api.put('/users/123', {
      name: 'Jane Smith',
    });
    console.log('PUT /users/123:', updatedUser);

    // DELETE request
    const deleteResponse = await api.delete('/users/123');
    console.log('DELETE /users/123:', deleteResponse);
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
```