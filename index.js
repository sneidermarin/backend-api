import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usuariosRoutes from './routes/usuariosRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/usuarios', usuariosRoutes);

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
