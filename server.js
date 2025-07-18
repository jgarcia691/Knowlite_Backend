require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('./config/bd');
const usersRouter = require('./src/users/routes');
const booksRouter = require('./src/books/routes');
const apiRouter = require('./src/API/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/api', apiRouter);

mongoose.connection.once('open', () => {
  console.log('Conexión a la base de datos establecida');
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a la base de datos:', err);
});
