const mongoose=require('mongoose')
const{Schema}=mongoose

const salesPromoSchema=new Schema({

    name:{
        type:String,
    },
    period:{
        type:Number,
    },
    daily_sales:{
        type:[Number]
    }
})

const salespronmomodel= mongoose.model("salespromoModel",salesPromoSchema)
module.exports=salespronmomodel