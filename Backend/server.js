const mongoose =require('mongoose')
const app=require('./app')
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

const DB=process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
mongoose.connect(DB,{
    useNewUrlParser:true
}).then(con=>{
    console.log('DB connection successful')
})

const port =process.env.PORT || 3006;
const server=app.listen(port, () => {
    const address= server.address
  console.log(`App running on port ${port}....`);
});


process.on('unhandledRejection',err=>{
    console.log(err.name,err.message);
    server.close(()=>{
      process.exit(1)
    })
  })