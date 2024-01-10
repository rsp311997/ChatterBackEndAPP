const Routers = require('express').Router();

Routers.post('/authenticate',(req,res)=>{
    res.status(200).end("please authenticate");
});

Routers.all('*',(req,res,next)=>{
    const error = Error('404 Resource not found!');
    res.status(404).end('404 Page Not Found!');
    next(error);
});

module.exports = Routers;