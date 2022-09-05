const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
// PORT
const PORT = process.env.PORT || 3000;

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
const localDB=process.env.DATABASE_LOCAL;

mongoose.connect(localDB).then(() => console.log('DB connection successful!'));

// Start Server
app.listen(PORT, (req, res) => {
  console.log(`Listening to port ${PORT}`);
});
