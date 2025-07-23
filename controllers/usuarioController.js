import db from '../db/connection.js';

export const registrarUsuario = async (req, res) => {
  try {
    const { nombre, correo, password, rol } = req.body;

    const [result] = await db.execute(
      'INSERT INTO usuarios (nombre, correo, password, rol) VALUES (?, ?, ?, ?)',
      [nombre, correo, password, rol]
    );

    res.status(201).json({ mensaje: 'Usuario registrado', id: result.insertId });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ mensaje: 'Error en el servidor', error });
  }
};


