// server.js

const app = require('./App');

const PORT = 3015;

app.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}`);
});
