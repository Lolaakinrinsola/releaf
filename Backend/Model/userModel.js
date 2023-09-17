const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:[true, 'name is required']
    },
    lastname:{
        type:String,
        required:[true, 'name is required']
    },
    phone:{
        type:String,
        required:[true, 'name is required']
    },
    address:{
        type:String,
        required:[true, 'name is required']
    },
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
  })

const User=mongoose.model('User',userSchema)

module.exports=User