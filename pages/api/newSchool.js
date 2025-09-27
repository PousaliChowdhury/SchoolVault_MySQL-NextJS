import mysql from 'mysql2/promise';
import multer from 'multer';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, 
  },
};

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(process.cwd(), 'public/schoolImages'),
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) reject(result);
      else resolve(result);
    });
  });
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await runMiddleware(req, res, upload.single('image'));

      const { name, address, city, state, country, contact, email_id } = req.body;
      const image = req.file ? req.file.filename : null;

      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });

      await connection.execute(
        'INSERT INTO schools (name, address, city, state, country, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [name, address, city, state, country, contact, image, email_id]
      );

      connection.end();

      res.status(200).json({ message: 'School added successfully!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to add school' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
