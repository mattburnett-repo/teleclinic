import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

console.log('Attempting database connection...');
console.log('DATABASE_URL:', process.env.DATABASE_URL);

app.get('/', (req, res) => {
  res.json({ message: 'TeleClinic API' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 