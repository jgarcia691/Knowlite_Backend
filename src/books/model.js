const mongoose = require('mongoose');

const CATEGORIAS = [
  'Ciencias Exactas y Naturales',
  'Ingeniería y Tecnología',
  'Ciencias de la Salud',
  'Ciencias Sociales',
  'Economía y Negocios',
  'Educación y Pedagogía',
  'Derecho y Ciencias Jurídicas',
  'Humanidades',
  'Informática y Ciencias de la Computación',
  'Investigación y Metodología',
  'Material de Apoyo / Recursos Generales'
];

const bookSchema = new mongoose.Schema({
  autores: { type: [String], required: true },
  titulo: { type: String, required: true },
  categoria: { type: String, required: true, enum: CATEGORIAS },
  fechaPublicacion: { type: Date, required: true },
  pdfBase64: { type: String, required: true },
  fechaSubida: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('Book', bookSchema);
module.exports.CATEGORIAS = CATEGORIAS; 