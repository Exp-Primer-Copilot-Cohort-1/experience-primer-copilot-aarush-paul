// Create a web server
// 1. Create a web server
// 2. Handle GET requests to /comments
// 3. Handle POST requests to /comments
// 4. Handle PUT requests to /comments/:id
// 5. Handle DELETE requests to /comments/:id

// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Handle GET requests to /comments
app.get('/comments', (req, res) => {
    res.send('GET comments');
});

// 3. Handle POST requests to /comments
app.post('/comments', (req, res) => {
    res.send('POST comments');
});

// 4. Handle PUT requests to /comments/:id
app.put('/comments/:id', (req, res) => {
    res.send('PUT comments');
});

// 5. Handle DELETE requests to /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.send('DELETE comments');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});