import express from 'express';
import { registrarUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

router.post('/usuarios', registrarUsuario); 

export default router;

