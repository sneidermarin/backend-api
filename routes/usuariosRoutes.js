// routes/usuariosRoutes.js
import express from 'express';
import {
  obtenerUsuarios,
  crearUsuario,
  loginUsuario
} from '../controllers/usuarioController.js';

const router = express.Router();

// 🔧 Estas rutas ya están bajo '/api/usuarios'
router.get('/', obtenerUsuarios);       // GET /api/usuarios
router.post('/', crearUsuario);         // POST /api/usuarios
router.post('/login', loginUsuario);    // POST /api/usuarios/login

export default router
