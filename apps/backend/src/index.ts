import express from 'express';
import { createInquiry } from './services/healthInquiry';
import routes from './routes';

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

console.log('Attempting database connection...');
console.log('DATABASE_URL:', process.env.DATABASE_URL);

app.get('/', (req, res) => {
  res.json({ message: 'TeleClinic API' });
});

app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 