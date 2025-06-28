const userService = require('./service');

// Validar datos básicos de usuario
function validarUsuario(data) {
  if (!data.nombre || typeof data.nombre !== 'string') return 'Nombre requerido';
  if (!data.fechaNacimiento || isNaN(Date.parse(data.fechaNacimiento))) return 'Fecha de nacimiento inválida';
  if (!data.correo || typeof data.correo !== 'string') return 'Correo requerido';
  if (!data.contraseña || typeof data.contraseña !== 'string') return 'Contraseña requerida';
  return null;
}

// Crear usuario
exports.createUser = async (req, res) => {
  const error = validarUsuario(req.body);
  if (error) return res.status(400).json({ error });
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener usuario por Email
exports.getUserByEmail = async (req, res) => {
  try {
    const user = await userService.getUserByEmail(req.params.correo);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
  const error = validarUsuario(req.body);
  if (error) return res.status(400).json({ error });
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Iniciar sesión
exports.loginUser = async (req, res) => {
  const { correo, contraseña } = req.body;
  if (!correo || !contraseña) {
    return res.status(400).json({ error: 'Correo y contraseña son requeridos' });
  }
  try {
    const user = await userService.getUserByEmail(correo);
    if (!user || user.contraseña !== contraseña) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    res.json({ mensaje: 'Autenticación exitosa', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
