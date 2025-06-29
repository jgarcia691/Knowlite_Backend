const { getGeminiSummary } = require('./service');

async function resumenController(req, res) {
  const { texto } = req.body;
  if (!texto) {
    return res.status(400).json({ error: 'Texto requerido' });
  }
  try {
    const resumen = await getGeminiSummary(texto);
    res.json({ resumen });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { resumenController };
