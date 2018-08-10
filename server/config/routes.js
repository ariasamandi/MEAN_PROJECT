const Controller = require('./../controllers/controllers');
const path = require('path');
module.exports = (app)=>{
    app.get('/api/food', Controller.getFood);
    app.post('/api/create/food', Controller.addFood);
    // app.all('*', (req, res)=> res.sendFile(path.resolve('./public/dist/public/index.html')));
    
}