const Controller = require('./../controllers/controllers');
const path = require('path');
module.exports = (app)=>{
    app.get('/', Controller.index)
    // app.all('*', (req, res)=> res.sendFile(path.resolve('./public/dist/public/index.html')));
    
}