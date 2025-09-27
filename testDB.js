import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

async function test() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log('✅ DB connected!');
    const [rows] = await connection.execute('SELECT * FROM schools LIMIT 1');
    console.log(rows);

    connection.end();
  } catch (err) {
    console.error('❌ DB connection failed:', err.message);
  }
}

test();
