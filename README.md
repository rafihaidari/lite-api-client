
# Lite API Cleint

A simple and versatile API cleint for making HTTP requests with support for all HTTP methods and custom headers.

## Installation

Install the package using npm:

```bash
npm install lite-api-cleint
```


## Usage

Here's how to use the Lite API Cleint in your project:

```javascript
const LiteApiCleint = require('lite-api-cleint');

// Initialize the API cleint
const api = new LiteApiCleint('https://dummyjson.com');

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



---

# Using `lite-api-client` in a ReactJS Application

To integrate `lite-api-client` into your ReactJS application, follow the steps below.

#### Installation

First, ensure that the `lite-api-client` package is installed in your project:

```bash
npm install lite-api-client
```

or if you prefer using Yarn:

```bash
yarn add lite-api-client
```

#### Example Usage in a React Component

Here's an example of how to use `lite-api-client` in a React component to fetch data from an API:

```javascript
import { useState, useEffect } from 'react';
import LiteApiClient from 'lite-api-client';

function App() {
  const [title, setTitle] = useState(null);

  useEffect(() => {
    // Create an instance of LiteApiClient with the base URL
    const apiClient = new LiteApiClient('https://dummyjson.com');

    const fetchData = async () => {
      try {
        // Make a GET request to the specified endpoint with query parameters
        const response = await apiClient.get('/posts/search', {
          params: { q: 'love', limit: 1 },
        });

        // Set the title state with the fetched data
        setTitle(response.posts[0].title);
      } catch (err) {
        // Handle errors
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>npm i lite-api-client</h1>
      <div className="card">Title: {title}</div>
    </>
  );
}

export default App;
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