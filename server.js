require('dotenv').config();
const express = require('express');
const mongoose = require('./config/bd');
const usersRouter = require('./src/users/routes');
const savesRouter = require('./src/saves/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', usersRouter);
app.use('/saves', savesRouter);

mongoose.connection.once('open', () => {
  console.log('Conexión a la base de datos establecida');
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a la base de datos:', err);
});
