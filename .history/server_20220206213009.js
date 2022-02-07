<<<<<<< Updated upstream
const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;
=======
const express = require("express");
const routes = require("./routes");
const session = require("express-session");
// import sequelize connection
const app = express();
const PORT = process.env.PORT || 3005;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
>>>>>>> Stashed changes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/"));

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
