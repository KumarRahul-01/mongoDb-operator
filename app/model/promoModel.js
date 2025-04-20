// const mongoose=require('mongoose')
// const {Schema}=mongoose
// let promoschema = {
//     bsonType: "object",
//     required: [ "name", "period", "daily_sales" ],
//     properties: {
//     "name": {
//     bsonType: "string",
//     description: "promotion name"
//     },
//     "period": {
//     bsonType: "double",
//     description: "promotion period",
//     minimum: 7,
//     maximum: 30
//     },
//     "daily_sales": {
//     bsonType: "array"
//     }
//     }
//     }
// const promomodel=mongoose.model("promoModel",promoschema)
// module.exports=promomodel