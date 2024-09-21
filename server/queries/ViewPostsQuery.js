import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const viewposts = (req, res) => {
  const id = req.params.id;
  pool.query('SELECT * FROM posts WHERE userid = $1', [id], (err, result) => {
    if (err) {
      throw err;
    }
    console.log('Data fetched successfully');

    res.send(result.rows);
  });
};

export default viewposts;
