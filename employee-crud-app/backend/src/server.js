// /src/server.js
const app = require('./app');
const db = require('./config/database');

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});