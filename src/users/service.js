const User = require('./model');

exports.createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

exports.getUsers = async () => {
  return await User.find();
};

exports.getUserByEmail = async (correo) => {
  return await User.findOne({ correo });
};

exports.updateUser = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
