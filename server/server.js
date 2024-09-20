import express from 'express';
import Logger from './utils/utils.js';
import cors from 'cors';

import passport from 'passport';
import session from 'express-session';
import './strategy/local-strategy.js';
import PostsRouter from './routes/PostsRouter.js';
import IndexRouter from './routes/IndexRouter.js';

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(Logger);
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/', IndexRouter);
app.use('/posts', PostsRouter);

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    return cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => {
    return cb(null, user);
  });
});

app.listen(port, () => console.log('App running on ' + port));
