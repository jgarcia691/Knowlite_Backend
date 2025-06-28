const mongoose = require('mongoose');

const saveSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fecha: { type: Date, required: true },
  autor: { type: String, required: true }, // correo del usuario
  texto: { type: String, required: true }
});

module.exports = mongoose.model('Save', saveSchema);
