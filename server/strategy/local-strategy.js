import passport from 'passport';
import { Strategy } from 'passport-local';
import pkg from 'pg';
import crypto from 'crypto';

const { Pool } = pkg;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export default passport.use(
  new Strategy((username, password, done) => {
    pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username],
      (err, result) => {
        if (err) throw err;
        crypto.pbkdf2(
          password,
          result.rows[0].salt,
          310000,
          32,
          'sha256',
          (err, hashedPassword) => {
            if (err) return done(err);
            if (
              !crypto.timingSafeEqual(
                result.rows[0].hashed_password,
                hashedPassword
              )
            ) {
              return done(null, false);
            }
            return done(null, result.rows[0]);
          }
        );
      }
    );
  })
);
