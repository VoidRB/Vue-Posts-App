import express from 'express';
import passport from 'passport';
import session from 'express-session';
import addpost from '../queries/addpostQuery.js';
import viewposts from '../queries/ViewPostsQuery.js';
import deletePosts from '../queries/deletePostQuery.js';

const router = express.Router();

router.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
  })
);
router.use(passport.session());

router.get('/', (req, res) => {
  const user = req.session.passport.user;
  res.send({ id: user.id, username: user.username });
});

router.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    console.log('Logged out');
  });
});

router.post('/addpost/:id', (req, res) => {
  const id = req.params.id;
  const post = { title: req.body.title, content: req.body.Content };

  addpost(id, post.title, post.content);
});

router.get('/viewposts/:id', viewposts);
router.get('/predelete/:id', viewposts);
router.delete('/deletepost/:postid', deletePosts);

export default router;
