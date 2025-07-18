const Book = require('./model');

exports.createBook = async (bookData) => {
  if (!bookData.fechaSubida) {
    bookData.fechaSubida = new Date();
  }
  const book = new Book(bookData);
  return await book.save();
};

exports.getBooks = async () => {
  return await Book.find();
};

exports.getBookById = async (id) => {
  return await Book.findById(id);
};

exports.updateBook = async (id, bookData) => {
  return await Book.findByIdAndUpdate(id, bookData, { new: true });
};

exports.deleteBook = async (id) => {
  return await Book.findByIdAndDelete(id);
};

exports.searchBooks = async (filter) => {
  return await Book.find(filter);
}; 