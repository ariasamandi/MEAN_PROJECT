const Controller = require('./../controllers/controllers');
const path = require('path');
module.exports = (app)=>{
    app.get('/api/breakfast', Controller.getBreakfast);
    app.get(`/api/lunch`, Controller.getLunch);
    app.get(`/api/dinner`, Controller.getDinner);
    app.post('/api/create/breakfast/:s_id', Controller.addBreakfast);
    app.post('/api/create/lunch/:s_id', Controller.addLunch);
    app.post('/api/create/dinner/:s_id', Controller.addDinner);
    app.post('/api/create/activity', Controller.addActivity);
    app.post('/api/create/schedule', Controller.addSchedule);
    app.get('/api/schedule', Controller.allSchedule);
    app.get('/api/show/:id', Controller.singleSchedule);
    app.delete('/api/delete/:id', Controller.deleteSchedule);
    app.put('/api/schedule/edit/:id', Controller.editSchedule);
    app.post('/api/login', Controller.login);
    app.post(`/api/register`, Controller.register);
    app.get('/api/users', Controller.users);
    app.get('/api/session', Controller.sessionUser);
    app.get('/logout', Controller.logout);
    app.delete(`/api/breakfast/delete/:id`, Controller.deleteBreakfast);
    app.delete(`/api/lunch/delete/:id`, Controller.deleteLunch);
    app.delete(`/api/dinner/delete/:id`, Controller.deleteDinner);
    app.all('*', (req, res)=> res.sendFile(path.resolve('./public/dist/public/index.html')));
    
}