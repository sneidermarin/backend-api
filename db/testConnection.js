import { db } from './connection.js';

(async () => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    console.log('✅ Conexión exitosa a MySQL. Resultado:', rows[0].result);
  } catch (err) {
    console.error('❌ Error al conectar con MySQL:', err.message);
  }
})();
