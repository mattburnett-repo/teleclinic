import express from 'express';
import { createInquiry } from './services/healthInquiry';

const app = express();
app.use(express.json());

// app.post('/api/inquiries', async (req, res) => {
//   try {
//     const { patientName, symptoms } = req.body;
//     const inquiry = await createInquiry(patientName, symptoms);
//     res.json(inquiry);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create inquiry' });
//   }
// });

const port = process.env.PORT || 3000;

console.log('Attempting database connection...');
console.log('DATABASE_URL:', process.env.DATABASE_URL);

app.get('/', (req, res) => {
  res.json({ message: 'TeleClinic API' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 