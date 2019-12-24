const Sequelize = require('sequelize');
const express = require('express');
const cors = require('cors');
const connectionDb = require('./config/connectionDb');
const User = require('./models/user');
const app = express();
const connection = new Sequelize(connectionDb);
User.init(connection);
app.use(cors());
app.use(express.json());


app.post('/create-user', async function (req, res) {
  const user =  await User.create({name: req.body.name,id: req.body.id});
  return res.json({user});
});

app.listen(process.env.PORT||3000);
