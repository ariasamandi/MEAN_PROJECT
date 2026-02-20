require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');

app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000000000 }
}))

require('./server/config/mongoose');
require('./server/config/routes')(app);
app.listen(8000, ()=>{
    console.log("Listen on 8000")
})