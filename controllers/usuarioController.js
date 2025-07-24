import db from '../db/connection.js';

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los usuarios', error });
  }
};

// Crear un nuevo usuario
export const crearUsuario = async (req, res) => {
  const { nombre, correo, rol, password } = req.body;

  // Validación dentro de la función
  if (!nombre || !correo || !rol || !password) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO usuarios (nombre, correo, rol, password) VALUES (?, ?, ?, ?)',
      [nombre, correo, rol, password]
    );
    res.status(201).json({ id: result.insertId, nombre, correo, rol });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar usuario', error });
  }
};

// Login de usuario
export const loginUsuario = async (req, res) => {
  const { correo, password } = req.body;

  try {
    const [rows] = await db.query(
      'SELECT * FROM usuarios WHERE correo = ? AND password = ?',
      [correo, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    const usuario = rows[0];
    res.json({
      id: usuario.id,
      nombre: usuario.nombre,
      correo: usuario.correo,
      rol: usuario.rol,
    });
  } catch (error) {
    console.error("Error en loginUsuario:", error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión', error });
  }
};
