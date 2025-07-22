import { db } from '../models/connection.js';

export const obtenerUsuarios = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los usuarios', error });
  }
};

export const crearUsuario = async (req, res) => {
  const { nombre, correo, rol } = req.body;
  try {
    const [resultado] = await db.query(
      'INSERT INTO usuarios (nombre, correo, rol) VALUES (?, ?, ?)',
      [nombre, correo, rol]
    );
    res.json({ id: resultado.insertId, nombre, correo, rol });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear usuario', error });
  }
};
