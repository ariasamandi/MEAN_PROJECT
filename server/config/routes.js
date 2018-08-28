const Controller = require('./../controllers/controllers');
const path = require('path');
module.exports = (app)=>{
    app.get('/api/food', Controller.getFood);
    app.post('/api/create/food', Controller.addFood);
    app.post('/api/create/activity', Controller.addActivity);
    app.post('/api/create/schedule', Controller.addSchedule);
    app.get('/api/schedule', Controller.allSchedule);
    app.get('/api/show/:id', Controller.singleSchedule);
    // app.all('*', (req, res)=> res.sendFile(path.resolve('./public/dist/public/index.html')));
    
}