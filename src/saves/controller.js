const saveService = require('./service');

function validarSave(data) {
  if (!data.nombre || typeof data.nombre !== 'string') return 'Nombre requerido';
  if (!data.fecha || isNaN(Date.parse(data.fecha))) return 'Fecha inválida';
  if (!data.autor || typeof data.autor !== 'string') return 'Autor requerido';
  if (!data.texto || typeof data.texto !== 'string') return 'Texto requerido';
  return null;
}

exports.createSave = async (req, res) => {
  const error = validarSave(req.body);
  if (error) return res.status(400).json({ error });
  try {
    const save = await saveService.createSave(req.body);
    res.status(201).json(save);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSaves = async (req, res) => {
  try {
    const saves = await saveService.getSaves();
    res.json(saves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSaveByEmail = async (req, res) => {
  try {
    const save = await saveService.getSaveByEmail(req.params.autor);
    if (!save) return res.status(404).json({ error: 'Save no encontrado' });
    res.json(save);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSave = async (req, res) => {
  const error = validarSave(req.body);
  if (error) return res.status(400).json({ error });
  try {
    const save = await saveService.updateSave(req.params.id, req.body);
    if (!save) return res.status(404).json({ error: 'Save no encontrado' });
    res.json(save);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSave = async (req, res) => {
  try {
    const save = await saveService.deleteSave(req.params.id);
    if (!save) return res.status(404).json({ error: 'Save no encontrado' });
    res.json({ mensaje: 'Save eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
