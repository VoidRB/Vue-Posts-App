import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

function RegUser(name, password, salt) {
  pool.query(
    'INSERT INTO users ( username, hashed_password,salt) VALUES ( $1, $2, $3 );',
    [name, password, salt],
    (err) => {
      if (err) {
        throw err;
      }
      console.log('Successful register to the database');
    }
  );
}

export default RegUser;
