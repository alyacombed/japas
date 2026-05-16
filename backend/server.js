require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API rodando');
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB conectado');

  app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor rodando na porta 3000');
  });

})
.catch(err => console.log(err));