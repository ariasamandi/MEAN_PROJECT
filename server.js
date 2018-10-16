const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);
app.listen(8000, ()=>{
    console.log("Listen on 8000")
})