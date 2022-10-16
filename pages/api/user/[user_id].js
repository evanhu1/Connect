const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  connectionString: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export default function handler(req, res) {
  pool.query('SELECT * FROM connect_schema.users;', (err, result) => {
    if (err) {
      res.status(404).json({ error: err })
    } else {
    res.status(200).json({ result: result.rows})
    }
  });
}
