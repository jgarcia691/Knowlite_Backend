const { GoogleGenAI } = require('@google/genai');

// Llama a la API de Gemini para analizar y resumir el texto recibido
async function getGeminiSummary(text) {
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = new GoogleGenAI({ apiKey });
  try {
    const prompt = `Analiza el siguiente texto y proporciona un resumen claro y conciso, resaltando los puntos más importantes y cualquier aspecto relevante:\n\n${text}`;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    throw new Error('Error al obtener resumen de Gemini: ' + error.message);
  }
}

module.exports = { getGeminiSummary };
