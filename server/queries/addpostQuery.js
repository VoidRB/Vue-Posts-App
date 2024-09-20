import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'dashboard',
  password: 'eudaimonia',
  port: 5432,
});

function addpost(id, title, content) {
  pool.query(
    'INSERT INTO posts (title, content, userid) VALUES ($2, $3, $1)',
    [id, title, content],
    (err) => {
      if (err) {
        throw err;
      }
      console.log('Post added Successfully');
    }
  );
}

export default addpost;
