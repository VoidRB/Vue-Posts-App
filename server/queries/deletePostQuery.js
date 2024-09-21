import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const deletePosts = (req, res) => {
  const id = req.params.postid;
  pool.query('DELETE FROM posts WHERE id = $1', [id], (err, result) => {
    if (err) {
      throw err;
    }
    console.log('Post Deleted successfully');
  });
};

export default deletePosts;
