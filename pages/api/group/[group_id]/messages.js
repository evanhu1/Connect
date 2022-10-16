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
  client.query(`SELECT text FROM connect_schema.messages WHERE messages.group_id = '${group_id}';`, (err, result) => {
    if (err) {
      res.status(404).json({ error: err })
    } else {
      res.status(200).json({ result: result.rows})
    }
  });
}
