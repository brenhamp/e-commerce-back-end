const express = require('express');
const routes = require('./routes');
const session = require('express-session');
// import sequelize connection
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('.//'));

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});