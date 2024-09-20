import express from 'express';
import crypto from 'crypto';
import RegUser from '../queries/registerQuery.js';
import passport from 'passport';

const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/posts',
    failureRedirect: '/',
  })
);

router.post('/register', (req, res) => {
  let salt = crypto.randomBytes(16);
  crypto.pbkdf2(
    req.body.RegPassword,
    salt,
    310000,
    32,
    'sha256',
    (err, hashedPassword) => {
      if (err) {
        throw err;
      }
      RegUser(req.body.RegUsername, hashedPassword, salt);
      res.redirect('/');
    }
  );
});

export default router;
