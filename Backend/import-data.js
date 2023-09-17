const fs = require('fs')
const mongoose =require('mongoose')
const User=require('./Model/userModel')
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

const DB=process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
mongoose.connect(DB,{
    useNewUrlParser:true
}).then(con=>{
    console.log('DB connection successful')
})

const users =JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8')) 

const importData =async () =>{
    try {
        await User.create(users)
        console.log('Data successfully loaded!')
        process.exit()
    } catch (error) {
        console.log(err)
    }
}

if(process.argv[2]==='--import') importData()


