const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-promise');
const session = require('express-session');

app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

bcrypt.hash('password_from_form', 10)
.then(hashed_password => {
	 
})
.catch(error => {
	 
});

require('./server/config/mongoose');
require('./server/config/routes')(app);
app.listen(8000, ()=>{
    console.log("Listen on 8000")
})