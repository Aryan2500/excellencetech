const mongoose = require('mongoose')



const userSchema = mongoose.Schema({
    name : {
        type:String,

    },
    email :{
        type: String
    } ,
    scores:{
        type: {
            score: Number,
            level:Number

        } 
        
    },
    total_score:{
        type:Number
    }
})

module.exports =   mongoose.model('User' , userSchema)
 