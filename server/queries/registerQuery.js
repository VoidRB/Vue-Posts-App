import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'dashboard',
  password: 'eudaimonia',
  port: 5432,
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
