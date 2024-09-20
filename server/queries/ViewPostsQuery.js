import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'dashboard',
  password: 'eudaimonia',
  port: 5432,
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
