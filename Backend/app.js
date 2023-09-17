const express =require('express');
const router = require('./routes/userRoutes');
const rateLimit = require('express-rate-limit');

const app=express()
const limiter = rateLimit({
    max:100,
    windowMs: 60 * 60 * 1000,
    message:'Too many requests from this IP, please try again in an hour'
})
app.use(express.json({limit:'10kb'}))

app.use('/app',limiter)
app.use(router)



module.exports=app;
