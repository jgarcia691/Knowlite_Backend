const Save = require('./model');

exports.createSave = async (saveData) => {
  const save = new Save(saveData);
  return await save.save();
};

exports.getSaves = async () => {
  return await Save.find();
};

exports.getSaveByEmail = async (autor) => {
  return await Save.findOne({ autor });
};

exports.updateSave = async (id, saveData) => {
  return await Save.findByIdAndUpdate(id, saveData, { new: true });
};

exports.deleteSave = async (id) => {
  return await Save.findByIdAndDelete(id);
};
