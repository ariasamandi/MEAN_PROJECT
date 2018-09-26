const Controller = require('./../controllers/controllers');
const path = require('path');
module.exports = (app)=>{
    app.get('/api/breakfast', Controller.getBreakfast);
    app.post('/api/create/breakfast/:s_id', Controller.addBreakfast);
    app.post('/api/create/lunch/:s_id', Controller.addLunch);
    app.post('/api/create/dinner/:s_id', Controller.addDinner);
    app.post('/api/create/activity', Controller.addActivity);
    app.post('/api/create/schedule', Controller.addSchedule);
    app.get('/api/schedule', Controller.allSchedule);
    app.get('/api/show/:id', Controller.singleSchedule);
    app.delete('/api/delete/:id', Controller.deleteSchedule);
    app.put('api/schedule/edit/:id', Controller.editSchedule);
    app.all('*', (req, res)=> res.sendFile(path.resolve('./public/dist/public/index.html')));
    
}