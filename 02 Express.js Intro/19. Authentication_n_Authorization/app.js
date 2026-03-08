// Core Modules
const path = require('path');

// External Modules
const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const DB_URL = "mongodb+srv://zoya:root@daliustech.nr4dmbg.mongodb.net/airbnb?appName=DaliusTech";

// Local Modules
const storeRouter = require("./router/storeRouter");
const adminRouter = require("./router/adminRouter");
const authRouter = require("./router/authRouter");
const rootDir = require('./utils/pathUtil');
const pageNotFoundController = require('./controllers/404');
const { default: mongoose } = require('mongoose');

const app = express();

app.set('view engine', 'ejs');  // Setting EJS as the templating engine
app.set('views', 'views');      // Setting the views directory

const store = new MongoDBStore({
  uri: DB_URL,
  collection: 'sessions'
});

app.use(express.urlencoded());

app.use(session({
  secret: 'zoya-secret',
  resave: false,
  saveUninitialized: true,
  store
}));

app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn;
  next();
});

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(authRouter);
app.use(storeRouter);
app.use("/admin", (req, res, next) => {
  if (req.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});
app.use("/admin", adminRouter);

app.use(express.static(path.join(rootDir, './public')));

app.use(pageNotFoundController);

const PORT = 7000;

mongoose.connect(DB_URL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log("Error while connecting to MongoDB: ", err);
});