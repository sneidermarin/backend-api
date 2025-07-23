import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // pon tu contraseña si tienes
  database: 'rmbank'
});

export default db;

