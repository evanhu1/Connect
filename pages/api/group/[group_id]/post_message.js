const { Client } = require('pg')

const client = new Client({
  user: process.env.DB_USER,
  connectionString: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
client.connect();

export default function handler(req, res) {
  const { group_id } = req.query;
  const text = req.body;
  client.query(`INSERT INTO connect_schema.messages (user_id, group_id, text) 
  VALUES ('acde070d-8c4c-4f0d-9d8a-162843c10333', '${group_id}', '${text}');`, (err, result) => {
    if (err) {
      res.status(404).json({ error: err })
    } else {
      res.status(200).json({ result: result.rows})
    }
  });
}
