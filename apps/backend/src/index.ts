import express from 'express';
import routes from './routes/index.js';

const app = express();
app.use(express.json());

const port = import.meta.env.PORT || 3000;

console.log('Attempting database connection...');
console.log('DATABASE_URL:', import.meta.env.DATABASE_URL);

app.get('/', (req, res) => {
  res.json({ message: 'TeleClinic API' });
});

app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 