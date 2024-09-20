import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'dashboard',
  password: 'eudaimonia',
  port: 5432,
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
