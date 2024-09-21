import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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
