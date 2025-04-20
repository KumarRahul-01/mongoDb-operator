const mongoose=require('mongoose')
const {Schema}=mongoose


const InventorySchema= new Schema({
    name:{
        type:String,
    },
    price:{
        type:String,
    },
    quantity:{
        type:String,
    },
    category:{
        type:[String],
        
    }
})
const Inventorymodel=mongoose.model("inventoryModel",InventorySchema)
module.exports=Inventorymodel