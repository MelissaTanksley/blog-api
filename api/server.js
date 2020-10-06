const path =require('path');
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);


// Routers
const authRouter = require('../routers/authRouter.js');
const userRouter = require('../routers/userRouter.js');
const postRouter = require('../routers/postRouter.js');
// const extraRouter = require('../routers/extraRouter.js');
const authenticate = require('../auth/authenticate.js');


// API
// const server = express();
const app = express();

const sessionConfig = {
  name: 'auth',
  secret: 'authenticateUser',
  cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
      httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new knexSessionStore(
      {
          knex: require('../database/db-config.js'),
          tablename: 'sessions',
          sidfieldname: 'sid',
          createtable: true,
          clearInterval: 1000 * 60 * 60
      }
  )
};

// server.use(helmet());
// server.use(cors());
// server.use(express.json());

app.use(helmet());
app.use(cors());
app.use(express.json());

// server.use(session(sessionConfig));
app.use(session(sessionConfig));

// server.use('/api/auth', authRouter);
// server.use('/api/users', authenticate, userRouter);
// server.use('/api/posts', postRouter);
// server.use('/api', extraRouter);

app.use('./api/auth', authRouter);
app.use('/api/users', authenticate, userRouter);
app.use('/api/posts', postRouter);
// app.use('./api', extraRouter);


app.use(express.static('public'));

// server.use('/', (req, res) => {
//     res.send(`
//     <h2>API is working<h2/>
//     `);
// });

app.use((err, req, res, next) => {
    res.status(err.code).json(err);
});

module.exports = app;