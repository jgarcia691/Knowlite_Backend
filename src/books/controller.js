const bookService = require('./service');
const { CATEGORIAS } = require('./model');

function validarLibro(data) {
  if (!Array.isArray(data.autores) || data.autores.length === 0 || !data.autores.every(a => typeof a === 'string')) return 'Autores debe ser un array de strings';
  if (!data.titulo || typeof data.titulo !== 'string') return 'Título requerido';
  if (!data.categoria || !CATEGORIAS.includes(data.categoria)) return 'Categoría inválida';
  if (!data.fechaPublicacion || isNaN(Date.parse(data.fechaPublicacion))) return 'Fecha de publicación inválida';
  if (!data.pdfBase64 || typeof data.pdfBase64 !== 'string') return 'PDF (base64) requerido';
  return null;
}

exports.createBook = async (req, res) => {
  const error = validarLibro(req.body);
  if (error) return res.status(400).json({ error });
  try {
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await bookService.getBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Libro no encontrado' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBook = async (req, res) => {
  const error = validarLibro(req.body);
  if (error) return res.status(400).json({ error });
  try {
    const book = await bookService.updateBook(req.params.id, req.body);
    if (!book) return res.status(404).json({ error: 'Libro no encontrado' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await bookService.deleteBook(req.params.id);
    if (!book) return res.status(404).json({ error: 'Libro no encontrado' });
    res.json({ mensaje: 'Libro eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Endpoint de búsqueda avanzada
exports.searchBooks = async (req, res) => {
  const { titulo, autor, categoria, anio } = req.query;
  const filter = {};
  if (titulo) {
    filter.titulo = { $regex: titulo, $options: 'i' };
  }
  if (autor) {
    filter.autores = { $elemMatch: { $regex: autor, $options: 'i' } };
  }
  if (categoria) {
    filter.categoria = categoria;
  }
  if (anio) {
    const year = parseInt(anio);
    if (!isNaN(year)) {
      const start = new Date(year, 0, 1);
      const end = new Date(year + 1, 0, 1);
      filter.fechaPublicacion = { $gte: start, $lt: end };
    }
  }
  try {
    const books = await bookService.searchBooks(filter);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 